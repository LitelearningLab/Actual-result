# Dynamic Institute Terminology Implementation Plan (Frozen)

## Goal Description
Implement dynamic UI terminology across the frontend based on the institute's industry type:
- **School**: Department → **Class**, Team → **Section**
- **College**: Department → **Department**, Team → **Year**
- **Other** (BPO, Bank, IT, etc.) / Default: Department → **Department**, Team → **Team**

Terminology is resolved dynamically per screen:
1. When an institute selector is present and active, use the selected institute's institute type.
2. Otherwise, use the logged-in Admin or User's assigned institute's institute type.
3. If missing or indeterminate, safely default to standard Department / Team terminology.
4. Preserves Super Admin screens completely untouched and keeps Super Admin profile labels default.
5. Preserves all internal code identifiers, form control names, TypeScript properties (`departments`, `teams`), query parameters, and API payload fields (`department_id`, `team_id`).

---

## User Review Required

> [!IMPORTANT]
> - **Display Mappings Over Existing Data**: The terminology change must not alter the meaning, IDs, option sources, or relationships of the existing department/team data. For School, the existing department data is displayed as Class and existing team data as Section. For College, existing department data remains Department and existing team data is displayed as Year.
> - **Existing Metadata Only**: Use the existing institute metadata returned by `/get-institute-list` and identify the existing field that represents the institute type (`industry_type` or its current equivalent). Do not introduce a new backend field or database change.
> - **Pure Mapping Architecture**: The shared terminology service remains a pure mapping utility without holding Angular state or caching API calls. Screens/components extract the institute type from their existing institute data/selectors and pass it to the mapping utility.
> - **Generic Validation Messages**: Error strings are reusable across all pages (users, questions, exams, etc.) and do not hardcode "for students" (e.g. "Class is required", "Section is required").
> - **Super Admin Exclusion**: Nothing under `src/app/userrole/super-admin` will be modified. Existing Super Admin behavior and institute-management logic remain intact.

---

## Architecture Flow

```text
                    Institute
                       │
                       ▼
       Existing metadata (industry_type)
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
           School    College    Other
             │         │         │
             ▼         ▼         ▼
       Class/Section Department/Year Department/Team
             │         │         │
             └─────────┼─────────┘
                       ▼
             Existing internal values
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
   department_id               team_id
```

**Key Rule**: *UI terminology changes; data architecture does not.*

---

## Proposed Changes

Grouped by component:

### 1. Shared Terminology Service
Create a pure mapping service without state or API dependencies:
#### [NEW] [institute-terminology.service.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/shared/services/institute-terminology.service.ts)

**Interface**:
```typescript
export interface InstituteTerminology {
  industryType: string;
  isSchool: boolean;
  isCollege: boolean;

  // Singular & Plural
  deptLabel: string;        // 'Class' | 'Department'
  deptPlural: string;       // 'Classes' | 'Departments'
  teamLabel: string;        // 'Section' | 'Year' | 'Team'
  teamPlural: string;       // 'Sections' | 'Years' | 'Teams'

  // Placeholders
  selectDeptPlaceholder: string;        // 'Select class' | 'Select department'
  selectDeptPluralPlaceholder: string;  // 'Select classes' | 'Select departments'
  selectTeamPlaceholder: string;        // 'Select section' | 'Select year' | 'Select team'
  selectTeamPluralPlaceholder: string;  // 'Select sections' | 'Select years' | 'Select teams'
  searchDeptPlaceholder: string;        // 'Search class' | 'Search department'
  searchTeamPlaceholder: string;        // 'Search section' | 'Search year' | 'Search team'

  // Loading & Empty States
  loadingDepts: string;                 // 'Loading classes...' | 'Loading departments...'
  loadingTeams: string;                 // 'Loading sections...' | 'Loading years...' | 'Loading teams...'
  noDeptsFound: string;                 // 'No classes found' | 'No departments found'
  noTeamsFound: string;                 // 'No sections found' | 'No years found' | 'No teams found'
  noTeamsForDept: string;               // 'No sections found for selected class' | ...

  // Generic Validation & Prompts (No "for students")
  deptRequired: string;                 // 'Class is required' | 'Department is required'
  teamRequired: string;                 // 'Section is required' | 'Year is required' | 'Team is required'
  selectDeptFirst: string;              // 'Select class first' | 'Select department first'

  // Filter chips & All labels
  allDepts: string;                     // 'All Classes' | 'All Departments'
  allTeams: string;                     // 'All Sections' | 'All Years' | 'All Teams'
  filterDeptPrefix: string;             // 'Class' | 'Department'
  filterTeamPrefix: string;             // 'Section' | 'Year' | 'Team'

  // Headings & descriptions
  setDeptAndTeamsHeading: string;       // 'Set Classes and Sections' | 'Set Dept and Years' | 'Set Dept and Teams'
  deptAndTeamsDesc: string;             // 'Select classes and sections for this question bank.' | ...
}

export function getInstituteTerminology(industryType?: string | null): InstituteTerminology;
```

