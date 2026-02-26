export type ThemeMode = 'dark' | 'light';
export type AppMode = 'intro' | 'terminal' | 'visual';

export interface Theme {
  bg: string;
  bgSoft: string;
  text: string;
  textMuted: string;
  border: string;
  accentPrimary: string;
  accentSecondary: string;
  borderColor: string;
  fillAccent: string;
  buttonPrimary: string;
  buttonSecondary: string;
  gradient: string;
  cardBg: string;
  lineColor: string;
  navText: string;
  separator: string;
  cursorColor: string;
  homeIconColor: string;
  homeIconBg: string;
  hoverText: string;
  hoverTextSecondary: string;
}

export const themes: Record<ThemeMode, Theme> = {
  dark: {
    bg: "bg-slate-900", bgSoft: "bg-slate-800", text: "text-slate-50", textMuted: "text-slate-400", border: "border-slate-700",
    accentPrimary: "text-teal-400", accentSecondary: "text-emerald-400", borderColor: "border-teal-500", fillAccent: "bg-teal-500",
    buttonPrimary: "bg-teal-600 text-white hover:bg-teal-500", buttonSecondary: "bg-slate-800 text-slate-200 hover:bg-slate-700",
    gradient: "from-teal-400 to-emerald-500", cardBg: "bg-slate-800/80 backdrop-blur-md", lineColor: "bg-slate-600",
    navText: "text-slate-300", separator: "bg-slate-500", cursorColor: "bg-teal-400",
    homeIconColor: "text-emerald-200", homeIconBg: "bg-emerald-500/20",
    hoverText: "hover:text-teal-400", hoverTextSecondary: "hover:text-emerald-400"
  },
  light: {
    bg: "bg-slate-50", bgSoft: "bg-white", text: "text-slate-900", textMuted: "text-slate-600", border: "border-slate-200",
    accentPrimary: "text-teal-600", accentSecondary: "text-emerald-600", borderColor: "border-teal-600", fillAccent: "bg-teal-600",
    buttonPrimary: "bg-teal-600 text-white hover:bg-teal-700", buttonSecondary: "bg-white text-slate-700 hover:bg-slate-100",
    gradient: "from-teal-600 to-emerald-600", cardBg: "bg-white/80 backdrop-blur-md", lineColor: "bg-slate-300",
    navText: "text-slate-700", separator: "bg-slate-300", cursorColor: "bg-teal-600",
    homeIconColor: "text-emerald-800", homeIconBg: "bg-emerald-100",
    hoverText: "hover:text-teal-600", hoverTextSecondary: "hover:text-emerald-600"
  }
};

export const projects = [
  { 
    id: 'sem-image-analysis', 
    title: "Microcellular Foam SEM Image Analysis", 
    desc: "Automated cell counting and sizing in PC-CO2 nanocellular foams.", 
    details: "Developed a robust, Python-based image analysis pipeline for automated cell counting and sizing in polycarbonate-CO2 microcellular foams using SEM micrographs. Implemented calibration, denoising, morphological segmentation, and validation.", 
    tech: ["Python", "OpenCV", "Image Processing"], 
    type: "Machine Learning", 
    color: "from-teal-400 to-blue-500",
    link: "https://github.com/SamriddhiS2/Microcellular-Foam-Analysis",
    mockType: "vision",
    mockData: ["ANALYSIS_MODE: ACTIVE", "RESOLUTION: 0.2nm", "CELLS_DETECTED: 14,290", "STATUS: OPTIMIZED"]
  },
  { 
    id: 'husky-butterwalk', 
    title: "Husky Butterwalk", 
    desc: "Nighttime campus ride safety application for university students.", 
    details: "Contributed as a software developer to a mobile app designed to enhance nighttime safety. Developed features for GPS tracking, live wait time estimates, and ride progress monitoring to empower students to make informed decisions.", 
    tech: ["React Native", "TypeScript", "Mobile Dev"], 
    type: "Mobile Application", 
    color: "from-emerald-400 to-teal-600",
    link: "https://github.com/KatharineZhang/ButterWalk",
    mockType: "map",
    mockData: ["LAT: 47.6553° N", "LON: 122.3035° W", "ETA: 4 MIN", "STATUS: SECURE"]
  },
  { 
    id: 'seeql', 
    title: "SeeQL", 
    desc: "VS Code extension enhancing SQL query execution and visualization.", 
    details: "Developed a VS Code extension enabling users to visualize CREATE table SQL statements via ER diagrams and relational algebra, execute SQL queries for cloud/local databases, and generate SQL queries using AI.", 
    tech: ["TypeScript", "SQLite", "VS Code API"], 
    type: "Tooling", 
    color: "from-indigo-500 to-purple-700",
    link: "https://github.com/Taipods/SeeQL",
    mockType: "editor",
    mockData: ["SELECT * FROM visualizations v", "JOIN schemas s ON v.id = s.id;", "> EXECUTING QUERY...", "> 4ms RESPONSE TIME"]
  }
];

