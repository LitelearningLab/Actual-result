import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DateRangeDialogData {
  startDate?: Date | string | null;
  endDate?: Date | string | null;
}

export interface DateRangeDialogResult {
  startDate: Date | null;
  endDate: Date | null;
}

interface CalendarCell {
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
  isStart: boolean;
  isEnd: boolean;
  hasEnd: boolean;
  isInRange: boolean;
  isPreview: boolean;
}

@Component({
  selector: 'app-date-range-picker-dialog',
  templateUrl: './date-range-picker-dialog.component.html',
  styleUrls: ['./date-range-picker-dialog.component.scss']
})
export class DateRangePickerDialogComponent implements OnInit {
  activePreset: string | null = null;
  selectedStart: Date | null = null;
  selectedEnd: Date | null = null;
  hoverDate: Date | null = null;

  startDateInput: string = '';
  endDateInput: string = '';

  currentMonth: Date = new Date();
  weekDays: string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  calendarGrid: CalendarCell[] = [];

  constructor(
    public dialogRef: MatDialogRef<DateRangePickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DateRangeDialogData
  ) {}

  ngOnInit(): void {
    if (this.data) {
      if (this.data.startDate) {
        this.selectedStart = this.parseDate(this.data.startDate);
      }
      if (this.data.endDate) {
        this.selectedEnd = this.parseDate(this.data.endDate);
      }
    }

    if (this.selectedStart) {
      this.currentMonth = new Date(this.selectedStart.getFullYear(), this.selectedStart.getMonth(), 1);
    } else {
      const now = new Date();
      this.currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    }

    this.syncInputStrings();
    this.updateGrid();
  }

  trackByDate(index: number, cell: CalendarCell): number {
    return cell.date.getTime();
  }

  private syncInputStrings(): void {
    this.startDateInput = this.formatDateStr(this.selectedStart);
    this.endDateInput = this.formatDateStr(this.selectedEnd);
  }

  private parseDate(val: any): Date | null {
    if (!val) return null;
    if (val instanceof Date) return isNaN(val.getTime()) ? null : new Date(val.getFullYear(), val.getMonth(), val.getDate());
    const d = new Date(val);
    return isNaN(d.getTime()) ? null : new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  get currentMonthTitle(): string {
    return this.currentMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }

  prevMonth(): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.updateGrid();
  }