---

### 2. Admin User Management

#### [MODIFY] [user-register.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/user/user-register/user-register.component.ts)
- In `loadInstitutes()`, preserve existing metadata (`industry_type`, `industry_sector`):
  `{ id: i.institute_id, name: i.name, industry_type: i.industry_type || i.industry || '' }`.
- Add a getter `get terminology(): InstituteTerminology` that resolves the terminology by passing the selected institute's `industry_type` to `getInstituteTerminology()`.
- When the institute changes in the form:
  Reset department and team selections, reset search terms (`departmentSearch`, `teamSearch`), and ensure `team` control stays disabled until `department` is chosen.

#### [MODIFY] [user-register.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/user/user-register/user-register.component.html)
- Replace static `<mat-label>Department / Class</mat-label>` with dynamic `{{ terminology.deptLabel }}`.
- Replace static `<mat-label>Team / Group / Section</mat-label>` with dynamic `{{ terminology.teamLabel }}`.
- Bind placeholders: `[placeholder]="terminology.searchDeptPlaceholder"`, `[placeholder]="terminology.searchTeamPlaceholder"`, `Select {{ terminology.deptLabel.toLowerCase() }}`, `Select {{ terminology.teamLabel.toLowerCase() }}`.
- Bind generic error messages: `{{ terminology.deptRequired }}`, `{{ terminology.teamRequired }}`.
- Bind empty & loading states: `No {{ terminology.deptPlural.toLowerCase() }}`, `No {{ terminology.teamPlural.toLowerCase() }} found for selected {{ terminology.deptLabel.toLowerCase() }}`, `Loading {{ terminology.deptPlural.toLowerCase() }}…`.
- Step 4 (Review screen): `<span class="review-label">{{ terminology.deptLabel }}</span>` and `<span class="review-label">{{ terminology.teamLabel }}</span>`.
- Bulk Upload: Update visible instructions text (`Must match the exact {{ terminology.deptLabel }} name...`) and table header cells (`<th>{{ terminology.deptLabel }}</th>`, `<th>{{ terminology.teamLabel }}</th>`).

#### [MODIFY] [view-users.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/user/view-users/view-users.component.ts)
- Replace hardcoded `isSchool` boolean with dynamic `get terminology(): InstituteTerminology`.
- In `appliedFilterChips`:
  Update `Department Chip` label to `${this.terminology.deptPlural}: ${labels.join(', ')}`.
  Update `Team Chip` label to `${this.terminology.teamPlural}: ${labels.join(', ')}`.

#### [MODIFY] [view-users.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/user/view-users/view-users.component.html)
- Replace hardcoded `isSchool ? 'Classes' : 'Departments'` and `isSchool ? 'Sections' : 'Teams'` with `terminology.deptPlural`, `terminology.teamPlural`, `terminology.selectDeptPluralPlaceholder`, `terminology.searchDeptPlaceholder`, etc.
- Update table column headers: `<th mat-header-cell *matHeaderCellDef mat-sort-header>{{ terminology.deptLabel }}</th>` and `{{ terminology.teamLabel }}`.
- Update user detail side panel: `<div class="label"><mat-icon>school</mat-icon> {{ terminology.deptLabel }}</div>` and `<div class="label"><mat-icon>groups</mat-icon> {{ terminology.teamLabel }}</div>`.

---

### 3. Admin Category (Question Banks)

#### [MODIFY] [category-create.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/category/create/category-create.component.ts)
- Retain existing `industry_type` metadata when loading institutes.
- Add `get terminology(): InstituteTerminology` computed from the selected institute.

#### [MODIFY] [category-create.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/category/create/category-create.component.html)
- Section heading: `<h2 class="section-heading">{{ terminology.setDeptAndTeamsHeading }}</h2>`.
- Section description: `<p class="section-desc">{{ terminology.deptAndTeamsDesc }}</p>`.
- Dynamic labels, placeholders, and review labels for department/class and team/section/year.

#### [MODIFY] [category.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/category/category.component.ts)
- Add `get terminology()` computed from the active institute.
- Update applied filter chips: `${this.terminology.deptLabel}: ...` and `${this.terminology.teamLabel}: ...`.

