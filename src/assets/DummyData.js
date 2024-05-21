const departmentColors = {
  Transport: "#9F8FEF",
  Housing: "#6CC3E0",
  Skills: "#F5CD47",
  NetZero: "#94C748",
  Internal: "#FEA362",
  Business: "#F87168",
};

const displayOrder = {
  Transport: 1,
  Housing: 2,
  Skills: 3,
  NetZero: 4,
  Internal: 5,
  Business: 6,
};

const tasks = [
  {
    start: new Date(2024, 4, 15), // Earliest start date for Cycle to Work Scheme tasks
    end: new Date(2024, 11, 1), // Latest end date for Cycle to Work Scheme tasks
    department: "Transport",
    name: "Cycle to Work Scheme",
    type: "project",
    id: "Cycle to Work Scheme", // Changed to "Campaign 1"
    assigned: "Rebekah Anderson",
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 1,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
      backgroundSelectedColor: departmentColors.Transport,
    },
    blurb:
      "This campaign encourages employees to commute by bicycle, promoting health and reducing carbon footprint. Party in the USA. Blank Space. can you guess?",
    blurbTwo: "We really need to push this one as this reflects on our plans for a greener West Midlands.",
    blurbThree: "Can you get the posters done for the Green Midlands campaign?"
  },
  {
    start: new Date(2024, 5, 1), // Earliest start date for Improve Tenant Satisfaction tasks
    end: new Date(2024, 8, 27), // Latest end date for Improve Tenant Satisfaction tasks
    department: "Housing",
    name: "Improve Tenant Satisfaction",
    type: "project",
    id: "Improve Tenant Satisfaction", // Changed to "Campaign 2"
    assigned: "Timothy Bridge",
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 2,
    styles: {
      progressColor: departmentColors.Housing, // Reference departmentColors object
      progressSelectedColor: departmentColors.Housing,
      backgroundColor: departmentColors.Housing,
      backgroundSelectedColor: departmentColors.Housing,
    },
    blurb:
      "This campaign aims to enhance tenant experiences and satisfaction within our housing properties.",
  },
  {
    start: new Date(2024, 6, 1), // Earliest start date for Promote Skills Development Programs tasks
    end: new Date(2025, 2, 16), // Latest end date for Promote Skills Development Programs tasks
    department: "Skills",
    name: "Promote Skills Development Programs",
    type: "project",
    id: "Promote Skills Development Programs", // Changed to "Campaign 3"
    assigned: "Aaqeeb Hussain",
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 3,
    styles: {
      progressColor: departmentColors.Skills, // Reference departmentColors object
      progressSelectedColor: departmentColors.Skills,
      backgroundColor: departmentColors.Skills,
      backgroundSelectedColor: departmentColors.Skills,
    },
    blurb:
      "This campaign aims to promote skill development initiatives and programs within the organization.",
  },
  {
    start: new Date(2024, 2, 15), // Earliest start date for Financial Planning tasks
    end: new Date(2024, 7, 25), // Latest end date for Financial Planning tasks
    department: "Business",
    name: "Financial Planning",
    type: "project",
    id: "Financial Planning", // Changed to "Campaign 4"
    assigned: "Courtney Smith",
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 4,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
      backgroundSelectedColor: departmentColors.Business,
    },
    blurb:
      "This project involves strategic financial planning to optimize the organization's fiscal resources.",
  },
  {
    start: new Date(2024, 7, 20), // Earliest start date for Marketing and Communications tasks
    end: new Date(2024, 11, 11), // Latest end date for Marketing and Communications tasks
    department: "Business",
    name: "Marketing and Communications",
    type: "project",
    id: "Marketing and Communications", // Changed to "Campaign 5"
    assigned: "Arion King",
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 5,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
      backgroundSelectedColor: departmentColors.Business,
    },
    blurb:
      "This campaign focuses on enhancing marketing strategies and communication channels to reach wider audiences.",
  },
  {
    start: new Date(2024, 6, 10), // Earliest start date for Business Development tasks (assuming related to Promote Sustainability)
    end: new Date(2024, 7, 31), // Latest end date for Business Development tasks (assuming related to Promote Sustainability)
    department: "NetZero",
    name: "Promote Sustainability",
    type: "project",
    id: "Promote Sustainability", // Changed to "Campaign 6"
    assigned: "Rebekah Anderson",
    hideChildren: false,
    isDisabled: false,
    progress: 100,
    displayOrder: 6,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
      backgroundSelectedColor: departmentColors.NetZero,
    },
    blurb:
      "This campaign aims to foster sustainability practices within the organization and promote environmental consciousness.",
  },
  {
    start: new Date(2024, 4, 25), // 25th April
    end: new Date(2024, 8, 26), // 26th April
    department: "NetZero",
    name: "Raise Environmental Awareness",
    type: "project",
    id: "Raise Environmental Awareness", // New campaign
    assigned: "Timothy Bridge",
    hideChildren: false,
    isDisabled: false,
    progress: 100, // Assuming progress tracking not yet available
    displayOrder: 7,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
      backgroundSelectedColor: departmentColors.NetZero,
    },
    blurb:
      "This project aims to increase awareness about environmental issues and promote sustainable practices within the community.",
  },
  {
    start: new Date(2024, 6, 20), // 20th June
    end: new Date(2024, 9, 21), // 21st June
    department: "NetZero",
    name: "NetZero Strategy",
    type: "project",
    id: "NetZero Strategy", // New campaign
    assigned: "Courtney Smith",
    hideChildren: false,
    isDisabled: false,
    progress: 100, // Assuming progress tracking not yet available
    displayOrder: 8,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
      backgroundSelectedColor: departmentColors.NetZero,
    },
    blurb:
      "This project involves devising strategies and initiatives to achieve net-zero carbon emissions and promote sustainability within the organization.",
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
    assigned: "Aaqeeb Hussain",
    displayOrder: 1,
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
      backgroundSelectedColor: departmentColors.Transport,
    },
    blurb:
      "This workshop aims to educate employees about bicycle safety measures to promote safe commuting.",
  },
  {
    start: new Date(2024, 6, 15), // 15th June
    end: new Date(2024, 6, 17), // 16th June
    department: "Transport",
    name: "📅",
    type: "task",
    id: "WMCA Free Bike Maintenance Workshop",
    assigned: "Aaqeeb Hussain",
    project: "Cycle to Work Scheme",
    isDisabled: false,
    progress: 100,
    displayOrder: 1,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
      backgroundSelectedColor: departmentColors.Transport,
    },
    blurb:
      "This workshop provides employees with free bike maintenance services to ensure their bicycles are in good condition for commuting.",
  },
  {
    start: new Date(2024, 8, 1), // 1st August
    end: new Date(2024, 8, 3), // 2nd August
    department: "Transport",
    name: "📱",
    type: "task",
    id: "Promote Cycle to Work Scheme on Social Media",
    assigned: "Aaqeeb Hussain",
    project: "Cycle to Work Scheme",
    isDisabled: false,
    progress: 100,
    displayOrder: 1,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
      backgroundSelectedColor: departmentColors.Transport,
    },
    blurb:
      "This task involves leveraging social media platforms to promote the Cycle to Work Scheme and encourage employee participation.",
  },
  {
    start: new Date(2024, 10, 31), // 31st October (Halloween!)
    end: new Date(2024, 11, 2), // 1st November
    department: "Transport",
    name: "📅",
    type: "task",
    id: "WMCA Spooky Cycle Night Event",
    assigned: "Aaqeeb Hussain",
    project: "Cycle to Work Scheme",
    isDisabled: false,
    progress: 100,
    displayOrder: 1,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
      backgroundSelectedColor: departmentColors.Transport,
    },
    blurb:
      "This event aims to promote cycling as a fun and healthy activity, encouraging participation through a themed night ride.",
  },

  // Housing Campaigns
  {
    start: new Date(2024, 5, 1),
    end: new Date(2024, 5, 3),
    department: "Housing",
    name: "📧",
    type: "task", // Changed type to "task"
    id: "Annual Tenant Satisfaction Survey Reminder",
    assigned: "Aaqeeb Hussain",
    project: "Improve Tenant Satisfaction",
    isDisabled: false,
    progress: 100,
    displayOrder: 2,
    styles: {
      progressColor: departmentColors.Housing, // Reference departmentColors object
      progressSelectedColor: departmentColors.Housing,
      backgroundColor: departmentColors.Housing,
      backgroundSelectedColor: departmentColors.Housing,
    },
    blurb:
      "This task serves as a reminder to conduct the annual tenant satisfaction survey to gather feedback and improve housing services.",
  },
  {
    start: new Date(2024, 6, 12), // 12th May
    end: new Date(2024, 6, 14), // 13th May
    department: "Housing",
    name: "📅",
    type: "task",
    id: "Quarterly Tenant Satisfaction Forum",
    assigned: "Arion King",
    project: "Improve Tenant Satisfaction",
    isDisabled: false,
    progress: 100,
    displayOrder: 2,
    styles: {
      progressColor: departmentColors.Housing, // Reference departmentColors object
      progressSelectedColor: departmentColors.Housing,
      backgroundColor: departmentColors.Housing,
      backgroundSelectedColor: departmentColors.Housing,
    },
    blurb:
      "This forum provides an opportunity for tenants to voice their concerns and suggestions, contributing to ongoing efforts to improve tenant satisfaction.",
  },
  {
    start: new Date(2024, 8, 25), // 25th November
    end: new Date(2024, 8, 27), // 26th November
    department: "Housing",
    name: "📧",
    type: "task",
    id: "WMCA Tenant Satisfaction Survey Invitation",
    assigned: "Arion King",
    project: "Improve Tenant Satisfaction",
    isDisabled: false,
    progress: 100,
    displayOrder: 2,
    styles: {
      progressColor: departmentColors.Housing, // Reference departmentColors object
      progressSelectedColor: departmentColors.Housing,
      backgroundColor: departmentColors.Housing,
      backgroundSelectedColor: departmentColors.Housing,
    },
    blurb:
      "This task involves sending out invitations for the tenant satisfaction survey to gather valuable feedback for continuous improvement of housing services.",
  },

  // Skills Campaigns

  {
    start: new Date(2024, 6, 1),
    end: new Date(2024, 6, 3),
    department: "Skills",
    name: "📱",
    type: "task", // Changed type to "task"
    id: "WMCA Skills Development Campaign: Social Media Blitz",
    assigned: "Arion King",
    project: "Promote Skills Development Programs",
    isDisabled: false,
    progress: 100,
    displayOrder: 3,
    styles: {
      progressColor: departmentColors.Skills, // Reference departmentColors object
      progressSelectedColor: departmentColors.Skills,
      backgroundColor: departmentColors.Skills,
      backgroundSelectedColor: departmentColors.Skills,
    },
    blurb:
      "This task involves launching a social media blitz campaign to promote skills development programs and initiatives.",
  },
  {
    start: new Date(2024, 11, 1),
    end: new Date(2024, 11, 3),
    department: "Skills",
    name: "📄",
    type: "task", // Changed type to "task"
    id: "Magazine Media Blitz",
    assigned: "Timothy Bridge",
    project: "Promote Skills Development Programs",
    isDisabled: false,
    progress: 100,
    displayOrder: 3,
    styles: {
      progressColor: departmentColors.Skills, // Reference departmentColors object
      progressSelectedColor: departmentColors.Skills,
      backgroundColor: departmentColors.Skills,
      backgroundSelectedColor: departmentColors.Skills,
    },
    blurb:
      "This task involves launching a magazine media blitz campaign to raise awareness about skills development programs and encourage participation.",
  },
  {
    start: new Date(2025, 2, 14),
    end: new Date(2025, 2, 16),
    department: "Skills",
    name: "🎥",
    type: "task", // Changed type to "task"
    id: "TV Media Blitz",
    assigned: "Timothy Bridge",
    project: "Promote Skills Development Programs",
    isDisabled: false,
    progress: 100,
    displayOrder: 3,
    styles: {
      progressColor: departmentColors.Skills, // Reference departmentColors object
      progressSelectedColor: departmentColors.Skills,
      backgroundColor: departmentColors.Skills,
      backgroundSelectedColor: departmentColors.Skills,
    },
    blurb:
      "This task involves launching a television media blitz campaign to showcase skills development programs and initiatives to a wider audience.",
  },

  {
    start: new Date(2024, 2, 15), // 15th March
    end: new Date(2024, 2, 17), // 16th March
    department: "Business",
    name: "🎥",
    type: "task",
    id: "WMCA Announces Budget Update",
    assigned: "Timothy Bridge",
    project: "Financial Planning",
    isDisabled: false,
    progress: 100,
    displayOrder: 4,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
      backgroundSelectedColor: departmentColors.Business,
    },
    blurb:
      "This task involves announcing updates and changes to the WMCA budget, ensuring transparency and accountability in financial planning.",
  },
  {
    start: new Date(2024, 7, 24), // 24th July
    end: new Date(2024, 7, 26), // 25th July
    department: "Business",
    name: "📅",
    type: "task",
    id: "WMCA Quarterly Financial Review Meeting",
    assigned: "Timothy Bridge",
    project: "Financial Planning",
    isDisabled: false,
    progress: 100,
    displayOrder: 4,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
      backgroundSelectedColor: departmentColors.Business,
    },
    blurb:
      "This meeting is dedicated to reviewing quarterly financial performance and making strategic decisions to ensure financial stability and growth.",
  },
  {
    start: new Date(2024, 7, 20), // 20th February
    end: new Date(2024, 7, 22), // 21st February
    department: "Business",
    name: "📱",
    type: "task",
    id: "Promote WMCA Business Event on Social Media",
    assigned: "Timothy Bridge",
    project: "Marketing and Communications",
    isDisabled: false,
    progress: 100,
    displayOrder: 5,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
      backgroundSelectedColor: departmentColors.Business,
    },
    blurb:
      "This task involves leveraging social media platforms to promote an upcoming WMCA business event and maximize attendance.",
  },
  {
    start: new Date(2024, 9, 10), // 10th October
    end: new Date(2024, 9, 12), // 11th October
    department: "Business",
    name: "📧",
    type: "task",
    id: "WMCA Business Newsletter - October Edition",
    assigned: "Timothy Bridge",
    project: "Marketing and Communications",
    isDisabled: false,
    progress: 100,
    displayOrder: 5,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
      backgroundSelectedColor: departmentColors.Business,
    },
    blurb:
      "This task involves creating and distributing the October edition of the WMCA business newsletter to keep stakeholders informed about recent developments and upcoming events.",
  },
  {
    start: new Date(2024, 11, 9), // 10th October
    end: new Date(2024, 11, 11), // 11th October
    department: "Business",
    name: "📄",
    type: "task",
    id: "WMCA Business Newsletter",
    assigned: "Timothy Bridge",
    project: "Marketing and Communications",
    isDisabled: false,
    progress: 100,
    displayOrder: 5,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
      backgroundSelectedColor: departmentColors.Business,
    },
    blurb:
      "This task involves compiling and distributing the regular WMCA business newsletter to provide updates on organizational activities and initiatives.",
  },

  {
    start: new Date(2024, 6, 10), // 29th February (leap year!)
    end: new Date(2024, 6, 12), // 1st March
    department: "NetZero",
    name: "📅",
    type: "task",
    id: "WMCA Sustainable Living Workshop",
    assigned: "Timothy Bridge",
    project: "Promote Sustainability",
    isDisabled: false,
    progress: 100,
    displayOrder: 6,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
      backgroundSelectedColor: departmentColors.NetZero,
    },
    blurb:
      "This workshop aims to educate participants on sustainable living practices and encourage adoption of eco-friendly behaviors for a greener future.",
  },

  {
    start: new Date(2024, 9, 29), // 29th February (leap year!)
    end: new Date(2024, 9, 31), // 1st March
    department: "NetZero",
    name: "📱",
    type: "task",
    id: "Green Choices",
    assigned: "Timothy Bridge",
    project: "Promote Sustainability",
    isDisabled: false,
    progress: 100,
    displayOrder: 6,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
      backgroundSelectedColor: departmentColors.NetZero,
    },
    blurb:
      "This task aims to promote environmentally friendly choices and behaviors among WMCA staff and the wider community, fostering a culture of sustainability.",
  },
  {
    start: new Date(2024, 4, 25), // 25th April
    end: new Date(2024, 4, 27), // 26th April
    department: "NetZero",
    name: "📱",
    type: "task",
    id: "WMCA Celebrates Earth Day 1",
    assigned: "Timothy Bridge",
    project: "Raise Environmental Awareness",
    isDisabled: false,
    progress: 100,
    displayOrder: 7,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
      backgroundSelectedColor: departmentColors.NetZero,
    },
    blurb:
      "This task involves organizing and participating in events to celebrate Earth Day, raising awareness about environmental issues and promoting sustainable practices.",
  },
  {
    start: new Date(2024, 8, 25), // 25th April
    end: new Date(2024, 8, 27), // 26th April
    department: "NetZero",
    name: "📅",
    type: "task",
    id: "WMCA Celebrates Earth Day",
    assigned: "Timothy Bridge",
    project: "Raise Environmental Awareness",
    isDisabled: false,
    progress: 100,
    displayOrder: 7,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
      backgroundSelectedColor: departmentColors.NetZero,
    },
    blurb:
      "This task involves organizing activities and initiatives to celebrate Earth Day, engaging the community in efforts to protect and preserve the environment.",
  },
  {
    start: new Date(2024, 6, 20), // 20th June
    end: new Date(2024, 6, 22), // 21st June
    department: "NetZero",
    name: "🎥",
    type: "task",
    id: "WMCA Announces Progress on NetZero Initiatives",
    assigned: "Courtney Smith",
    project: "NetZero Strategy",
    isDisabled: false,
    progress: 100,
    displayOrder: 8,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
      backgroundSelectedColor: departmentColors.NetZero,
    },
    blurb:
      "This task involves communicating the latest progress and achievements in WMCA's NetZero initiatives, highlighting efforts towards sustainability and carbon neutrality.",
  },
  {
    start: new Date(2024, 8, 24), // 24th October
    end: new Date(2024, 8, 26), // 25th October
    department: "NetZero",
    name: "📅",
    type: "task",
    id: "WMCA NetZero Committee Meeting 1",
    assigned: "Courtney Smith",
    project: "NetZero Strategy",
    isDisabled: false,
    progress: 100,
    displayOrder: 8,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
      backgroundSelectedColor: departmentColors.NetZero,
    },
    blurb:
      "This meeting brings together the NetZero committee to discuss strategies and actions aimed at achieving WMCA's sustainability goals and reducing carbon emissions.",
  },
  {
    start: new Date(2024, 9, 20), // 24th October
    end: new Date(2024, 9, 22), // 25th October
    department: "NetZero",
    name: "📅",
    type: "task",
    id: "WMCA NetZero Committee Meeting",
    assigned: "Courtney Smith",
    project: "NetZero Strategy",
    isDisabled: false,
    progress: 100,
    displayOrder: 8,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
      backgroundSelectedColor: departmentColors.NetZero,
    },
    blurb:
      "This meeting serves as a platform for the NetZero committee to collaborate on initiatives and strategies for advancing WMCA's sustainability agenda and achieving carbon neutrality.",
  },
  {
    start: new Date(2024, 5, 1), // 1st June
    end: new Date(2024, 5, 2), // Milestone doesn't have a duration
    department: "Transport",
    name: "🎥", // Using the exact option provided
    type: "milestone", // Changed to "milestone"
    id: "Public Transport Improvement Report_Q2_2024",
    assigned: "Courtney Smith",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Transport, // Reference departmentColors object
      progressSelectedColor: departmentColors.Transport,
      backgroundColor: departmentColors.Transport,
      backgroundSelectedColor: departmentColors.Transport,
    },
    blurb:
      "This milestone represents the completion of the Public Transport Improvement Report for the second quarter of 2024, summarizing findings and recommendations for enhancing public transportation services.",
  },

  {
    start: new Date(2024, 1, 1), // 1st January
    end: new Date(2024, 1, 3), // Milestone doesn't have a duration
    department: "Housing",
    name: "📧", // Using the exact option provided
    type: "milestone", // Changed to "milestone"
    id: "AnnualTenantSatisfactionSurvey_2024",
    assigned: "Courtney Smith",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Housing, // Reference departmentColors object
      progressSelectedColor: departmentColors.Housing,
      backgroundColor: departmentColors.Housing,
      backgroundSelectedColor: departmentColors.Housing,
    },
    blurb:
      "This milestone marks the completion of the annual tenant satisfaction survey for the year 2024, gathering feedback and insights from tenants to improve housing services and facilities.",
  },
  {
    start: new Date(2024, 9, 1), // 1st September
    end: new Date(2024, 9, 3), // Milestone doesn't have a duration
    department: "Skills",
    name: "📱", // Using the exact option provided
    type: "milestone", // Changed to "milestone"
    id: "ApprenticeshipSchemeApplicationsClosed_2024",
    assigned: "Courtney Smith",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Skills, // Reference departmentColors object
      progressSelectedColor: departmentColors.Skills,
      backgroundColor: departmentColors.Skills,
      backgroundSelectedColor: departmentColors.Skills,
    },
    blurb:
      "This milestone represents the closure of applications for the apprenticeship scheme in 2024, marking a key stage in the recruitment process for new apprentices.",
  },
  {
    start: new Date(2024, 3, 31), // 31st March (end of Q1)
    end: new Date(2024, 4, 2), // Milestone doesn't have a duration
    department: "Business",
    name: "📄", // Using the exact option provided
    type: "milestone", // Changed to "milestone"
    id: "FinancialPerformanceReport_Q1_2024",
    assigned: "Courtney Smith",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Business, // Reference departmentColors object
      progressSelectedColor: departmentColors.Business,
      backgroundColor: departmentColors.Business,
      backgroundSelectedColor: departmentColors.Business,
    },
    blurb:
      "This milestone marks the completion of the financial performance report for the first quarter of 2024, providing insights into the business's financial health and performance.",
  },
  {
    start: new Date(2024, 11, 30), // 30th November
    end: new Date(2024, 12, 1), // Milestone doesn't have a duration
    department: "NetZero",
    name: "📅", // Using the exact option provided
    type: "milestone", // Changed to "milestone"
    id: "NetZeroStrategyProgressReview_2024",
    assigned: "Courtney Smith",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.NetZero, // Reference departmentColors object
      progressSelectedColor: departmentColors.NetZero,
      backgroundColor: departmentColors.NetZero,
      backgroundSelectedColor: departmentColors.NetZero,
    },
    blurb:
      "This milestone marks the progress review of the NetZero strategy for the year 2024, assessing achievements and identifying areas for further improvement in WMCA's sustainability initiatives.",
  },
  {
    start: new Date(2024, 7, 20), // 20th August
    end: new Date(2024, 7, 21), // Milestone lasts for 2 days
    department: "Internal",
    name: "📅", // Using an emoji for an internal activity
    type: "milestone", // Changed to "milestone"
    id: "Budget Planning Session",
    assigned: "Courtney Smith",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Internal, // Reference departmentColors object
      progressSelectedColor: departmentColors.Internal,
      backgroundColor: departmentColors.Internal,
      backgroundSelectedColor: departmentColors.Internal,
    },
    blurb:
      "This milestone marks the completion of a budget planning session, where financial strategies and allocations for upcoming projects were discussed and finalized.",
  },
  {
    start: new Date(2024, 8, 10), // 10th September
    end: new Date(2024, 8, 11), // Milestone lasts for 2 days
    department: "Internal",
    name: "📧", // Using an emoji for an internal activity
    type: "milestone", // Changed to "milestone"
    id: "Office Supplies Replenishment",
    assigned: "Rebekah Anderson",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Internal, // Reference departmentColors object
      progressSelectedColor: departmentColors.Internal,
      backgroundColor: departmentColors.Internal,
      backgroundSelectedColor: departmentColors.Internal,
    },
    blurb:
      "This milestone marks the completion of replenishing office supplies, ensuring that essential items are stocked for efficient daily operations within WMCA.",
  },
  {
    start: new Date(2024, 10, 15), // 15th November
    end: new Date(2024, 10, 16), // Milestone lasts for 2 days
    department: "Internal",
    name: "📅", // Using an emoji for an internal activity
    type: "milestone", // Changed to "milestone"
    id: "Internal Training Workshop",
    assigned: "Timothy Bridge",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Internal, // Reference departmentColors object
      progressSelectedColor: departmentColors.Internal,
      backgroundColor: departmentColors.Internal,
      backgroundSelectedColor: departmentColors.Internal,
    },
    blurb:
      "This milestone marks the completion of an internal training workshop aimed at enhancing skills and knowledge among WMCA staff, contributing to professional development within the organization.",
  },
  {
    start: new Date(2024, 11, 20), // 20th December
    end: new Date(2024, 11, 21), // Milestone lasts for 2 days
    department: "Internal",
    name: "📱", // Using an emoji for an internal activity
    type: "milestone", // Changed to "milestone"
    id: "Technology Upgrade Implementation",
    assigned: "Courtney Smith",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Internal, // Reference departmentColors object
      progressSelectedColor: departmentColors.Internal,
      backgroundColor: departmentColors.Internal,
      backgroundSelectedColor: departmentColors.Internal,
    },
    blurb:
      "This milestone marks the completion of implementing technology upgrades, enhancing operational efficiency and performance within WMCA's internal systems.",
  },
  {
    start: new Date(2025, 2, 15), // 15th March
    end: new Date(2025, 2, 16), // Milestone lasts for 2 days
    department: "Internal",
    name: "📄", // Using an emoji for an internal activity
    type: "milestone", // Changed to "milestone"
    id: "Annual Report Preparation",
    assigned: "Rebekah Anderson",
    project: "", // Left project blank
    isDisabled: false,
    progress: 100,
    styles: {
      progressColor: departmentColors.Internal, // Reference departmentColors object
      progressSelectedColor: departmentColors.Internal,
      backgroundColor: departmentColors.Internal,
      backgroundSelectedColor: departmentColors.Internal,
    },
    blurb:
      "This milestone marks the completion of preparing the annual report, summarizing key achievements and activities undertaken by WMCA throughout the year for stakeholders and the public.",
  },
];
export default tasks;