  nextMonth(): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.updateGrid();
  }

  selectPreset(preset: string): void {
    this.activePreset = preset;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    switch (preset) {
      case 'today':
        this.selectedStart = today;
        this.selectedEnd = today;
        break;
      case 'yesterday': {
        const y = new Date(today);
        y.setDate(today.getDate() - 1);
        this.selectedStart = y;
        this.selectedEnd = y;
        break;
      }
      case 'this_week': {
        const dayOfWeek = today.getDay(); // 0 is Sun, 1 is Mon
        const diffToMon = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
        const mon = new Date(today);
        mon.setDate(today.getDate() + diffToMon);
        const sun = new Date(mon);
        sun.setDate(mon.getDate() + 6);
        this.selectedStart = mon;
        this.selectedEnd = sun;
        break;
      }
      case 'last_week': {
        const dayOfWeek = today.getDay();
        const diffToMon = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
        const thisMon = new Date(today);
        thisMon.setDate(today.getDate() + diffToMon);
        const lastMon = new Date(thisMon);
        lastMon.setDate(thisMon.getDate() - 7);
        const lastSun = new Date(lastMon);
        lastSun.setDate(lastMon.getDate() + 6);
        this.selectedStart = lastMon;
        this.selectedEnd = lastSun;
        break;
      }
      case 'this_month': {
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        this.selectedStart = firstDay;
        this.selectedEnd = lastDay;
        break;
      }
      case 'last_month': {
        const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);
        this.selectedStart = firstDay;
        this.selectedEnd = lastDay;
        break;
      }
      case 'this_year': {
        const firstDay = new Date(today.getFullYear(), 0, 1);
        const lastDay = new Date(today.getFullYear(), 11, 31);
        this.selectedStart = firstDay;
        this.selectedEnd = lastDay;
        break;
      }
      case 'last_year': {
        const firstDay = new Date(today.getFullYear() - 1, 0, 1);
        const lastDay = new Date(today.getFullYear() - 1, 11, 31);
        this.selectedStart = firstDay;
        this.selectedEnd = lastDay;
        break;
      }
    }

    if (this.selectedStart) {
      this.currentMonth = new Date(this.selectedStart.getFullYear(), this.selectedStart.getMonth(), 1);
    }
    this.syncInputStrings();
    this.updateGrid();
  }

  onDayClick(date: Date): void {
    if (!date) return;
    this.activePreset = 'custom';
    const clickDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (!this.selectedStart) {
      // 1. No start date set -> set start date
      this.selectedStart = clickDate;
      this.selectedEnd = null;
    } else if (!this.selectedEnd) {
      // 2. Start date set, no end date set
      if (clickDate.getTime() < this.selectedStart.getTime()) {
        // Clicked date is before start date -> update start date
        this.selectedStart = clickDate;
        this.selectedEnd = null;
      } else {
        // Clicked date is on or after start date -> set end date
        this.selectedEnd = clickDate;
      }
    } else {
      // 3. Both start and end dates are currently set
      if (clickDate.getTime() >= this.selectedStart.getTime()) {
        // Clicked date is on or after start date -> update/select end date!
        this.selectedEnd = clickDate;
      } else {
        // Clicked date is before start date -> set new start date and clear end date
        this.selectedStart = clickDate;
        this.selectedEnd = null;
      }
    }

    if (clickDate.getMonth() !== this.currentMonth.getMonth() || clickDate.getFullYear() !== this.currentMonth.getFullYear()) {
      this.currentMonth = new Date(clickDate.getFullYear(), clickDate.getMonth(), 1);
    }

    this.syncInputStrings();
    this.updateGrid();
  }

  onDayHover(date: Date | null): void {
    if (date) {
      this.hoverDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    } else {
      this.hoverDate = null;
    }

    if (this.selectedStart && !this.selectedEnd) {
      const startTime = this.selectedStart.getTime();
      const hoverTime = this.hoverDate ? this.hoverDate.getTime() : null;

      for (const cell of this.calendarGrid) {
        const time = cell.date.getTime();
        if (startTime !== null && hoverTime !== null) {
          const min = Math.min(startTime, hoverTime);
          const max = Math.max(startTime, hoverTime);
          cell.isPreview = time >= min && time <= max;
        } else {
          cell.isPreview = false;
        }
      }
    }
  }

  onStartDateInput(val: string): void {
    this.startDateInput = val;
    const parsed = this.parseInputDateStr(val);
    if (parsed) {
      this.selectedStart = parsed;
      this.activePreset = 'custom';
      this.currentMonth = new Date(parsed.getFullYear(), parsed.getMonth(), 1);
      this.updateGrid();
    }
  }

  onEndDateInput(val: string): void {
    this.endDateInput = val;
    const parsed = this.parseInputDateStr(val);
    if (parsed) {
      this.selectedEnd = parsed;
      this.activePreset = 'custom';
      this.updateGrid();
    }
  }

  onStartDateBlur(): void {
    const parsed = this.parseInputDateStr(this.startDateInput);
    if (parsed) {
      this.selectedStart = parsed;
      this.startDateInput = this.formatDateStr(parsed);
    } else if (!this.startDateInput.trim()) {
      this.selectedStart = null;
      this.startDateInput = '';
    } else {
      this.startDateInput = this.formatDateStr(this.selectedStart);
    }
    this.updateGrid();
  }

  onEndDateBlur(): void {
    const parsed = this.parseInputDateStr(this.endDateInput);
    if (parsed) {
      this.selectedEnd = parsed;
      this.endDateInput = this.formatDateStr(parsed);
    } else if (!this.endDateInput.trim()) {
      this.selectedEnd = null;
      this.endDateInput = '';
    } else {
      this.endDateInput = this.formatDateStr(this.selectedEnd);
    }
    this.updateGrid();
  }

  private parseInputDateStr(val: string): Date | null {
    if (!val) return null;
    const clean = val.trim();
    // DD/MM/YYYY or DD-MM-YYYY or DD.MM.YYYY
    const ddmmyyyy = clean.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})$/);
    if (ddmmyyyy) {
      const d = parseInt(ddmmyyyy[1], 10);
      const m = parseInt(ddmmyyyy[2], 10) - 1;
      const y = parseInt(ddmmyyyy[3], 10);
      const dateObj = new Date(y, m, d);
      if (dateObj.getFullYear() === y && dateObj.getMonth() === m && dateObj.getDate() === d) {
        return dateObj;
      }
    }
    // YYYY-MM-DD
    const yyyymmdd = clean.match(/^(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})$/);
    if (yyyymmdd) {
      const y = parseInt(yyyymmdd[1], 10);
      const m = parseInt(yyyymmdd[2], 10) - 1;
      const d = parseInt(yyyymmdd[3], 10);
      const dateObj = new Date(y, m, d);
      if (dateObj.getFullYear() === y && dateObj.getMonth() === m && dateObj.getDate() === d) {
        return dateObj;
      }
    }
    return null;
  }

  updateGrid(): void {
    const grid: CalendarCell[] = [];
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();

    const firstOfMonth = new Date(year, month, 1);
    const lastOfMonth = new Date(year, month + 1, 0);

    // Monday-based indexing (0 = Mon, ..., 6 = Sun)
    let firstDayIndex = firstOfMonth.getDay() - 1;
    if (firstDayIndex === -1) firstDayIndex = 6;

    // Previous month padding
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const pDate = new Date(year, month - 1, prevMonthLastDay - i);
      grid.push(this.createCell(pDate, false));
    }

    // Current month days
    for (let i = 1; i <= lastOfMonth.getDate(); i++) {
      const cDate = new Date(year, month, i);
      grid.push(this.createCell(cDate, true));
    }

    // Next month padding to complete 42 cells (6 rows)
    const remaining = 42 - grid.length;
    for (let i = 1; i <= remaining; i++) {
      const nDate = new Date(year, month + 1, i);
      grid.push(this.createCell(nDate, false));
    }

    this.calendarGrid = grid;
  }

  private createCell(date: Date, isCurrentMonth: boolean): CalendarCell {
    const time = date.getTime();
    const startTime = this.selectedStart ? this.selectedStart.getTime() : null;
    const endTime = this.selectedEnd ? this.selectedEnd.getTime() : null;
    const hoverTime = this.hoverDate ? this.hoverDate.getTime() : null;

    const isStart = startTime !== null && time === startTime;
    const isEnd = endTime !== null && time === endTime;

    let isInRange = false;
    if (startTime !== null && endTime !== null) {
      isInRange = time >= startTime && time <= endTime;
    }

    let isPreview = false;
    if (startTime !== null && endTime === null && hoverTime !== null) {
      const min = Math.min(startTime, hoverTime);
      const max = Math.max(startTime, hoverTime);
      isPreview = time >= min && time <= max;
    }

    return {
      date,
      dayNumber: date.getDate(),
      isCurrentMonth,
      isStart,
      isEnd,
      hasEnd: endTime !== null,
      isInRange,
      isPreview
    };
  }

  get formattedStartDate(): string {
    return this.formatDateStr(this.selectedStart);
  }

  get formattedEndDate(): string {
    return this.formatDateStr(this.selectedEnd);
  }

  get rangeDaysCount(): number {
    if (!this.selectedStart || !this.selectedEnd) return 0;
    const diff = Math.abs(this.selectedEnd.getTime() - this.selectedStart.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24)) + 1;
  }

  private formatDateStr(date: Date | null): string {
    if (!date) return '';
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onApply(): void {
    this.dialogRef.close({
      startDate: this.selectedStart,
      endDate: this.selectedEnd
    } as DateRangeDialogResult);
  }
}
