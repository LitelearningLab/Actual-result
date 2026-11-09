# Changelog
## [2.3.4] - 2026-11-09

### Enhancements & Bug Fixes
- **Vision AI Objective Evaluation (`backend/others/llm.py`)**:
  - Replaced Python regex matching with direct Vision AI evaluation for MCQs.
  - Added support for various handwritten answer formats (`1. d) Mass`, `(D) Mass`, `Q1: D`, etc.).
  - Added `selected_option_letter` and `manual_review_required` to AI response schema.
- **Backend Evaluation Flow (`backend/others/exams.py`)**:
  - Direct 1:1 option ID mapping using in-memory rubric lookup without random UUID sorting.
  - Removed Python override logic that previously overwrote student marks to 0.0.
  - Preserved evaluation results when opening the evaluation review screen.
- **Test Evaluation UI & Bulk Sync (`test-evaluation.component.ts`)**:
  - Synced in-memory exam cache (`allPublishedExams`) immediately upon `sheet_completed`.
  - Automatically reloaded database records via `loadPublishedExams` upon `job_completed`.
  - Auto-cleared uploaded files tray and row-level attached blue chips on completion.

---
## [2.3.3] - 2026-11-06

### Features & Enhancements
- **User Management & Registration**:
  - Enhanced admin user registration (`user-register.component.ts`) with form state handling and validation.
  - Updated admin view users component (`view-users.component.ts`) for improved user administration.

---
## [2.3.2] - 2026-11-06

### Features & Enhancements
- **Paper Schedules Management**:
  - Enhanced backend schedule handling and query endpoints in `paper_schedules.py`.
- **Question Paper Creation**:
  - Updated question paper creation UI (`create-question-paper.component`) with reactive validation and schedule integrations.
  - Refined paper listing and schedule filters in `question-paper.component.ts`.

---
## [2.3.1] - 2026-11-06

### Features / Fixes
- **Feature Name**: Brief description of changes.
- **Bug Fixes**: Summary of resolved issues.

---

## [2.3.0] - 2026-11-05

### Features & Major Enhancements
- **Paper Scheduling Management**:
  - Implemented dedicated paper scheduling module in `paper_schedules.py` with full CRUD operations (`/get-paper-schedules`, `/get-paper-schedule-by-id`, `/save-paper-schedule`, `/delete-paper-schedule`).
  - Added `PaperSchedule` database model and route integration in backend API gateway.
- **Draft Question Paper Workflow**:
  - Added `is_draft` database migration (`20261105_add_is_draft_to_exams.sql`) and model attribute in `Exam`.
  - Added backend draft query filtering in `get_exam_details`.
  - Added "Save as Draft" functionality, status indicators, and draft lifecycle management in question paper creation UI.
- **Question Paper UI & Table Enhancements**:
  - Split question paper management component into modular creation flow (`create-question-paper.component`).
  - Dynamically hide "SECTIONS" and "MARKS" columns from the Published Papers view.
  - Unified loading of base question papers and published schedules using reactive `forkJoin` with chronological sorting.
- **Exam Processing & Evaluation Enhancements**:
  - Multi-ID question mapping lookup across root and scheduled exam IDs (`target_exam_ids`).
  - Math step LaTeX formatting and AI evaluation response parsing refinements.
- **Version Tracking**: Updated project version to 2.3.0 across application configuration, lockfiles, and UI environment.

---

## [2.2.1] - 2026-11-04

### Patch Fixes & Enhancements
- **Question Paper Management**: Added question paper creation, publishing, and evaluation workflows for administrators.
- **Table Navigation & Scrolling**: Fixed header sticking when scrolling in Question Bank module; fixed table pagination issues and preserved visible headers and paginators.
- **Answer Sheet Upload Validation**: Disabled the "Remove Sheet" action when no answer sheet has been uploaded, enabling it only upon active file upload.
- **Evaluation & AI Integration**: Added OpenAI API client integration and descriptive evaluation logic; added test evaluation UI components.
- **Version Tracking**: Updated application version to 2.2.1 in environment configurations and UI components.

---

## [2.2.0] - 2026-11-03

### Features & Updates
- **Admin Results Dashboard**: Added admin results component with dashboard metrics, analysis charts, and feature cards.
- **Question Paper Engine**: Enhanced question paper creation and management components for admin role.
- **Version Bump**: Bumped application release version to 2.2.0.

---

## [2.1.4] - 2026-10-20

### Patch Fixes
- **Handwritten & Test Evaluation Engine**: Enhanced evaluation cards UI with handwritten image previews, OCR text handling, and AI misconception breakdown.
- **Scoring & Dash vs Zero Logic**: Corrected evaluation mark resolution so unattempted questions display dashes (`-`) while attempted evaluated questions properly award numerical scores (`0` or awarded marks).
- **Exam Runner State & UI**: Improved candidate exam runner reliability, response persistence, and option display during active sessions.
- **Permission Guards & User Management**: Refined role-based route guards (`PermissionGuard`, `PageAccessService`) and fixed user registration and user view navigation state.

---


## [2.1.3] - 2026-10-16

---

## [2.0.3] - 2026-10-09

### Patch Fixes
- **Handwritten Descriptive Vision Evaluation**: Enhanced vision OCR pipeline, multimodal evaluation flow, and response handling for handwritten submissions.

---

## [2.0.2] - 2026-10-07

### Patch Fixes
- **Question & Department Form Validation & Scoping**: Enhanced institute context handling, department validation, and question editor stability.

---

## [2.0.1] - 2026-10-06

### Patch Fixes
- **Users Scope & State Restoration**: Fixed state caching issue in View Users component ensuring records strictly reflect active global institute scope.

---

## [2.0.0] - 2026-10-06

### Major Release Highlights
- **Production Architecture**: Complete stabilization of Examination Engine, Automated & Handwritten Evaluation workflows, and Role-Based Access Control (Super Admin, Admin, Candidate).
- **Exam Engine & Analytics**: Real-time test conduction, question shuffling, session locking, and automated score computation.
- **UI & UX Overhaul**: Responsive exam interfaces, live timers, side navigation versioning, and unified admin dashboards.

---

## [1.2.5] - 2026-08-20
- Application version tracking added
- Sidebar & Login UI displays application version
