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
    start: new Date(2024, 4, 15),
    end: new Date(2024, 11, 1),
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
      "This campaign encourages employees to commute by bicycle, promoting health and reducing carbon footprint.",
    blurbTwo:
      "For more information, visit the scheme's internal webpage or contact Rebekah Anderson directly.", // Key contacts
    blurbThree:
      "Case studies showcasing the environmental and health benefits are available on the intranet.", // Additional information
  },
  {
    start: new Date(2024, 5, 1),
    end: new Date(2024, 8, 27),
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
    blurbTwo:
      "Tenant satisfaction surveys will be distributed in July. We encourage full participation.", // Key action point
    blurbThree:
      "Residents can submit feedback and suggestions through a dedicated online portal.", // Additional channel
  },
  {
    start: new Date(2024, 6, 1),
    end: new Date(2025, 2, 16),
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
    blurbTwo:
      "A skills development fair will be held in September. Register your attendance beforehand.", // Key event
    blurbThree:
      "Department managers are encouraged to nominate employees for relevant training programs.", // Call to action
  },
  {
    start: new Date(2024, 2, 15),
    end: new Date(2024, 7, 25),
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
    blurbTwo:
      "Regular budget review meetings will be held throughout the year. Department leads are required to attend.", // Key meeting
    blurbThree:
      "Financial planning resources and templates are available on the shared drive.", // Additional resource
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
    blurbTwo:
      "A new marketing strategy document will be shared on the intranet by the end of August.", // Key deliverable
    blurbThree:
      "Departmental communication workshops will be held throughout the year. Participation is encouraged.", // Call to action
  },
  {
    start: new Date(2024, 6, 10), // Earliest start date for Business Development tasks (assuming related to Promote Sustainability)
    end: new Date(2024, 9, 31), // 31st October
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
    blurbTwo:
      "A green business awards nomination is being prepared. Staff can submit suggestions for consideration.", // Key initiative
    blurbThree:
      "Sustainable business practices guide will be distributed to all employees by the end of July.", // Additional resource
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
    blurbTwo:
      "An environmental awareness campaign will be launched in July. Look out for more information!", // Key announcement
    blurbThree:
      "Educational resources and volunteering opportunities will be promoted through various channels.", // Additional outreach
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
    blurbTwo:
      "A cross-departmental workshop will be held in July to brainstorm ideas for the NetZero Strategy. All staff are encouraged to participate!", // Call to action
    blurbThree:
      "Employee suggestions for sustainability improvements can be submitted through the internal Green Teams platform.", // Additional channel for participation
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
    blurbTwo:
      "Registration for the Cycle Safety Workshop is now open! Limited spaces available, so sign up today.", // Time-sensitive information
    blurbThree:
      "A recording of the workshop will be available on the intranet for those who cannot attend.", // Accessibility consideration
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
    blurbTwo:
      "Don't forget to bring your bike to the Free Bike Maintenance Workshop! Appointments are not required.", // Reminder and logistical information
    blurbThree:
      "Basic bike maintenance tools and resources will be available on the intranet after the workshop.", // Additional learning materials
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
    blurbTwo:
      "Create eye-catching social media posts highlighting the benefits of cycling to work, such as cost savings, exercise, and environmental friendliness. Use relevant hashtags to increase reach.", // Specific guidance for task execution
    blurbThree:
      "Consider partnering with other departments like Marketing & Communications to amplify the social media campaign.", // Collaboration suggestion
  },
  {
    start: new Date(2024, 10, 30), // 31st October (Halloween!)
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
    blurbTwo:
      "Plan a fun and spooky route for the night ride, incorporating Halloween decorations and themes. Encourage participants to dress up in costumes for added fun!", // Event planning details
    blurbThree:
      "Partner with local businesses to offer refreshments or discounts to attendees after the ride.", // Additional event incentive
  },

  // Housing Campaigns
  {
    start: new Date(2024, 5, 1), // 1st May
    end: new Date(2024, 5, 3), // 3rd May
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
    blurbTwo:
      "Ensure the tenant satisfaction survey is accessible through multiple channels, such as email, online forms, and paper copies.", // Consideration for inclusivity
    blurbThree:
      "Incent participation by offering a prize draw for tenants who complete the survey.", // Incentive to encourage participation
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
    blurbTwo:
      "The forum will feature interactive sessions where tenants can discuss their experiences and propose ideas for service enhancements.",
    blurbThree:
      "Feedback collected during the forum will be analyzed and incorporated into the housing department's strategic plan for the upcoming quarter.",
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
    blurbTwo:
      "The invitations will include detailed instructions on how to complete the survey, ensuring maximum participation and accurate data collection.",
    blurbThree:
      "Collected survey responses will be crucial in identifying areas of improvement and measuring the effectiveness of recent housing initiatives.",
  },
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
    blurbTwo:
      "The campaign will utilize various social media platforms to reach a wide audience, highlighting the benefits of WMCA's skills development programs.",
    blurbThree:
      "Metrics such as engagement rates and follower growth will be tracked to evaluate the campaign's effectiveness and inform future marketing strategies.",
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
    blurbTwo:
      "The magazine campaign will feature success stories and testimonials from program participants, showcasing the impact of the skills development initiatives.",
    blurbThree:
      "Advertisements will be placed in popular magazines with a high readership among the target audience, maximizing outreach and engagement.",
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
    blurbTwo:
      "The TV campaign will include interviews with program leaders and participants, highlighting the benefits and success stories of the skills development programs.",
    blurbThree:
      "Broadcast segments will be aired during prime time to reach the maximum number of viewers and generate high levels of interest and engagement.",
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
    blurbTwo:
      "The announcement will detail key budget allocations and financial strategies for the upcoming fiscal year, providing clarity and direction for stakeholders.",
    blurbThree:
      "Stakeholders and the public will be invited to a live Q&A session following the announcement to address any questions or concerns regarding the budget update.",
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
    blurbTwo:
      "Key financial metrics and performance indicators will be analyzed to evaluate the organization's financial health and identify areas for improvement.",
    blurbThree:
      "Stakeholders will collaborate to develop action plans and set financial goals for the next quarter, ensuring alignment with WMCA's overall strategic objectives.",
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
    blurbTwo:
      "Social media posts will highlight key speakers, event topics, and networking opportunities to generate interest and engagement.",
    blurbThree:
      "Metrics such as reach, engagement, and click-through rates will be monitored to assess the effectiveness of the promotional campaign and make adjustments as needed.",
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
    blurbTwo:
      "Content will include articles on recent projects, upcoming events, and strategic initiatives, as well as interviews with key personnel.",
    blurbThree:
      "The newsletter will be distributed via email and made available on the WMCA website, with analytics tracked to measure readership and engagement.",
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
    blurbTwo:
      "Each edition will feature sections on recent achievements, upcoming events, and profiles of new staff members to keep stakeholders informed and engaged.",
    blurbThree:
      "Feedback from readers will be solicited to continuously improve the newsletter's content and format, ensuring it meets the needs and interests of the audience.",
  },

  {
    start: new Date(2024, 6, 10), // 10th July
    end: new Date(2024, 6, 12), // 12th July
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
    blurbTwo:
      "The workshop will cover topics such as reducing carbon footprints, waste management, and energy conservation, providing practical tips and resources.",
    blurbThree:
      "Participants will engage in interactive activities and discussions, fostering a sense of community and commitment to sustainability.",
  },

  {
    start: new Date(2024, 9, 29), // 29th October
    end: new Date(2024, 9, 31), // 31st October
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
    blurbTwo:
      "The initiative will include awareness campaigns, workshops, and incentives to adopt green practices such as recycling and using public transport.",
    blurbThree:
      "Success metrics will be tracked to measure the impact of the campaign, including reductions in waste and increased participation in sustainability programs.",
  },
  {
    start: new Date(2024, 4, 25), // 25th May
    end: new Date(2024, 4, 27), // 27th May
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
    blurbTwo:
      "Events will include clean-up drives, tree planting, and educational sessions on the importance of biodiversity and conservation.",
    blurbThree:
      "Collaborations with local schools and community organizations will enhance the reach and impact of Earth Day celebrations.",
  },
  {
    start: new Date(2024, 8, 25), // 25th September
    end: new Date(2024, 8, 27), // 27th September
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
    blurbTwo:
      "Activities will include workshops, clean-up drives, and educational sessions aimed at increasing environmental awareness and promoting sustainable living practices.",
    blurbThree:
      "The event will also feature guest speakers and experts who will share insights on various environmental issues and how to address them effectively.",
  },

  {
    start: new Date(2024, 6, 20), // 20th June
    end: new Date(2024, 6, 22), // 22nd June
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
    blurbTwo:
      "The announcement will include detailed reports on specific projects, milestones achieved, and future plans for continuing the NetZero efforts.",
    blurbThree:
      "Stakeholders and the public will be invited to participate in a Q&A session to discuss the progress and provide feedback on the initiatives.",
  },

  {
    start: new Date(2024, 8, 24), // 24th September
    end: new Date(2024, 8, 26), // 26th September
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
    blurbTwo:
      "Key agenda items will include reviewing current projects, setting new targets, and planning upcoming initiatives to further the NetZero agenda.",
    blurbThree:
      "The meeting will also feature guest presentations from environmental experts and stakeholders to provide insights and recommendations.",
  },

  {
    start: new Date(2024, 9, 20), // 20th October
    end: new Date(2024, 9, 22), // 22nd October
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
    blurbTwo:
      "Discussions will focus on the progress of ongoing projects, potential new initiatives, and resource allocation for upcoming activities.",
    blurbThree:
      "Committee members will also review and assess the impact of current policies and propose adjustments to enhance their effectiveness.",
  },

  {
    start: new Date(2024, 5, 1), // 1st June
    end: new Date(2024, 5, 3), // 2nd June
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
    blurbTwo:
      "The report will include analysis of current public transport performance, passenger feedback, and areas identified for improvement.",
    blurbThree:
      "Recommendations will be made to address issues such as service reliability, coverage, and user satisfaction, aiming to enhance overall public transport experience.",
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
    blurbTwo: "Tenant feedback collection.",
    blurbThree: "Improving housing services.",
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
    blurbTwo: "Apprenticeship recruitment.",
    blurbThree: "Applications closed for 2024.",
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
    blurbTwo: "Q1 financial insights.",
    blurbThree: "Assessing financial health.",
  },
  {
    start: new Date(2024, 11, 30), // 30th November
    end: new Date(2024, 12, 2), // Milestone doesn't have a duration
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
    blurbTwo: "NetZero strategy review.",
    blurbThree: "Evaluating sustainability progress.",
  },
  {
    start: new Date(2024, 7, 20), // 20th August
    end: new Date(2024, 7, 22), // Milestone lasts for 2 days
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
    blurbTwo: "Financial strategy session.",
    blurbThree: "Finalizing budget allocations.",
  },
  {
    start: new Date(2024, 8, 10), // 10th September
    end: new Date(2024, 8, 12), // Milestone lasts for 2 days
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
    blurbTwo: "Restocking office supplies.",
    blurbThree: "Ensuring operational efficiency.",
  },
  {
    start: new Date(2024, 10, 15), // 15th November
    end: new Date(2024, 10, 17), // Milestone lasts for 2 days
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
    blurbTwo: "Enhancing staff skills.",
    blurbThree: "Promoting professional development.",
  },
  {
    start: new Date(2024, 11, 20), // 20th December
    end: new Date(2024, 11, 22), // Milestone lasts for 2 days
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
    blurbTwo: "Upgrading internal tech.",
    blurbThree: "Enhancing system efficiency.",
  },
  {
    start: new Date(2025, 2, 15), // 15th March
    end: new Date(2025, 2, 17), // Milestone lasts for 2 days
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
    blurbTwo: "Preparing annual summary.",
    blurbThree: "Highlighting yearly achievements.",
  },
];
export default tasks;