export const experience = [
  { 
    role: "Software Engineer Intern", 
    company: "Elementrailer", 
    period: "Dec 2025 - Present", 
    desc: [
      "Build the MVP of Elementrailer's fleet-management dashboard using React and Next.js, creating a library of 10+ reusable components that accelerated UI development velocity.",
      "Establish a CI/CD pipeline via GitHub Actions and achieve 75% code coverage by implementing a robust suite of Jest and React Testing Library unit tests.",
      "Automate weekly investor metric generation (miles towed, kWh regen), reducing manual reporting time by 90%."
    ]
  },
  { 
    role: "Student Assistant", 
    company: "University of Washington Information Technology", 
    period: "Aug 2025 - Present", 
    desc: [
      "Engineer and deploy 3+ new features for an enterprise-level student application using C#, .NET Core, and JavaScript, improving functionality for over 50,000 students and staff.",
      "Increase application reliability by authoring unit and integration tests that improved code coverage by 15%.",
      "Streamline the software development lifecycle within an agile team, utilizing CI/CD pipelines to automate builds and reduce manual intervention by 20%."
    ]
  },
  { 
    role: "Peer Mentor", 
    company: "UW Robinson Center", 
    period: "Sep 2023 - Present", 
    desc: [
      "Provide dedicated peer academic and socio-emotional support to first-year early entrance students, easing their transition into university life.",
      "Conduct quarterly outreach and volunteer at key orientation events to foster a vibrant, welcoming community for new students."
    ]
  },
  { 
    role: "Coding Officer & Web Developer", 
    company: "Web Impact UW", 
    period: "Sep 2022 - Present", 
    desc: [
      "Lead a team of 5 developers on 8+ client projects, implementing agile workflows that decreased average project delivery time by 25%.",
      "Design and develop responsive websites for clients like SWECC and Bugis using React and Figma, driving a 30% increase in user engagement and achieving a 95% client satisfaction rate.",
      "Pioneer a technical workshop series training 30+ members in modern web development."
    ]
  },
  { 
    role: "AI & Software Research Intern", 
    company: "UW Radiology Department", 
    period: "Jun 2025 - Sept 2025", 
    desc: [
      "Engineered a foundational data extraction pipeline, streamlining the analysis of over 1,000 sensitive DICOM patient records for an AI-driven CT screening project.",
      "Automated the imaging series selection process using Python and pyDICOM, reducing manual data preparation time for AI researchers by over 80%.",
      "Co-authored a research abstract awarded Certificate of Merit at the RSNA 2025 Annual Meeting."
    ]
  },
  { 
    role: "Software Developer", 
    company: "Ignite Robotics", 
    period: "May 2025 - Aug 2025", 
    desc: [
      "Architected and deployed a full-stack digital waiver system using React, Node.js, and MongoDB, replacing paper-based workflows and reducing user check-in time by 40%.",
      "Designed a secure admin dashboard with real-time analytics to manage over 500+ weekly active users, ensuring GDPR compliance for sensitive data.",
      "Integrated RESTful APIs and optimized database schemas to handle high-volume data ingestion during peak event hours."
    ]
  }
];

export const education = [
  { 
    degree: "B.S. Computer Science & Data Science", 
    minor: "Minor in Business Administration",
    school: "University of Washington", 
    year: "Sept 2022 - June 2026", 
    details: "UW Academy (Robinson Center)"
  }
];