const departmentColors = {
  Transport: "#9F8FEF",
  Housing: "#6CC3E0",
  Skills: "#F5CD47",
  NetZero: "#94C748",
  Internal: "#FEA362",
  Business: "#F87168",
};

const tasks = [
  {
    start: new Date(2024, 4, 15), // Earliest start date for Cycle to Work Scheme tasks
    end: new Date(2024, 11, 1), // Latest end date for Cycle to Work Scheme tasks
    department: "Transport",
    name: "Cycle to Work Scheme",
    type: "project",
    id: "Cycle to Work Scheme", // Changed to "Campaign 1"
    blurb:"It was the best of times, it was the worst of times. One Ring to rule them all." +
        " Party in the USA, Moves like Jagger. I'll write your name. There and back again." +
        " One does not simply walk into Mordor.",
    taskid: 1,
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 1,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
    },
  },
  {
    start: new Date(2024, 2, 1), // Earliest start date for Improve Tenant Satisfaction tasks
    end: new Date(2024, 11, 26), // Latest end date for Improve Tenant Satisfaction tasks
    department: "Housing",
    name: "Improve Tenant Satisfaction",
    type: "project",
    id: "Improve Tenant Satisfaction", // Changed to "Campaign 2"
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 2,
    styles: {
      progressColor: departmentColors.Housing, // Reference departmentColors object
      progressSelectedColor: departmentColors.Housing,
      backgroundColor: departmentColors.Housing,
    },
  },
  {
    start: new Date(2024, 3, 1), // Earliest start date for Promote Skills Development Programs tasks
    end: new Date(2024, 7, 16), // Latest end date for Promote Skills Development Programs tasks
    department: "Skills",
    name: "Promote Skills Development Programs",
    type: "project",
    id: "Promote Skills Development Programs", // Changed to "Campaign 3"
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 3,
    styles: {
      progressColor: departmentColors.Skills, // Reference departmentColors object
      progressSelectedColor: departmentColors.Skills,
      backgroundColor: departmentColors.Skills,
    },
  },
  {
    start: new Date(2024, 2, 15), // Earliest start date for Financial Planning tasks
    end: new Date(2024, 7, 25), // Latest end date for Financial Planning tasks
    department: "Business",
    name: "Financial Planning",
    type: "project",
    id: "Financial Planning", // Changed to "Campaign 4"
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 4,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
    },
  },
  {
    start: new Date(2024, 1, 20), // Earliest start date for Marketing and Communications tasks
    end: new Date(2024, 9, 11), // Latest end date for Marketing and Communications tasks
    department: "Business",
    name: "Marketing and Communications",
    type: "project",
    id: "Marketing and Communications", // Changed to "Campaign 5"
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 5,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
    },
  },
  {
    start: new Date(2024, 6, 10), // Earliest start date for Business Development tasks (assuming related to Promote Sustainability)
    end: new Date(2024, 6, 31), // Latest end date for Business Development tasks (assuming related to Promote Sustainability)
    department: "NetZero",
    name: "Promote Sustainability",
    type: "project",
    id: "Promote Sustainability", // Changed to "Campaign 6"
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 6,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
    },
  },
  {
    start: new Date(2024, 4, 25), // 25th April
    end: new Date(2024, 8, 26), // 26th April
    department: "NetZero",
    name: "Raise Environmental Awareness",
    type: "project",
    id: "Raise Environmental Awareness", // New campaign
    hideChildren: false,
    isDisabled: false,
    progress: 100, // Assuming progress tracking not yet available
    displayOrder: 7,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
    },
  },
  {
    start: new Date(2024, 6, 20), // 20th June
    end: new Date(2024, 9, 21), // 21st June
    department: "NetZero",
    name: "NetZero Strategy",
    type: "project",
    id: "NetZero Strategy", // New campaign
    hideChildren: false,
    isDisabled: false,
    progress: 100, // Assuming progress tracking not yet available
    displayOrder: 8,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
    },
  },

  // Transport Campaigns
  {
    start: new Date(2024, 4, 15),
    end: new Date(2024, 4, 17),
    department: "Transport",
    name: "📅",
    type: "task", // Changed type to "task"
    id: "WMCA Cycle Safety Workshop",
    project: "Cycle to Work Scheme",
    displayOrder: 1,
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
    },
  },
  {
    start: new Date(2024, 6, 15), // 15th June
    end: new Date(2024, 6, 17), // 16th June
    department: "Transport",
    name: "📅",
    type: "task",
    id: "WMCA Free Bike Maintenance Workshop",
    project: "Cycle to Work Scheme",
    isDisabled: false,
    progress: 100,
    displayOrder: 1,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
    },
  },
  {
    start: new Date(2024, 8, 1), // 1st August
    end: new Date(2024, 8, 3), // 2nd August
    department: "Transport",
    name: "📱",
    type: "task",
    id: "Promote Cycle to Work Scheme on Social Media",
    project: "Cycle to Work Scheme",
    isDisabled: false,
    progress: 100,
    displayOrder: 1,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
    },
  },
  {
    start: new Date(2024, 10, 31), // 31st October (Halloween!)
    end: new Date(2024, 11, 2), // 1st November
    department: "Transport",
    nname: "📅",
    type: "task",
    id: "WMCA Spooky Cycle Night Event",
    project: "Cycle to Work Scheme",
    isDisabled: false,
    progress: 100,
    displayOrder: 1,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
    },
  },

  // Housing Campaigns
  {
    start: new Date(2024, 2, 1),
    end: new Date(2024, 2, 3),
    department: "Housing",
    name: "📧",
    type: "task", // Changed type to "task"
    id: "Annual Tenant Satisfaction Survey Reminder",
    project: "Improve Tenant Satisfaction",
    isDisabled: false,
    progress: 100,
    displayOrder: 2,
    styles: {
      progressColor: departmentColors.Housing, // Reference departmentColors object
      progressSelectedColor: departmentColors.Housing,
      backgroundColor: departmentColors.Housing,
    },
  },
  {
    start: new Date(2024, 4, 12), // 12th May
    end: new Date(2024, 4, 14), // 13th May
    department: "Housing",
    name: "📅",
    type: "task",
    id: "Quarterly Tenant Satisfaction Forum",
    project: "Improve Tenant Satisfaction",
    isDisabled: false,
    progress: 100,
    displayOrder: 2,
    styles: {
      progressColor: departmentColors.Housing, // Reference departmentColors object
      progressSelectedColor: departmentColors.Housing,
      backgroundColor: departmentColors.Housing,
    },
  },
  {
    start: new Date(2024, 11, 25), // 25th November
    end: new Date(2024, 11, 27), // 26th November
    department: "Housing",
    name: "📧",
    type: "task",
    id: "WMCA Tenant Satisfaction Survey Invitation",
    project: "Improve Tenant Satisfaction",
    isDisabled: false,
    progress: 100,
    displayOrder: 2,
    styles: {
      progressColor: departmentColors.Housing, // Reference departmentColors object
      progressSelectedColor: departmentColors.Housing,
      backgroundColor: departmentColors.Housing,
    },
  },

  // Skills Campaigns

  {
    start: new Date(2024, 7, 15),
    end: new Date(2024, 7, 17),
    department: "Skills",
    name: "📱",
    type: "task", // Changed type to "task"
    id: "WMCA Skills Development Campaign: Social Media Blitz",
    project: "Promote Skills Development Programs",
    isDisabled: false,
    progress: 100,
    displayOrder: 3,
    styles: {
      progressColor: departmentColors.Skills, // Reference departmentColors object
      progressSelectedColor: departmentColors.Skills,
      backgroundColor: departmentColors.Skills,
    },
  },
  {
    start: new Date(2024, 3, 1),
    end: new Date(2024, 3, 3),
    department: "Skills",
    name: "📄",
    type: "task", // Changed type to "task"
    id: " Magazine Media Blitz",
    project: "Promote Skills Development Programs",
    isDisabled: false,
    progress: 100,
    displayOrder: 3,
    styles: {
      progressColor: departmentColors.Skills, // Reference departmentColors object
      progressSelectedColor: departmentColors.Skills,
      backgroundColor: departmentColors.Skills,
    },
  },
  {
    start: new Date(2024, 2, 15), // 15th March
    end: new Date(2024, 2, 17), // 16th March
    department: "Business",
    name: "🎥",
    type: "task",
    id: "WMCA Announces Budget Update",
    project: "Financial Planning",
    isDisabled: false,
    progress: 100,
    displayOrder: 4,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
    },
  },
  {
    start: new Date(2024, 7, 24), // 24th July
    end: new Date(2024, 7, 26), // 25th July
    department: "Business",
    name: "📅",
    type: "task",
    id: "WMCA Quarterly Financial Review Meeting",
    project: "Financial Planning",
    isDisabled: false,
    progress: 100,
    displayOrder: 4,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
    },
  },
  {
    start: new Date(2024, 1, 20), // 20th February
    end: new Date(2024, 1, 22), // 21st February
    department: "Business",
    name: "📱",
    type: "task",
    id: "Promote WMCA Business Event on Social Media",
    project: "Marketing and Communications",
    isDisabled: false,
    progress: 100,
    displayOrder: 5,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
    },
  },
  {
    start: new Date(2024, 9, 10), // 10th October
    end: new Date(2024, 9, 12), // 11th October
    department: "Business",
    name: "📧",
    type: "task",
    id: "WMCA Business Newsletter - October Edition",
    project: "Marketing and Communications",
    isDisabled: false,
    progress: 100,
    displayOrder: 5,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
    },
  },

  {
    start: new Date(2024, 6, 10), // 29th February (leap year!)
    end: new Date(2024, 6, 12), // 1st March
    department: "NetZero",
    name: "📅",
    type: "task",
    id: "WMCA Sustainable Living Workshop",
    project: "Promote Sustainability",
    isDisabled: false,
    progress: 100,
    displayOrder: 6,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
    },
  },
  {
    start: new Date(2024, 6, 29), // 29th February (leap year!)
    end: new Date(2024, 7, 1), // 1st March
    department: "NetZero",
    name: "📱",
    type: "task",
    id: "Green Choices",
    project: "Promote Sustainability",
    isDisabled: false,
    progress: 100,
    displayOrder: 6,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
    },
  },
  {
    start: new Date(2024, 4, 25), // 25th April
    end: new Date(2024, 4, 27), // 26th April
    department: "NetZero",
    name: "📱",
    type: "task",
    id: "WMCA Celebrates Earth Day 1",
    project: "Raise Environmental Awareness",
    isDisabled: false,
    progress: 100,
    displayOrder: 7,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
    },
  },
  {
    start: new Date(2024, 8, 25), // 25th April
    end: new Date(2024, 8, 27), // 26th April
    department: "NetZero",
    name: "📅",
    type: "task",
    id: "WMCA Celebrates Earth Day",
    project: "Raise Environmental Awareness",
    isDisabled: false,
    progress: 100,
    displayOrder: 7,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
    },
  },
  {
    start: new Date(2024, 6, 20), // 20th June
    end: new Date(2024, 6, 22), // 21st June
    department: "NetZero",
    name: "🎥",
    type: "task",
    id: "WMCA Announces Progress on NetZero Initiatives",
    project: "NetZero Strategy",
    isDisabled: false,
    progress: 100,
    displayOrder: 8,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
    },
  },
  {
    start: new Date(2024, 8, 24), // 24th October
    end: new Date(2024, 8, 26), // 25th October
    department: "NetZero",
    name: "📅",
    type: "task",
    id: "WMCA NetZero Committee Meeting 1",
    project: "NetZero Strategy",
    isDisabled: false,
    progress: 100,
    displayOrder: 8,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
    },
  },
  {
    start: new Date(2024, 9, 20), // 24th October
    end: new Date(2024, 9, 22), // 25th October
    department: "NetZero",
    name: "📅",
    type: "task",
    id: "WMCA NetZero Committee Meeting",
    project: "NetZero Strategy",
    isDisabled: false,
    progress: 100,
    displayOrder: 8,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
    },
  },
  {
    start: new Date(2024, 5, 1), // 1st June
    end: new Date(2024, 5, 2), // Milestone doesn't have a duration
    department: "Transport",
    name: "🎥", // Using the exact option provided
    type: "milestone", // Changed to "milestone"
    id: "Public Transport Improvement Report_Q2_2024",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
    },
  },
  {
    start: new Date(2024, 1, 1), // 1st January
    end: new Date(2024, 1, 3), // Milestone doesn't have a duration
    department: "Housing",
    name: "📧", // Using the exact option provided
    type: "milestone", // Changed to "milestone"
    id: "AnnualTenantSatisfactionSurvey_2024",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Housing, // Reference departmentColors object
      progressSelectedColor: departmentColors.Housing,
      backgroundColor: departmentColors.Housing,
    },
  },
  {
    start: new Date(2024, 9, 1), // 1st September
    end: new Date(2024, 9, 3), // Milestone doesn't have a duration
    department: "Skills",
    name: "📱", // Using the exact option provided
    type: "milestone", // Changed to "milestone"
    id: "ApprenticeshipSchemeApplicationsClosed_2024",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Skills, // Reference departmentColors object
      progressSelectedColor: departmentColors.Skills,
      backgroundColor: departmentColors.Skills,
    },
  },
  {
    start: new Date(2024, 3, 31), // 31st March (end of Q1)
    end: new Date(2024, 4, 2), // Milestone doesn't have a duration
    department: "Business",
    name: "📄", // Using the exact option provided
    type: "milestone", // Changed to "milestone"
    id: "FinancialPerformanceReport_Q1_2024",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
    },
  },
  {
    start: new Date(2024, 11, 30), // 30th November
    end: new Date(2024, 12, 1), // Milestone doesn't have a duration
    department: "NetZero",
    name: "📅", // Using the exact option provided
    type: "milestone", // Changed to "milestone"
    id: "NetZeroStrategyProgressReview_2024",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
    },
  },
];
export default tasks;
