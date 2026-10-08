import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MathRenderComponent } from '../math-render/math-render.component';

export interface MathToolItem {
  id: string;
  name: string;
  latex: string;
  displayKaTeX?: string;
  category: 'structure' | 'algebra' | 'calculus' | 'trig' | 'symbols';
  subCategory?: string;
  wrapTemplate?: (selected: string) => string;
  description?: string;
}

@Component({
  selector: 'app-math-quick-tools',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MathRenderComponent,
  ],
  template: `
    <!-- Floating Toolbar Container -->
    <div
      class="draggable-math-toolbar"
      [class.minimized]="isMinimized"
      [class.hidden]="!isVisible"
      [class.is-dragging]="isDragging"
      #toolbarElement
      [style.left.px]="posX"
      [style.top.px]="posY"
      [style.right]="posX !== null ? 'auto' : '20px'"
      [style.bottom]="posY !== null ? 'auto' : 'auto'"
      role="region"
      aria-label="Floating Math Tools Toolbar"
      (mousedown)="bringToFront()"
    >
      <!-- Minimized State Bar -->
      <div class="minimized-bar" *ngIf="isMinimized" (mousedown)="onDragStart($event)" matTooltip="Click or press Alt + M to expand Math Tools">
        <div class="minimized-content">
          <span class="drag-grip" title="Drag to move"><mat-icon>drag_indicator</mat-icon></span>
          <span class="math-symbol-badge">&sum;</span>
          <span class="min-title">Math Tools</span>
          <span class="shortcut-tag">Alt + M</span>
          <span class="min-target" *ngIf="targetLabel" [title]="'Target: ' + targetLabel">({{ targetLabel }})</span>
          <span class="min-no-target" *ngIf="!targetLabel">(No input focused)</span>
        </div>
        <div class="min-actions">
          <button type="button" class="tool-ctrl-btn" (click)="toggleMinimize(); $event.stopPropagation()" matTooltip="Expand Math Tools (Alt + M)" title="Expand Math Tools">
            <mat-icon>open_in_full</mat-icon>
          </button>
          <button type="button" class="tool-ctrl-btn close" (click)="hideToolbar(); $event.stopPropagation()" matTooltip="Close Toolbar" title="Close Toolbar">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </div>

      <!-- Full Expanded Toolbar -->
      <div class="toolbar-body" *ngIf="!isMinimized">
        <!-- Draggable Header -->
        <div class="toolbar-header" (mousedown)="onDragStart($event)">
          <div class="header-left">
            <span class="drag-grip" title="Drag toolbar to move"><mat-icon>drag_indicator</mat-icon></span>
            <div class="panel-icon-badge" matTooltip="Math & LaTeX Tools (Shortcut: Alt + M)">
              <span class="symbol-icon">&sum;</span>
            </div>
            <div class="panel-title-group">
              <div class="panel-title-row">
                <span class="panel-title">Math & LaTeX Tools</span>
                <span class="header-shortcut-pill" matTooltip="Press Alt + M to toggle toolbar">Alt + M</span>
                <span class="target-badge" [class.has-target]="!!targetLabel" [class.no-target]="!targetLabel">
                  <mat-icon>{{ targetLabel ? 'edit' : 'info_outline' }}</mat-icon>
                  <span class="badge-text">{{ targetLabel ? targetLabel : 'Click any question or option to target' }}</span>
                </span>
              </div>
            </div>
          </div>
          <div class="header-actions">
            <button
              type="button"
              class="tool-ctrl-btn"
              (click)="toggleMinimize(); $event.stopPropagation()"
              matTooltip="Minimize Toolbar (Alt + M)"
              title="Minimize Toolbar (Alt + M)"
              aria-label="Minimize"
            >
              <mat-icon>close_fullscreen</mat-icon>
            </button>
            <button
              type="button"
              class="tool-ctrl-btn close"
              (click)="hideToolbar(); $event.stopPropagation()"
              matTooltip="Hide Toolbar (Alt + M to reopen)"
              title="Hide Toolbar"
              aria-label="Close"
            >
              <mat-icon>close</mat-icon>
            </button>
          </div>
        </div>

        <!-- No Target Alert Banner -->
        <div class="no-target-banner" *ngIf="!targetElement && showNoTargetHint">
          <mat-icon>touch_app</mat-icon>
          <span>Click inside a Question, Option, or Answer input to insert LaTeX code.</span>
        </div>

        <!-- Search & Options Bar -->
        <div class="toolbar-search-row">
          <div class="search-box">
            <mat-icon class="search-icon">search</mat-icon>
            <input
              #searchInput
              type="text"
              class="search-input"
              [(ngModel)]="searchQuery"
              placeholder="Search math symbols (frac, sqrt, matrix, int, theta)..."
              aria-label="Search math symbols"
              (focus)="$event.stopPropagation()"
            />
            <button
              *ngIf="searchQuery"
              type="button"
              class="clear-search-btn"
              (click)="searchQuery = ''"
            >
              <mat-icon>close</mat-icon>
            </button>
          </div>
          <div class="toolbar-options">
            <label class="toggle-label" title="Automatically enclose inserted LaTeX with $ ... $ for KaTeX math rendering">
              <input type="checkbox" [(ngModel)]="autoWrapDollars" />
              <span>Wrap with $...$</span>
            </label>
          </div>
        </div>

        <!-- Category Tabs -->
        <div class="category-tabs" *ngIf="!searchQuery.trim()">
          <button
            type="button"
            class="tab-btn"
            *ngFor="let cat of categories"
            [class.active]="activeCategory === cat.id"
            (click)="activeCategory = cat.id"
          >
            <span class="tab-icon">{{ cat.icon }}</span>
            <span class="tab-label">{{ cat.label }}</span>
            <span class="tab-count">({{ getCategoryCount(cat.id) }})</span>
          </button>
        </div>

        <!-- Tools Grid Content -->
        <div class="tools-container custom-scrollbar">
          <div class="tools-grid">
            <button
              type="button"
              class="math-tool-btn"
              *ngFor="let item of displayedTools"
              (click)="insertItem(item)"
              [matTooltip]="item.name + ' (' + item.latex + ')'"
              matTooltipPosition="above"
            >
              <div class="tool-preview">
                <app-math-render [text]="item.displayKaTeX || item.latex"></app-math-render>
              </div>
              <span class="tool-name">{{ item.name }}</span>
            </button>
          </div>

          <div class="empty-results" *ngIf="displayedTools.length === 0">
            <mat-icon>search_off</mat-icon>
            <p>No math tools matching "{{ searchQuery }}"</p>
            <button type="button" class="btn-reset-search" (click)="searchQuery = ''">Clear Search</button>
          </div>
        </div>

        <!-- Quick Syntax Shortcuts Bar -->
        <div class="toolbar-footer">
          <div class="quick-helpers">
            <span class="quick-label">Delimiters:</span>
            <button
              type="button"
              class="quick-tag-btn"
              (click)="insertRaw('$', '$', 'x')"
              matTooltip="Inline Math ($ ... $)"
            >
              $ ... $
            </button>
            <button
              type="button"
              class="quick-tag-btn"
              (click)="insertRaw('$$\\n', '\\n$$', 'f(x)')"
              matTooltip="Block Display Math ($$ ... $$)"
            >
              $$ ... $$
            </button>
            <button
              type="button"
              class="quick-tag-btn"
              (click)="insertRaw('\\text{', '}', 'word')"
              matTooltip="Plain text inside formula"
            >
              \\text&#123;...&#125;
            </button>
            <button
              type="button"
              class="quick-tag-btn"
              (click)="insertRaw('\\mathbf{', '}', 'v')"
              matTooltip="Bold math font"
            >
              \\mathbf&#123;...&#125;
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Re-open Floating Bubble Trigger Button when closed -->
    <button
      *ngIf="!isVisible"
      type="button"
      class="reopen-math-tools-btn"
      (click)="showToolbar()"
      matTooltip="LaTeX Tools (Alt + M)"
      aria-label="LaTeX Tools (Alt + M)"
    >
      <span class="bubble-symbol">&sum;</span>
      <span class="bubble-label">Math Tools</span>
      <span class="bubble-shortcut">Alt + M</span>
      <span class="bubble-target-dot" *ngIf="targetLabel" title="Target active"></span>
    </button>
  `,
  styles: [
    `
      /* Floating Draggable Toolbar Container */
      .draggable-math-toolbar {
        position: fixed;
        z-index: 10050;
        width: 44rem;
        max-width: calc(100vw - 2rem);
        background: var(--bg-1, #ffffff);
        border: 1px solid var(--theme-3-border, #cbd5e1);
        border-radius: 0.875rem;
        box-shadow: 0 16px 36px -8px rgba(15, 23, 42, 0.25), 0 4px 12px rgba(0, 0, 0, 0.08);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        user-select: none;
        transition: box-shadow 0.15s ease, opacity 0.15s ease;
      }

      .draggable-math-toolbar.is-dragging {
        box-shadow: 0 24px 48px -10px rgba(15, 23, 42, 0.35), 0 8px 16px rgba(0, 0, 0, 0.12);
        opacity: 0.96;
        cursor: grabbing !important;
      }

      .draggable-math-toolbar.minimized {
        width: auto;
        min-width: 18rem;
        max-width: 28rem;
        box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.2);
      }

      .draggable-math-toolbar.hidden {
        display: none !important;
      }

      /* Dark mode */
      :host-context(.dark-theme) .draggable-math-toolbar,
      :host-context([data-theme='dark']) .draggable-math-toolbar {
        background: var(--bg-1, #1e293b);
        border-color: var(--theme-3-border, #334155);
        color: var(--theme-3-text-1, #f8fafc);
      }

      /* Header */
      .toolbar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.625rem 0.875rem;
        background: var(--bg-2, #f8fafc);
        border-bottom: 1px solid var(--theme-3-border, #e2e8f0);
        cursor: grab;
      }

      .toolbar-header:active {
        cursor: grabbing;
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        min-width: 0;
        flex: 1;
      }

      .drag-grip {
        color: var(--theme-3-text-3, #94a3b8);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: grab;
      }

      .drag-grip mat-icon {
        font-size: 1.25rem;
        width: 1.25rem;
        height: 1.25rem;
      }

      .panel-icon-badge {
        width: 1.85rem;
        height: 1.85rem;
        border-radius: 0.375rem;
        background: linear-gradient(135deg, #4f46e5, #06b6d4);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.05rem;
        box-shadow: 0 2px 4px rgba(79, 70, 229, 0.25);
        flex-shrink: 0;
      }

      .panel-title-group {
        display: flex;
        flex-direction: column;
        min-width: 0;
        flex: 1;
      }

      .panel-title-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .panel-title {
        font-size: 0.925rem;
        font-weight: 700;
        color: var(--theme-3-text-1, #0f172a);
        white-space: nowrap;
      }

      .header-shortcut-pill {
        display: inline-flex;
        align-items: center;
        padding: 0.1rem 0.38rem;
        background: rgba(79, 70, 229, 0.08);
        border: 1px solid rgba(79, 70, 229, 0.22);
        border-radius: 0.25rem;
        font-size: 0.685rem;
        font-weight: 700;
        color: var(--button-1, #4f46e5);
        letter-spacing: 0.02em;
        cursor: default;
      }

      .shortcut-tag {
        display: inline-flex;
        align-items: center;
        padding: 0.08rem 0.35rem;
        background: rgba(79, 70, 229, 0.12);
        border-radius: 0.25rem;
        font-size: 0.675rem;
        font-weight: 700;
        color: var(--button-1, #4f46e5);
        cursor: default;
      }

      .target-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.15rem 0.5rem;
        border-radius: 9999px;
        font-size: 0.725rem;
        font-weight: 600;
        max-width: 16rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .target-badge mat-icon {
        font-size: 0.85rem;
        width: 0.85rem;
        height: 0.85rem;
      }

      .target-badge.has-target {
        background: rgba(79, 70, 229, 0.12);
        color: var(--button-1, #4f46e5);
        border: 1px solid rgba(79, 70, 229, 0.25);
      }

      .target-badge.no-target {
        background: rgba(245, 158, 11, 0.1);
        color: #b45309;
        border: 1px solid rgba(245, 158, 11, 0.25);
      }

      .header-actions {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        flex-shrink: 0;
      }

      .tool-ctrl-btn {
        width: 1.75rem;
        height: 1.75rem;
        border: none;
        background: transparent;
        color: var(--theme-3-text-3, #64748b);
        border-radius: 0.375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.12s ease;
      }

      .tool-ctrl-btn mat-icon {
        font-size: 1.05rem;
        width: 1.05rem;
        height: 1.05rem;
      }

      .tool-ctrl-btn:hover {
        background: rgba(0, 0, 0, 0.06);
        color: var(--theme-3-text-1, #0f172a);
      }

      .tool-ctrl-btn.close:hover {
        background: rgba(239, 68, 68, 0.1);
        color: #dc2626;
      }

      /* Minimized Bar */
      .minimized-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0.75rem;
        background: var(--bg-1, #ffffff);
        cursor: grab;
        gap: 0.5rem;
      }

      .minimized-content {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--theme-3-text-1, #0f172a);
      }

      .math-symbol-badge {
        color: var(--button-1, #4f46e5);
        font-weight: 700;
        font-size: 1.1rem;
      }

      .min-target {
        font-size: 0.75rem;
        color: var(--button-1, #4f46e5);
        font-weight: 600;
      }

      .min-no-target {
        font-size: 0.725rem;
        color: #d97706;
      }

      .min-actions {
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }

      /* No target alert banner */
      .no-target-banner {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.4rem 0.875rem;
        background: #fffbeb;
        border-bottom: 1px solid #fef3c7;
        color: #92400e;
        font-size: 0.775rem;
        font-weight: 500;
      }

      .no-target-banner mat-icon {
        font-size: 1rem;
        width: 1rem;
        height: 1rem;
        color: #d97706;
      }

      /* Search Row */
      .toolbar-search-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.625rem;
        padding: 0.5rem 0.875rem;
        border-bottom: 1px solid var(--theme-3-border, #e2e8f0);
        flex-wrap: wrap;
      }

      .search-box {
        flex: 1;
        min-width: 12rem;
        position: relative;
        display: flex;
        align-items: center;
      }

      .search-icon {
        position: absolute;
        left: 0.5rem;
        color: var(--theme-3-text-3, #94a3b8);
        font-size: 1.05rem;
        width: 1.05rem;
        height: 1.05rem;
        pointer-events: none;
      }

      .search-input {
        width: 100%;
        padding: 0.35rem 1.75rem 0.35rem 1.85rem;
        border: 1px solid var(--theme-3-border, #cbd5e1);
        border-radius: 0.45rem;
        font-size: 0.825rem;
        background: var(--bg-1, #ffffff);
        color: var(--theme-3-text-1, #0f172a);
        outline: none;
        user-select: text;
        transition: border-color 0.15s ease, box-shadow 0.15s ease;
      }

      .search-input:focus {
        border-color: var(--button-1, #4f46e5);
        box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.15);
      }

      .clear-search-btn {
        position: absolute;
        right: 0.35rem;
        background: transparent;
        border: none;
        color: var(--theme-3-text-3, #94a3b8);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .clear-search-btn mat-icon {
        font-size: 0.9rem;
        width: 0.9rem;
        height: 0.9rem;
      }

      .toggle-label {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.775rem;
        font-weight: 600;
        color: var(--theme-3-text-2, #334155);
        cursor: pointer;
      }

      .toggle-label input[type='checkbox'] {
        accent-color: var(--button-1, #4f46e5);
        cursor: pointer;
      }

      /* Category Tabs */
      .category-tabs {
        display: flex;
        gap: 0.25rem;
        padding: 0.35rem 0.875rem 0;
        border-bottom: 1px solid var(--theme-3-border, #e2e8f0);
        overflow-x: auto;
        background: var(--bg-2, #f8fafc);
      }

      .tab-btn {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.4rem 0.6rem;
        border: none;
        border-bottom: 2px solid transparent;
        background: transparent;
        font-size: 0.775rem;
        font-weight: 600;
        color: var(--theme-3-text-3, #64748b);
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.12s ease;
      }

      .tab-btn:hover {
        color: var(--theme-3-text-1, #0f172a);
      }

      .tab-btn.active {
        color: var(--button-1, #4f46e5);
        border-bottom-color: var(--button-1, #4f46e5);
      }

      .tab-count {
        font-size: 0.7rem;
        font-weight: 400;
        opacity: 0.7;
      }

      /* Tools Grid */
      .tools-container {
        padding: 0.625rem 0.875rem;
        max-height: 14rem;
        overflow-y: auto;
      }

      .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(5.75rem, 1fr));
        gap: 0.45rem;
      }

      .math-tool-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        padding: 0.45rem 0.25rem;
        background: var(--bg-2, #f8fafc);
        border: 1px solid var(--theme-3-border, #e2e8f0);
        border-radius: 0.45rem;
        cursor: pointer;
        transition: all 0.12s ease;
        text-align: center;
        min-height: 3.75rem;
      }

      .math-tool-btn:hover {
        background: var(--bg-1, #ffffff);
        border-color: var(--button-1, #4f46e5);
        transform: translateY(-1px);
        box-shadow: 0 3px 8px rgba(79, 70, 229, 0.12);
      }

      .math-tool-btn:active {
        transform: translateY(0);
      }

      .tool-preview {
        font-size: 1rem;
        min-height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--theme-3-text-1, #0f172a);
        overflow: hidden;
      }

      .tool-name {
        font-size: 0.675rem;
        font-weight: 500;
        color: var(--theme-3-text-3, #64748b);
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .empty-results {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.75rem 1rem;
        color: var(--theme-3-text-3, #64748b);
        text-align: center;
      }

      .empty-results mat-icon {
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
        margin-bottom: 0.25rem;
        opacity: 0.5;
      }

      .btn-reset-search {
        margin-top: 0.35rem;
        padding: 0.25rem 0.65rem;
        background: var(--button-1, #4f46e5);
        color: #ffffff;
        border: none;
        border-radius: 0.35rem;
        font-size: 0.75rem;
        cursor: pointer;
      }

      /* Footer */
      .toolbar-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.45rem 0.875rem;
        background: var(--bg-2, #f8fafc);
        border-top: 1px solid var(--theme-3-border, #e2e8f0);
      }

      .quick-helpers {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        flex-wrap: wrap;
      }

      .quick-label {
        font-size: 0.725rem;
        font-weight: 700;
        color: var(--theme-3-text-3, #64748b);
      }

      .quick-tag-btn {
        padding: 0.15rem 0.45rem;
        border: 1px dashed var(--theme-3-border, #cbd5e1);
        border-radius: 0.35rem;
        background: var(--bg-1, #ffffff);
        font-size: 0.725rem;
        font-family: monospace;
        color: var(--theme-3-text-2, #334155);
        cursor: pointer;
        transition: all 0.12s ease;
      }

      .quick-tag-btn:hover {
        border-color: var(--button-1, #4f46e5);
        color: var(--button-1, #4f46e5);
        background: rgba(79, 70, 229, 0.05);
      }

      /* Re-open Floating Bubble Button */
      .reopen-math-tools-btn {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        z-index: 10040;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.5rem 0.9rem;
        background: linear-gradient(135deg, #4f46e5, #06b6d4);
        color: #ffffff;
        border: none;
        border-radius: 9999px;
        font-size: 0.825rem;
        font-weight: 700;
        box-shadow: 0 4px 16px rgba(79, 70, 229, 0.35);
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .reopen-math-tools-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(79, 70, 229, 0.45);
      }

      .bubble-symbol {
        font-size: 1.1rem;
        font-weight: 800;
        line-height: 1;
      }

      .bubble-target-dot {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: #22c55e;
        border: 1px solid #ffffff;
      }

      .bubble-shortcut {
        font-size: 0.7rem;
        padding: 0.1rem 0.35rem;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 0.25rem;
        font-weight: 600;
        margin-left: 0.15rem;
      }

      .custom-scrollbar::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(148, 163, 184, 0.4);
        border-radius: 3px;
      }

      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(148, 163, 184, 0.7);
      }
    `,
  ],
})
export class MathQuickToolsComponent implements OnInit, OnChanges {
  @Input() targetElement: HTMLInputElement | HTMLTextAreaElement | null = null;
  @Input() targetLabel: string = '';
  @Input() currentFieldValue: string = '';

