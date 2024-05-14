const tasks = [
  {
    start: new Date(2024, 1, 7),
    end: new Date(2024, 2, 8),
    department: "Transport",
    name: "Cycle to Work Scheme",
    type: "task",
    id: "Task 1",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#CF9FFF", progressSelectedColor: "#CF9FFF" },
  },
  {
    start: new Date(2024, 0, 1), // 1st January 2024 (one day)
    end: new Date(2024, 0, 1),
    department: "Housing",
    name: "New Year Tenant Survey",
    id: "Task 2",
    type: "milestone",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#6CC3E0", progressSelectedColor: "#6CC3E0" },
  },
  {
    start: new Date(2024, 2, 15),
    end: new Date(2024, 5, 15), // 3 months
    department: "Skills",
    name: "Apprenticeship Scheme Expansion",
    id: "Task 3",
    type: "task",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#F5CD47", progressSelectedColor: "#F5CD47" },
  },
  {
    start: new Date(2024, 4, 1), // 1st May 2024 (one day)
    end: new Date(2024, 4, 1),
    department: "Internal Comms",
    name: "Quarterly Staff Meeting",
    id: "Task 4",
    type: "milestone",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#FEA362", progressSelectedColor: "#FEA362" },
  },
  {
    start: new Date(2023, 11, 1), // 1st December 2023
    end: new Date(2024, 5, 31), // 6 months
    department: "Net Zero",
    name: "Public Energy Saving Campaign",
    id: "Task 5",
    type: "task",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#94C748", progressSelectedColor: "#94C748" },
  },
  {
    start: new Date(2024, 6, 1), // 1st June 2024 (one day)
    end: new Date(2024, 6, 1),
    department: "Business",
    name: "Business Grant Application Launch",
    id: "Task 6",
    type: "milestone",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#F87168", progressSelectedColor: "#F87168" },
  },
  {
    start: new Date(2024, 1, 15),
    end: new Date(2024, 7, 15), // 6 months
    department: "Transport",
    name: "Public Transport Improvement Initiative",
    id: "Task 7",
    type: "task",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#9F8FEF", progressSelectedColor: "#9F8FEF" },
  },
  {
    start: new Date(2024, 3, 1), // 1st March 2024 (one day)
    end: new Date(2024, 3, 1),
    department: "Housing",
    name: "Annual Tenant Satisfaction Survey",
    id: "Task 8",
    type: "milestone",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#6CC3E0", progressSelectedColor: "#6CC3E0" },
  },
  {
    start: new Date(2024, 5, 15), // 15th May 2024 (one day)
    end: new Date(2024, 5, 15),
    department: "Internal Comms",
    name: "Internal Newsletter Distribution",
    id: "Task 9",
    type: "milestone",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#FEA362", progressSelectedColor: "#FEA362" },
  },
  {
    start: new Date(2024, 2, 1),
    end: new Date(2024, 7, 31), // 6 months
    department: "Net Zero",
    name: "School Sustainability Initiative",
    id: "Task 10",
    type: "task",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#94C748", progressSelectedColor: "#94C748" },
  },
  {
    start: new Date(2024, 7, 15), // 15th July 2024 (one day)
    end: new Date(2024, 7, 15),
    department: "Business",
    name: "Business Awards Ceremony",
    id: "Task 11",
    type: "milestone",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#F87168", progressSelectedColor: "#F87168" },
  },
  {
    start: new Date(2024, 8, 1), // 1st September 2024
    end: new Date(2024, 11, 30), // 3 months
    department: "Transport",
    name: "Safe Cycling Awareness Campaign",
    id: "Task 12",
    type: "task",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#9F8FEF", progressSelectedColor: "#9F8FEF" },
  },
  {
    start: new Date(2024, 4, 15), // 15th April 2024 (one day)
    end: new Date(2024, 4, 15),
    department: "Housing",
    name: "Resident Feedback Forum",
    id: "Task 13",
    type: "milestone",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#6CC3E0", progressSelectedColor: "#6CC3E0" },
  },
  {
    start: new Date(2024, 6, 1), // 1st June 2024
    end: new Date(2025, 5, 31), // 1 year
    department: "Skills",
    name: "Developing Future Workforce Initiative",
    id: "Task 14",
    type: "task",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#F5CD47", progressSelectedColor: "#F5CD47" },
  },
  {
    start: new Date(2024, 9, 1), // 1st September 2024 (one day)
    end: new Date(2024, 9, 1),
    department: "Internal Comms",
    name: "Employee Onboarding Presentation",
    id: "Task 15",
    type: "milestone",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#FEA362", progressSelectedColor: "#FEA362" },
  },
  {
    start: new Date(2024, 0, 15), // 15th January 2024
    end: new Date(2024, 11, 30), // 1 year
    department: "Net Zero",
    name: "Green Business Grant Program",
    id: "Task 16",
    type: "task",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#94C748", progressSelectedColor: "#94C748" },
  },
  {
    start: new Date(2024, 8, 15), // 15th August 2024 (one day)
    end: new Date(2024, 8, 15),
    department: "Business",
    name: "New Investor Welcome Event",
    id: "Task 17",
    type: "milestone",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#F87168", progressSelectedColor: "#F87168" },
  },
  {
    start: new Date(2024, 10, 1), // 1st October 2024
    end: new Date(2025, 3, 31), // 6 months
    department: "Transport",
    name: "Public Transport Infrastructure Project",
    id: "Task 18",
    type: "task",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#9F8FEF", progressSelectedColor: "#9F8FEF" },
  },
  {
    start: new Date(2024, 2, 1), // 1st March 2024 (one day)
    end: new Date(2024, 2, 1),
    department: "Housing",
    name: "Move-In Day Information Pack Distribution",
    id: "Task 19",
    type: "milestone",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#6CC3E0", progressSelectedColor: "#6CC3E0" },
  },
  {
    start: new Date(2024, 11, 15), // 15th November 2024 (one day)
    end: new Date(2024, 11, 15),
    department: "Internal Comms",
    name: "Holiday Season Employee Appreciation Event",
    id: "Task 20",
    type: "milestone",
    isDisabled: true,
    progress: 100,
    styles: { progressColor: "#FEA362", progressSelectedColor: "#FEA362" },
  },
];
export default tasks;