#### [MODIFY] [category.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/category/category.component.html)
- Update filter dropdown labels, search inputs, placeholders, and loading hints using `terminology`.

---

### 4. Admin Exams Management

#### [MODIFY] [create-exam.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/exams/create-exam.component.ts) & [create-exam.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/exams/create-exam.component.html)
- Add dynamic `terminology` getter.
- Update Step 1 target selection labels (`{{ terminology.deptPlural }}`, `{{ terminology.teamPlural }}`).
- Update Step 2 Question Bank filter labels (`{{ terminology.deptLabel }}`, `{{ terminology.teamLabel }}`).
- Update Step 5 review screen labels.

#### [MODIFY] [exams.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/exams/exams.component.ts) & [exams.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/exams/exams.component.html)
- Add dynamic `terminology` getter.
- Update filter dropdowns, placeholders, and applied chips.

---

### 5. Admin Questions Management

#### [MODIFY] [questions.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/questions/questions.component.ts) & [questions.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/questions/questions.component.html)
- Add dynamic `terminology` getter.
- Update filter labels, placeholders, and loading hints.

#### [MODIFY] [view-questions.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/questions/view-questions/view-questions.component.ts) & [view-questions.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/questions/view-questions/view-questions.component.html)
- Add dynamic `terminology` getter.
- Update filter labels, search inputs, and chips.

---

### 6. Admin Schedule Test & View Schedule

#### [MODIFY] [schedule-test.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/schedule-test/schedule-test.component.ts) & [schedule-test.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/schedule-test/schedule-test.component.html)
- Add dynamic `terminology` getter.
- Update user filter labels and placeholders.

#### [MODIFY] [view-schedule-exam.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/schedule-test/view-schedule-exam.component.ts) & [view-schedule-exam.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/schedule-test/view-schedule-exam.component.html)
- Update filter labels and placeholders.

---

### 7. Admin Exam Reports

#### [MODIFY] [exam-reports.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/exam-reports/exam-reports.component.ts) & [exam-reports.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/userrole/admin/exam-reports/exam-reports.component.html)
- Add dynamic `terminology` getter.
- Update filter dropdown labels, chips (`<strong>{{ terminology.deptLabel }}:</strong>`), search placeholders, and student metadata badge titles.

---

### 8. Shared Profile Panel (Navbar)

#### [MODIFY] [navbar-main.component.ts](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/shared/components/navbar-main/navbar-main.component.ts) & [navbar-main.component.html](file:///d:/Actula_result_production/Actual-result/frontend/edu-UI/src/app/shared/components/navbar-main/navbar-main.component.html)
- In `navbar-main.component.ts`:
  - If current user is `super_admin`: profile labels remain static `Department` and `Team`.
  - For Admin / User: resolve `industry_type` from user's institute (or cached institute info) and supply `deptLabel` and `teamLabel`.
- In `navbar-main.component.html`:
  - Replace `<span class="profile-row-label">Department</span>` with `{{ departmentLabel }}`.
  - Replace `<span class="profile-row-label">Team</span>` with `{{ teamLabel }}`.

---

### 9. Super Admin Preservation
- **Zero changes** to files in `src/app/userrole/super-admin`.
- Super Admin screens keep their existing behavior completely intact.

---

## Verification Plan

### Automated Compilation & Build
- Verify active Angular dev server / `npx ng build --configuration=development` completes with zero TypeScript compilation errors or template syntax issues.

### Browser / Functional Verification
1. **School Institute Selection**:
   - In User Register: Select a School institute.
   - Verify Department field displays "Class" and Team field displays "Section".
   - Verify changing institutes clears Class and Section and resets the options.
   - Verify Review step shows "Class" and "Section".
2. **College Institute Selection**:
   - In User Register: Select a College institute.
   - Verify Department field displays "Department" and Team field displays "Year".
   - Verify Review step shows "Department" and "Year".
3. **Other / Corporate Institute**:
   - Verify Department field displays "Department" and Team field displays "Team".
4. **View Users Screen**:
   - Filter by School: verify filters, table columns, applied chips, and user detail side panel display Class / Section.
   - Filter by College: verify Department / Year.
   - Filter by Other: verify Department / Team.
5. **Super Admin Check**:
   - Log in as Super Admin: verify Super Admin screens remain unchanged and profile panel keeps standard Department / Team.
6. **Network / Payload Inspection**:
   - Verify all API calls continue to send `department_id`, `team_id`, or `departments`, `teams` without alteration.