  @Output() inserted = new EventEmitter<{ latex: string; targetElement: HTMLInputElement | HTMLTextAreaElement | null }>();

  @ViewChild('toolbarElement') toolbarElement!: ElementRef;
  @ViewChild('searchInput') searchInputElement?: ElementRef<HTMLInputElement>;

  @Input() isVisible = false;
  isMinimized = false;
  showNoTargetHint = false;
  searchQuery = '';
  activeCategory: 'structure' | 'algebra' | 'calculus' | 'trig' | 'symbols' = 'structure';
  autoWrapDollars = true;

  // Draggable Coordinates
  posX: number | null = null;
  posY: number | null = null;
  isDragging = false;
  private dragStartX = 0;
  private dragStartY = 0;
  private initialPosX = 0;
  private initialPosY = 0;

  categories: Array<{ id: 'structure' | 'algebra' | 'calculus' | 'trig' | 'symbols'; label: string; icon: string }> = [
    { id: 'structure', label: 'Structure & Blocks', icon: '📐' },
    { id: 'algebra', label: 'Algebra & Basic', icon: '🔢' },
    { id: 'calculus', label: 'Calculus & Sums', icon: '📈' },
    { id: 'trig', label: 'Trigonometry', icon: '📐' },
    { id: 'symbols', label: 'Symbols & Greek', icon: '🔣' },
  ];

