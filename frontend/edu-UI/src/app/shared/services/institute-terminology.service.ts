import { Injectable } from '@angular/core';

export interface InstituteTerminology {
  industryType: string;
  isSchool: boolean;
  isCollege: boolean;

  // Singular & Plural
  deptLabel: string;
  deptPlural: string;
  deptPluralLabel: string;
  teamLabel: string;
  teamPlural: string;
  teamPluralLabel: string;

  // Placeholders
  selectDeptPlaceholder: string;
  selectDeptPluralPlaceholder: string;
  selectTeamPlaceholder: string;
  selectTeamPluralPlaceholder: string;
  searchDeptPlaceholder: string;
  searchTeamPlaceholder: string;

  // Loading & Empty States
  loadingDepts: string;
  loadingTeams: string;
  noDeptsFound: string;
  noTeamsFound: string;
  noTeamsForDept: string;

  // Generic Validation & Prompts (No "for students")
  deptRequired: string;
  teamRequired: string;
  selectDeptFirst: string;

  // Filter chips & All labels
  allDepts: string;
  allTeams: string;
  filterDeptPrefix: string;
  filterTeamPrefix: string;

  // Headings & descriptions
  setDeptAndTeamsHeading: string;
  deptAndTeamsDesc: string;
}

export function getInstituteTerminology(industryType?: string | null): InstituteTerminology {
  const norm = (industryType || '').trim().toLowerCase();

  if (norm === 'school' || norm.includes('school')) {
    return {
      industryType: 'School',
      isSchool: true,
      isCollege: false,
      deptLabel: 'Class',
      deptPlural: 'Classes',
      deptPluralLabel: 'Classes',
      teamLabel: 'Section',
      teamPlural: 'Sections',
      teamPluralLabel: 'Sections',
      selectDeptPlaceholder: 'Select class',
      selectDeptPluralPlaceholder: 'Select classes',
      selectTeamPlaceholder: 'Select section',
      selectTeamPluralPlaceholder: 'Select sections',
      searchDeptPlaceholder: 'Search class',
      searchTeamPlaceholder: 'Search section',
      loadingDepts: 'Loading classes...',
      loadingTeams: 'Loading sections...',
      noDeptsFound: 'No classes found',
      noTeamsFound: 'No sections found',
      noTeamsForDept: 'No sections found for selected class',
      deptRequired: 'Class is required',
      teamRequired: 'Section is required',
      selectDeptFirst: 'Select class first',
      allDepts: 'All Classes',
      allTeams: 'All Sections',
      filterDeptPrefix: 'Class',
      filterTeamPrefix: 'Section',
      setDeptAndTeamsHeading: 'Set Classes and Sections',
      deptAndTeamsDesc: 'Select classes and sections for this question bank.'
    };
  }

  if (norm === 'college' || norm.includes('college')) {
    return {
      industryType: 'College',
      isSchool: false,
      isCollege: true,
      deptLabel: 'Department',
      deptPlural: 'Departments',
      deptPluralLabel: 'Departments',
      teamLabel: 'Year',
      teamPlural: 'Years',
      teamPluralLabel: 'Years',
      selectDeptPlaceholder: 'Select department',
      selectDeptPluralPlaceholder: 'Select departments',
      selectTeamPlaceholder: 'Select year',
      selectTeamPluralPlaceholder: 'Select years',
      searchDeptPlaceholder: 'Search department',
      searchTeamPlaceholder: 'Search year',
      loadingDepts: 'Loading departments...',
      loadingTeams: 'Loading years...',
      noDeptsFound: 'No departments found',
      noTeamsFound: 'No years found',
      noTeamsForDept: 'No years found for selected department',
      deptRequired: 'Department is required',
      teamRequired: 'Year is required',
      selectDeptFirst: 'Select department first',
      allDepts: 'All Departments',
      allTeams: 'All Years',
      filterDeptPrefix: 'Department',
      filterTeamPrefix: 'Year',
      setDeptAndTeamsHeading: 'Set Departments and Years',
      deptAndTeamsDesc: 'Select departments and years for this question bank.'
    };
  }

  return {
    industryType: industryType || 'Other',
    isSchool: false,
    isCollege: false,
    deptLabel: 'Department',
    deptPlural: 'Departments',
    deptPluralLabel: 'Departments',
    teamLabel: 'Team',
    teamPlural: 'Teams',
    teamPluralLabel: 'Teams',
    selectDeptPlaceholder: 'Select department',
    selectDeptPluralPlaceholder: 'Select departments',
    selectTeamPlaceholder: 'Select team',
    selectTeamPluralPlaceholder: 'Select teams',
    searchDeptPlaceholder: 'Search department',
    searchTeamPlaceholder: 'Search team',
    loadingDepts: 'Loading departments...',
    loadingTeams: 'Loading teams...',
    noDeptsFound: 'No departments found',
    noTeamsFound: 'No teams found',
    noTeamsForDept: 'No teams found for selected department',
    deptRequired: 'Department is required',
    teamRequired: 'Team is required',
    selectDeptFirst: 'Select department first',
    allDepts: 'All Departments',
    allTeams: 'All Teams',
    filterDeptPrefix: 'Department',
    filterTeamPrefix: 'Team',
    setDeptAndTeamsHeading: 'Set Dept and Teams',
    deptAndTeamsDesc: 'Select departments and teams for this question bank.'
  };
}

@Injectable({ providedIn: 'root' })
export class InstituteTerminologyService {
  getTerminology(industryType?: string | null): InstituteTerminology {
    return getInstituteTerminology(industryType);
  }
}