  tools: MathToolItem[] = [
    // ══════════════════════════════════════════════
    // 1. STRUCTURE & BLOCKS
    // ══════════════════════════════════════════════
    {
      id: 'fraction',
      name: 'Fraction',
      latex: '\\frac{a}{b}',
      displayKaTeX: '\\frac{a}{b}',
      category: 'structure',
      wrapTemplate: (sel) => `\\frac{${sel}}{b}`,
    },
    {
      id: 'sqrt',
      name: 'Square Root',
      latex: '\\sqrt{x}',
      displayKaTeX: '\\sqrt{x}',
      category: 'structure',
      wrapTemplate: (sel) => `\\sqrt{${sel}}`,
    },
    {
      id: 'cbrt',
      name: 'Cube Root',
      latex: '\\sqrt[3]{x}',
      displayKaTeX: '\\sqrt[3]{x}',
      category: 'structure',
      wrapTemplate: (sel) => `\\sqrt[3]{${sel}}`,
    },
    {
      id: 'nthroot',
      name: 'N-th Root',
      latex: '\\sqrt[n]{x}',
      displayKaTeX: '\\sqrt[n]{x}',
      category: 'structure',
      wrapTemplate: (sel) => `\\sqrt[n]{${sel}}`,
    },
    {
      id: 'power',
      name: 'Exponent / Power',
      latex: 'x^{n}',
      displayKaTeX: 'x^{n}',
      category: 'structure',
      wrapTemplate: (sel) => `${sel}^{n}`,
    },
    {
      id: 'subscript',
      name: 'Subscript',
      latex: 'x_{i}',
      displayKaTeX: 'x_{i}',
      category: 'structure',
      wrapTemplate: (sel) => `${sel}_{i}`,
    },
    {
      id: 'subsuper',
      name: 'Sub + Super',
      latex: 'x_{i}^{n}',
      displayKaTeX: 'x_{i}^{n}',
      category: 'structure',
      wrapTemplate: (sel) => `${sel}_{i}^{n}`,
    },
    {
      id: 'square',
      name: 'Square (x²)',
      latex: 'x^2',
      displayKaTeX: 'x^2',
      category: 'structure',
      wrapTemplate: (sel) => `(${sel})^2`,
    },
    {
      id: 'cube',
      name: 'Cube (x³)',
      latex: 'x^3',
      displayKaTeX: 'x^3',
      category: 'structure',
      wrapTemplate: (sel) => `(${sel})^3`,
    },
    {
      id: 'abs',
      name: 'Absolute Value',
      latex: '\\left| x \\right|',
      displayKaTeX: '|x|',
      category: 'structure',
      wrapTemplate: (sel) => `\\left| ${sel} \\right|`,
    },
    {
      id: 'norm',
      name: 'Norm (||x||)',
      latex: '\\left\\| x \\right\\|',
      displayKaTeX: '\\|x\\|',
      category: 'structure',
      wrapTemplate: (sel) => `\\left\\| ${sel} \\right\\|`,
    },
    {
      id: 'parens',
      name: 'Parentheses ( )',
      latex: '\\left( x \\right)',
      displayKaTeX: '(x)',
      category: 'structure',
      wrapTemplate: (sel) => `\\left( ${sel} \\right)`,
    },
    {
      id: 'brackets',
      name: 'Brackets [ ]',
      latex: '\\left[ x \\right]',
      displayKaTeX: '[x]',
      category: 'structure',
      wrapTemplate: (sel) => `\\left[ ${sel} \\right]`,
    },
    {
      id: 'braces',
      name: 'Braces { }',
      latex: '\\left\\{ x \\right\\}',
      displayKaTeX: '\\{x\\}',
      category: 'structure',
      wrapTemplate: (sel) => `\\left\\{ ${sel} \\right\\}`,
    },
    {
      id: 'floor',
      name: 'Floor ⌊x⌋',
      latex: '\\lfloor x \\rfloor',
      displayKaTeX: '\\lfloor x \\rfloor',
      category: 'structure',
      wrapTemplate: (sel) => `\\lfloor ${sel} \\rfloor`,
    },
    {
      id: 'ceil',
      name: 'Ceiling ⌈x⌉',
      latex: '\\lceil x \\rceil',
      displayKaTeX: '\\lceil x \\rceil',
      category: 'structure',
      wrapTemplate: (sel) => `\\lceil ${sel} \\rceil`,
    },
    {
      id: 'matrix2x2',
      name: '2×2 Matrix',
      latex: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
      displayKaTeX: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
      category: 'structure',
    },
    {
      id: 'matrix3x3',
      name: '3×3 Matrix',
      latex: '\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}',
      displayKaTeX: '\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}',
      category: 'structure',
    },
    {
      id: 'det2x2',
      name: 'Determinant',
      latex: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}',
      displayKaTeX: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}',
      category: 'structure',
    },
    {
      id: 'cases',
      name: 'Piecewise / Cases',
      latex: '\\begin{cases} x & x \\ge 0 \\\\ -x & x < 0 \\end{cases}',
      displayKaTeX: '\\begin{cases} x & x \\ge 0 \\\\ -x & x < 0 \\end{cases}',
      category: 'structure',
    },
    {
      id: 'vector',
      name: 'Vector (v⃗)',
      latex: '\\vec{v}',
      displayKaTeX: '\\vec{v}',
      category: 'structure',
      wrapTemplate: (sel) => `\\vec{${sel}}`,
    },
    {
      id: 'overline',
      name: 'Overline (x̄)',
      latex: '\\overline{x}',
      displayKaTeX: '\\overline{x}',
      category: 'structure',
      wrapTemplate: (sel) => `\\overline{${sel}}`,
    },
    {
      id: 'hat',
      name: 'Hat (x̂)',
      latex: '\\hat{x}',
      displayKaTeX: '\\hat{x}',
      category: 'structure',
      wrapTemplate: (sel) => `\\hat{${sel}}`,
    },
    {
      id: 'dot',
      name: 'Dot (ẋ)',
      latex: '\\dot{x}',
      displayKaTeX: '\\dot{x}',
      category: 'structure',
      wrapTemplate: (sel) => `\\dot{${sel}}`,
    },
    {
      id: 'ddot',
      name: 'Double Dot (ẍ)',
      latex: '\\ddot{x}',
      displayKaTeX: '\\ddot{x}',
      category: 'structure',
      wrapTemplate: (sel) => `\\ddot{${sel}}`,
    },

    // ══════════════════════════════════════════════
    // 2. ALGEBRA & BASIC
    // ══════════════════════════════════════════════
    { id: 'pm', name: 'Plus/Minus', latex: '\\pm', displayKaTeX: '\\pm', category: 'algebra' },
    { id: 'mp', name: 'Minus/Plus', latex: '\\mp', displayKaTeX: '\\mp', category: 'algebra' },
    { id: 'times', name: 'Multiplication (×)', latex: '\\times', displayKaTeX: '\\times', category: 'algebra' },
    { id: 'cdot', name: 'Dot Product (·)', latex: '\\cdot', displayKaTeX: '\\cdot', category: 'algebra' },
    { id: 'div', name: 'Division (÷)', latex: '\\div', displayKaTeX: '\\div', category: 'algebra' },
    { id: 'neq', name: 'Not Equal (≠)', latex: '\\neq', displayKaTeX: '\\neq', category: 'algebra' },
    { id: 'le', name: 'Less or Equal (≤)', latex: '\\le', displayKaTeX: '\\le', category: 'algebra' },
    { id: 'ge', name: 'Greater or Equal (≥)', latex: '\\ge', displayKaTeX: '\\ge', category: 'algebra' },
    { id: 'll', name: 'Much Less (≪)', latex: '\\ll', displayKaTeX: '\\ll', category: 'algebra' },
    { id: 'gg', name: 'Much Greater (≫)', latex: '\\gg', displayKaTeX: '\\gg', category: 'algebra' },
    { id: 'approx', name: 'Approximately (≈)', latex: '\\approx', displayKaTeX: '\\approx', category: 'algebra' },
    { id: 'equiv', name: 'Equivalent (≡)', latex: '\\equiv', displayKaTeX: '\\equiv', category: 'algebra' },
    { id: 'propto', name: 'Proportional (∝)', latex: '\\propto', displayKaTeX: '\\propto', category: 'algebra' },
    { id: 'infty', name: 'Infinity (∞)', latex: '\\infty', displayKaTeX: '\\infty', category: 'algebra' },
    { id: 'factorial', name: 'Factorial (n!)', latex: 'n!', displayKaTeX: 'n!', category: 'algebra' },
    { id: 'binom', name: 'Binomial (n choose k)', latex: '\\binom{n}{k}', displayKaTeX: '\\binom{n}{k}', category: 'algebra' },
    { id: 'ln', name: 'Natural Log ln(x)', latex: '\\ln(x)', displayKaTeX: '\\ln(x)', category: 'algebra' },
    { id: 'log10', name: 'Log base 10', latex: '\\log_{10}(x)', displayKaTeX: '\\log_{10}(x)', category: 'algebra' },
    { id: 'logb', name: 'Log base b', latex: '\\log_{b}(x)', displayKaTeX: '\\log_{b}(x)', category: 'algebra' },
    { id: 'exp', name: 'Exponential (eˣ)', latex: 'e^{x}', displayKaTeX: 'e^{x}', category: 'algebra' },
    {
      id: 'quadratic',
      name: 'Quadratic Formula',
      latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
      displayKaTeX: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
      category: 'algebra',
    },

    // ══════════════════════════════════════════════
    // 3. CALCULUS & SUMS
    // ══════════════════════════════════════════════
    {
      id: 'def_integral',
      name: 'Definite Integral',
      latex: '\\int_{a}^{b} f(x) \\, dx',
      displayKaTeX: '\\int_{a}^{b} f(x) \\, dx',
      category: 'calculus',
    },
    {
      id: 'indef_integral',
      name: 'Indefinite Integral',
      latex: '\\int f(x) \\, dx',
      displayKaTeX: '\\int f(x) \\, dx',
      category: 'calculus',
    },
    {
      id: 'double_integral',
      name: 'Double Integral',
      latex: '\\iint f(x,y) \\, dx \\, dy',
      displayKaTeX: '\\iint f(x,y) \\, dx \\, dy',
      category: 'calculus',
    },
    {
      id: 'contour_integral',
      name: 'Contour Integral',
      latex: '\\oint f(z) \\, dz',
      displayKaTeX: '\\oint f(z) \\, dz',
      category: 'calculus',
    },
    {
      id: 'derivative',
      name: 'Derivative (df/dx)',
      latex: '\\frac{df}{dx}',
      displayKaTeX: '\\frac{df}{dx}',
      category: 'calculus',
    },
    {
      id: 'second_derivative',
      name: 'Second Derivative',
      latex: '\\frac{d^2f}{dx^2}',
      displayKaTeX: '\\frac{d^2f}{dx^2}',
      category: 'calculus',
    },
    {
      id: 'partial_derivative',
      name: 'Partial Derivative',
      latex: '\\frac{\\partial f}{\\partial x}',
      displayKaTeX: '\\frac{\\partial f}{\\partial x}',
      category: 'calculus',
    },
    {
      id: 'summation',
      name: 'Summation (∑)',
      latex: '\\sum_{i=1}^{n} x_i',
      displayKaTeX: '\\sum_{i=1}^{n} x_i',
      category: 'calculus',
    },
    {
      id: 'sum_infty',
      name: 'Infinite Sum (∑ to ∞)',
      latex: '\\sum_{n=1}^{\\infty} a_n',
      displayKaTeX: '\\sum_{n=1}^{\\infty} a_n',
      category: 'calculus',
    },
    {
      id: 'product',
      name: 'Product (∏)',
      latex: '\\prod_{i=1}^{n} x_i',
      displayKaTeX: '\\prod_{i=1}^{n} x_i',
      category: 'calculus',
    },
    {
      id: 'limit_a',
      name: 'Limit (x → a)',
      latex: '\\lim_{x \\to a} f(x)',
      displayKaTeX: '\\lim_{x \\to a} f(x)',
      category: 'calculus',
    },
    {
      id: 'limit_infty',
      name: 'Limit (x → ∞)',
      latex: '\\lim_{x \\to \\infty} f(x)',
      displayKaTeX: '\\lim_{x \\to \\infty} f(x)',
      category: 'calculus',
    },
    { id: 'partial', name: 'Partial (∂)', latex: '\\partial', displayKaTeX: '\\partial', category: 'calculus' },
    { id: 'nabla', name: 'Nabla / Grad (∇)', latex: '\\nabla', displayKaTeX: '\\nabla', category: 'calculus' },
    { id: 'delta_cap', name: 'Delta (Δ)', latex: '\\Delta', displayKaTeX: '\\Delta', category: 'calculus' },
    { id: 'prime', name: 'Prime f\'(x)', latex: "f'(x)", displayKaTeX: "f'(x)", category: 'calculus' },
    { id: 'dbl_prime', name: 'Double Prime f\'\'(x)', latex: "f''(x)", displayKaTeX: "f''(x)", category: 'calculus' },

    // ══════════════════════════════════════════════
    // 4. TRIGONOMETRY
    // ══════════════════════════════════════════════
    { id: 'sin', name: 'Sine sin(θ)', latex: '\\sin(\\theta)', displayKaTeX: '\\sin(\\theta)', category: 'trig' },
    { id: 'cos', name: 'Cosine cos(θ)', latex: '\\cos(\\theta)', displayKaTeX: '\\cos(\\theta)', category: 'trig' },
    { id: 'tan', name: 'Tangent tan(θ)', latex: '\\tan(\\theta)', displayKaTeX: '\\tan(\\theta)', category: 'trig' },
    { id: 'csc', name: 'Cosecant csc(θ)', latex: '\\csc(\\theta)', displayKaTeX: '\\csc(\\theta)', category: 'trig' },
    { id: 'sec', name: 'Secant sec(θ)', latex: '\\sec(\\theta)', displayKaTeX: '\\sec(\\theta)', category: 'trig' },
    { id: 'cot', name: 'Cotangent cot(θ)', latex: '\\cot(\\theta)', displayKaTeX: '\\cot(\\theta)', category: 'trig' },
    { id: 'arcsin', name: 'Arc-sine arcsin(x)', latex: '\\arcsin(x)', displayKaTeX: '\\arcsin(x)', category: 'trig' },
    { id: 'arccos', name: 'Arc-cosine arccos(x)', latex: '\\arccos(x)', displayKaTeX: '\\arccos(x)', category: 'trig' },
    { id: 'arctan', name: 'Arc-tangent arctan(x)', latex: '\\arctan(x)', displayKaTeX: '\\arctan(x)', category: 'trig' },
    { id: 'sinh', name: 'Hyperbolic sinh(x)', latex: '\\sinh(x)', displayKaTeX: '\\sinh(x)', category: 'trig' },
    { id: 'cosh', name: 'Hyperbolic cosh(x)', latex: '\\cosh(x)', displayKaTeX: '\\cosh(x)', category: 'trig' },
    { id: 'tanh', name: 'Hyperbolic tanh(x)', latex: '\\tanh(x)', displayKaTeX: '\\tanh(x)', category: 'trig' },
    { id: 'degree', name: 'Degree (90°)', latex: '90^{\\circ}', displayKaTeX: '90^{\\circ}', category: 'trig' },
    { id: 'angle', name: 'Angle (∠ABC)', latex: '\\angle ABC', displayKaTeX: '\\angle ABC', category: 'trig' },
    {
      id: 'pythagoras_trig',
      name: 'Pythagorean Identity',
      latex: '\\sin^2(\\theta) + \\cos^2(\\theta) = 1',
      displayKaTeX: '\\sin^2(\\theta) + \\cos^2(\\theta) = 1',
      category: 'trig',
    },

    // ══════════════════════════════════════════════
    // 5. SYMBOLS & GREEK
    // ══════════════════════════════════════════════
    { id: 'alpha', name: 'Alpha (α)', latex: '\\alpha', displayKaTeX: '\\alpha', category: 'symbols' },
    { id: 'beta', name: 'Beta (β)', latex: '\\beta', displayKaTeX: '\\beta', category: 'symbols' },
    { id: 'gamma', name: 'Gamma (γ)', latex: '\\gamma', displayKaTeX: '\\gamma', category: 'symbols' },
    { id: 'delta', name: 'Delta (δ)', latex: '\\delta', displayKaTeX: '\\delta', category: 'symbols' },
    { id: 'epsilon', name: 'Epsilon (ε)', latex: '\\epsilon', displayKaTeX: '\\epsilon', category: 'symbols' },
    { id: 'zeta', name: 'Zeta (ζ)', latex: '\\zeta', displayKaTeX: '\\zeta', category: 'symbols' },
    { id: 'eta', name: 'Eta (η)', latex: '\\eta', displayKaTeX: '\\eta', category: 'symbols' },
    { id: 'theta', name: 'Theta (θ)', latex: '\\theta', displayKaTeX: '\\theta', category: 'symbols' },
    { id: 'iota', name: 'Iota (ι)', latex: '\\iota', displayKaTeX: '\\iota', category: 'symbols' },
    { id: 'kappa', name: 'Kappa (κ)', latex: '\\kappa', displayKaTeX: '\\kappa', category: 'symbols' },
    { id: 'lambda', name: 'Lambda (λ)', latex: '\\lambda', displayKaTeX: '\\lambda', category: 'symbols' },
    { id: 'mu', name: 'Mu (μ)', latex: '\\mu', displayKaTeX: '\\mu', category: 'symbols' },
    { id: 'nu', name: 'Nu (ν)', latex: '\\nu', displayKaTeX: '\\nu', category: 'symbols' },
    { id: 'xi', name: 'Xi (ξ)', latex: '\\xi', displayKaTeX: '\\xi', category: 'symbols' },
    { id: 'pi', name: 'Pi (π)', latex: '\\pi', displayKaTeX: '\\pi', category: 'symbols' },
    { id: 'rho', name: 'Rho (ρ)', latex: '\\rho', displayKaTeX: '\\rho', category: 'symbols' },
    { id: 'sigma', name: 'Sigma (σ)', latex: '\\sigma', displayKaTeX: '\\sigma', category: 'symbols' },
    { id: 'tau', name: 'Tau (τ)', latex: '\\tau', displayKaTeX: '\\tau', category: 'symbols' },
    { id: 'phi', name: 'Phi (φ)', latex: '\\phi', displayKaTeX: '\\phi', category: 'symbols' },
    { id: 'chi', name: 'Chi (χ)', latex: '\\chi', displayKaTeX: '\\chi', category: 'symbols' },
    { id: 'psi', name: 'Psi (ψ)', latex: '\\psi', displayKaTeX: '\\psi', category: 'symbols' },
    { id: 'omega', name: 'Omega (ω)', latex: '\\omega', displayKaTeX: '\\omega', category: 'symbols' },
    // Uppercase Greek
    { id: 'Gamma', name: 'Gamma (Γ)', latex: '\\Gamma', displayKaTeX: '\\Gamma', category: 'symbols' },
    { id: 'Delta', name: 'Delta (Δ)', latex: '\\Delta', displayKaTeX: '\\Delta', category: 'symbols' },
    { id: 'Theta', name: 'Theta (Θ)', latex: '\\Theta', displayKaTeX: '\\Theta', category: 'symbols' },
    { id: 'Lambda', name: 'Lambda (Λ)', latex: '\\Lambda', displayKaTeX: '\\Lambda', category: 'symbols' },
    { id: 'Xi', name: 'Xi (Ξ)', latex: '\\Xi', displayKaTeX: '\\Xi', category: 'symbols' },
    { id: 'Pi', name: 'Pi (Π)', latex: '\\Pi', displayKaTeX: '\\Pi', category: 'symbols' },
    { id: 'Sigma', name: 'Sigma (Σ)', latex: '\\Sigma', displayKaTeX: '\\Sigma', category: 'symbols' },
    { id: 'Phi', name: 'Phi (Φ)', latex: '\\Phi', displayKaTeX: '\\Phi', category: 'symbols' },
    { id: 'Psi', name: 'Psi (Ψ)', latex: '\\Psi', displayKaTeX: '\\Psi', category: 'symbols' },
    { id: 'Omega', name: 'Omega (Ω)', latex: '\\Omega', displayKaTeX: '\\Omega', category: 'symbols' },
    // Sets & Logic
    { id: 'in', name: 'Element of (∈)', latex: '\\in', displayKaTeX: '\\in', category: 'symbols' },
    { id: 'notin', name: 'Not in (∉)', latex: '\\notin', displayKaTeX: '\\notin', category: 'symbols' },
    { id: 'subset', name: 'Subset (⊂)', latex: '\\subset', displayKaTeX: '\\subset', category: 'symbols' },
    { id: 'subseteq', name: 'Subset or equal (⊆)', latex: '\\subseteq', displayKaTeX: '\\subseteq', category: 'symbols' },
    { id: 'cup', name: 'Union (∪)', latex: '\\cup', displayKaTeX: '\\cup', category: 'symbols' },
    { id: 'cap', name: 'Intersection (∩)', latex: '\\cap', displayKaTeX: '\\cap', category: 'symbols' },
    { id: 'emptyset', name: 'Empty Set (∅)', latex: '\\emptyset', displayKaTeX: '\\emptyset', category: 'symbols' },
    { id: 'reals', name: 'Real Numbers (ℝ)', latex: '\\mathbb{R}', displayKaTeX: '\\mathbb{R}', category: 'symbols' },
    { id: 'naturals', name: 'Naturals (ℕ)', latex: '\\mathbb{N}', displayKaTeX: '\\mathbb{N}', category: 'symbols' },
    { id: 'integers', name: 'Integers (ℤ)', latex: '\\mathbb{Z}', displayKaTeX: '\\mathbb{Z}', category: 'symbols' },
    { id: 'complex', name: 'Complex (ℂ)', latex: '\\mathbb{C}', displayKaTeX: '\\mathbb{C}', category: 'symbols' },
    { id: 'rationals', name: 'Rationals (ℚ)', latex: '\\mathbb{Q}', displayKaTeX: '\\mathbb{Q}', category: 'symbols' },
    { id: 'forall', name: 'For all (∀)', latex: '\\forall', displayKaTeX: '\\forall', category: 'symbols' },
    { id: 'exists', name: 'Exists (∃)', latex: '\\exists', displayKaTeX: '\\exists', category: 'symbols' },
    { id: 'nexists', name: 'Not exists (∄)', latex: '\\nexists', displayKaTeX: '\\nexists', category: 'symbols' },
    { id: 'implies', name: 'Implies (⇒)', latex: '\\implies', displayKaTeX: '\\implies', category: 'symbols' },
    { id: 'iff', name: 'If and only if (⟺)', latex: '\\iff', displayKaTeX: '\\iff', category: 'symbols' },
    { id: 'therefore', name: 'Therefore (∴)', latex: '\\therefore', displayKaTeX: '\\therefore', category: 'symbols' },
    { id: 'because', name: 'Because (∵)', latex: '\\because', displayKaTeX: '\\because', category: 'symbols' },
    // Arrows
    { id: 'to_arrow', name: 'Right Arrow (→)', latex: '\\to', displayKaTeX: '\\to', category: 'symbols' },
    { id: 'leftarrow', name: 'Left Arrow (←)', latex: '\\leftarrow', displayKaTeX: '\\leftarrow', category: 'symbols' },
    { id: 'leftrightarrow', name: 'Bidirectional (↔)', latex: '\\leftrightarrow', displayKaTeX: '\\leftrightarrow', category: 'symbols' },
    { id: 'uparrow', name: 'Up Arrow (↑)', latex: '\\uparrow', displayKaTeX: '\\uparrow', category: 'symbols' },
    { id: 'downarrow', name: 'Down Arrow (↓)', latex: '\\downarrow', displayKaTeX: '\\downarrow', category: 'symbols' },
    { id: 'mapsto', name: 'Maps to (↦)', latex: '\\mapsto', displayKaTeX: '\\mapsto', category: 'symbols' },
  ];

  ngOnInit(): void {
    // Initial default top-right position
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      const toolbarWidth = 704; // 44rem
      this.posX = Math.max(20, screenWidth - toolbarWidth - 30);
      this.posY = 110;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['targetElement'] && this.targetElement) {
      this.showNoTargetHint = false;
    }
  }

  get displayedTools(): MathToolItem[] {
    const q = (this.searchQuery || '').trim().toLowerCase();
    if (!q) {
      return this.tools.filter((t) => t.category === this.activeCategory);
    }
    return this.tools.filter((t) => {
      const name = t.name.toLowerCase();
      const latex = t.latex.toLowerCase();
      const cat = t.category.toLowerCase();
      return name.includes(q) || latex.includes(q) || cat.includes(q);
    });
  }

  getCategoryCount(categoryId: 'structure' | 'algebra' | 'calculus' | 'trig' | 'symbols'): number {
    return this.tools.filter((t) => t.category === categoryId).length;
  }

  insertItem(item: MathToolItem): void {
    const target = this.targetElement;
    if (!target) {
      this.showNoTargetHint = true;
      return;
    }

    this.showNoTargetHint = false;
    let snippet = item.latex;

    target.focus();
    const start = target.selectionStart ?? target.value.length;
    const end = target.selectionEnd ?? target.value.length;
    const selectedText = target.value.substring(start, end);

    let textToInsert = snippet;
    if (selectedText && item.wrapTemplate) {
      textToInsert = item.wrapTemplate(selectedText);
    }

    if (this.autoWrapDollars && !textToInsert.startsWith('$') && !textToInsert.startsWith('\\begin{')) {
      textToInsert = `$ ${textToInsert} $`;
    }

    const before = target.value.substring(0, start);
    const after = target.value.substring(end);
    target.value = before + textToInsert + after;

    // Dispatch native input & change events for Angular two-way binding
    target.dispatchEvent(new Event('input', { bubbles: true }));
    target.dispatchEvent(new Event('change', { bubbles: true }));

    // Set cursor position after inserted snippet
    const newCursor = start + textToInsert.length;
    try {
      target.setSelectionRange(newCursor, newCursor);
      target.focus();
    } catch (e) {}

    this.inserted.emit({ latex: textToInsert, targetElement: target });
  }

  insertRaw(prefix: string, suffix: string, defaultText: string = ''): void {
    const target = this.targetElement;
    if (!target) {
      this.showNoTargetHint = true;
      return;
    }

    this.showNoTargetHint = false;
    target.focus();
    const start = target.selectionStart ?? target.value.length;
    const end = target.selectionEnd ?? target.value.length;
    const selectedText = target.value.substring(start, end) || defaultText;
    const insertion = prefix + selectedText + suffix;

    const before = target.value.substring(0, start);
    const after = target.value.substring(end);
    target.value = before + insertion + after;

    target.dispatchEvent(new Event('input', { bubbles: true }));
    target.dispatchEvent(new Event('change', { bubbles: true }));

    const newCursor = start + insertion.length;
    try {
      target.setSelectionRange(newCursor, newCursor);
      target.focus();
    } catch (e) {}

    this.inserted.emit({ latex: insertion, targetElement: target });
  }

  // ══════════════════════════════════════════════
  // Toolbar Window Controls & Draggability
  // ══════════════════════════════════════════════
  toggleMinimize(): void {
    this.isMinimized = !this.isMinimized;
  }

  hideToolbar(): void {
    this.isVisible = false;
  }

  showToolbar(): void {
    this.isVisible = true;
    this.isMinimized = false;
  }

  bringToFront(): void {
    // Keep above other elements
  }

  onDragStart(event: MouseEvent): void {
    // Only allow left mouse click dragging
    if (event.button !== 0) return;
    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;

    const rect = this.toolbarElement?.nativeElement?.getBoundingClientRect();
    if (rect) {
      this.initialPosX = rect.left;
      this.initialPosY = rect.top;
      this.posX = rect.left;
      this.posY = rect.top;
    }
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    const deltaX = event.clientX - this.dragStartX;
    const deltaY = event.clientY - this.dragStartY;

    const newX = this.initialPosX + deltaX;
    const newY = this.initialPosY + deltaY;

    // Viewport bounding clamp
    const toolbarWidth = this.toolbarElement?.nativeElement?.offsetWidth || 300;
    const toolbarHeight = this.toolbarElement?.nativeElement?.offsetHeight || 100;

    const maxX = Math.max(0, window.innerWidth - toolbarWidth - 10);
    const maxY = Math.max(0, window.innerHeight - toolbarHeight - 10);

    this.posX = Math.min(Math.max(10, newX), maxX);
    this.posY = Math.min(Math.max(10, newY), maxY);
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isDragging = false;
  }

  @HostListener('window:keydown', ['$event'])
  onGlobalKeyDown(event: KeyboardEvent): void {
    // Alt + M or Alt + m shortcut to toggle Math Quick Tools
    if (event.altKey && (event.key === 'm' || event.key === 'M' || event.code === 'KeyM')) {
      event.preventDefault();
      this.toggleToolbarWithShortcut();
    }
  }

  toggleToolbarWithShortcut(): void {
    if (!this.isVisible) {
      this.isVisible = true;
      this.isMinimized = false;
      setTimeout(() => {
        this.searchInputElement?.nativeElement?.focus();
      }, 50);
    } else if (this.isMinimized) {
      this.isMinimized = false;
      setTimeout(() => {
        this.searchInputElement?.nativeElement?.focus();
      }, 50);
    } else {
      // If already open and expanded, minimize
      this.isMinimized = true;
    }
  }
}
