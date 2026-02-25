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
    color: "from-teal-400 to-emerald-500", 
    link: "https://github.com/SamriddhiS2/Microcellular-Foam-Analysis" 
  },
  { 
    id: 'husky-butterwalk', 
    title: "Husky Butterwalk", 
    desc: "Nighttime campus ride safety application for university students.", 
    details: "Contributed as a software developer to a mobile app designed to enhance nighttime safety. Developed features for GPS tracking, live wait time estimates, and ride progress monitoring to empower students to make informed decisions.", 
    tech: ["React Native", "TypeScript", "Mobile Dev"], 
    type: "Mobile Application", 
    color: "from-emerald-400 to-teal-600", 
    link: "https://github.com/KatharineZhang/ButterWalk" 
  },
  { 
    id: 'seeql', 
    title: "SeeQL", 
    desc: "VS Code extension enhancing SQL query execution and visualization.", 
    details: "Developed a VS Code extension enabling users to visualize CREATE table SQL statements via ER diagrams and relational algebra, execute SQL queries for cloud/local databases, and generate SQL queries using AI.", 
    tech: ["TypeScript", "SQLite", "VS Code API"], 
    type: "Tooling", 
    color: "from-teal-500 to-emerald-700", 
    link: "https://github.com/Taipods/SeeQL" 
  }
];

export const experience = [
  { 
    role: "Software Engineer Intern", 
    company: "Elementrailer", 
    period: "Dec 2025 - Present", 
    desc: [
      "Contribute to the first version of Elementrailer's fleet-management dashboard, developing over 10 reusable front-end components using React and Next.js.",
      "Design and implement a lightweight data-ingestion API with 5 core endpoints (e.g., for telematics logs) and defined the corresponding PostgreSQL database schema.",
      "Develop 4+ real-time data visualizations (speed, regen energy, alerts) using Recharts to display mock telematics data for the MVP demo.",
      "Establish an initial CI/CD pipeline using GitHub Actions for the front-end repository and write Jest/React Testing Library unit tests to increase test coverage.",
      "Assist in automating the generation of 3 key weekly investor metrics (miles towed, kWh regen) by writing Node.js/Python scripts to query the database.",
      "Collaborate in daily stand-ups and 2 design sprints with the engineering team, translating Figma mockups into functional UI/UX improvements."
    ]
  },
  { 
    role: "Student Assistant - App Dev", 
    company: "University of Washington Information Technology", 
    period: "Aug 2025 - Present", 
    desc: [
      "Engineer custom software solutions utilizing C# .NET, .NET Core, and ASP.NET Core, alongside web technologies including HTML5, AJAX, JavaScript, jQuery, Json, and CSS.",
      "Contribute to the full software development lifecycle: analyzed requirements, designed, developed, integrated, tested, debugged, and deployed applications.",
      "Document, test, and merge code, employing unit and integration test frameworks and adhering to software development best practices and architectural principles.",
      "Apply Continuous Integration/Continuous Deployment (CI/CD) pipelines and other operational practices in a real-world environment.",
      "Collaborate effectively within a team setting, actively participating in daily stand-ups and peer code reviews, while also demonstrating strong independent work and clear communication.",
      "Gain practical experience in enterprise-class infrastructure and received mentorship from seasoned professionals, enhancing skills in developing secure, scalable, and user-friendly applications."
    ]
  },
  { 
    role: "Coding Officer & Web Developer", 
    company: "Web Impact UW", 
    period: "Sep 2022 - Present", 
    desc: [
      "Spearhead a team of 8 developers on 5+ client projects, implementing agile workflows and peer code reviews that decreased average project delivery time by 25%.",
      "Develop and lead a technical workshop curriculum on Next.js and modern web standards, boosting member skill acquisition and increasing average event attendance by over 40%.",
      "Collaborate with a 9-person executive board in weekly meetings to define technical strategy and project roadmaps, directly contributing to a 15% growth in club membership.",
      "Engineered and launched responsive website for 3+ clients (SWECC, Bugis restaurant, ISACA) using HTML/CSS, React.js, and Figma, increasing client web traffic by an average of 30%.",
      "Translated complex UI/UX wireframes into pixel-perfect interfaces and streamlined deployment, eliminating 100% of monthly hosting costs for club-managed sites."
    ]
  },
  { 
    role: "AI & Software Research Intern", 
    company: "UW Radiology Department", 
    period: "Jun 2025 - Sept 2025", 
    desc: [
      "Collaborate directly with radiologists and research scientists to engineer an automated data extraction pipeline for an AI-driven opportunistic CT screening project, building the foundational infrastructure for large-scale clinical analysis.",
      "Co-author a research abstract, \"Transforming Patient Care: Radiologist-Driven Consultations with Opportunistic CT Screening,\" that was accepted for presentation at the Radiological Society of North America (RSNA) 2025 Annual Meeting.",
      "Automate the imaging series selection process using Python and pyDICOM, reducing manual data preparation time for AI researchers by over 80%.",
      "Develop and implement scripts to streamline the export and analysis of medical imaging data between clinical viewers, including Visage and Horos."
    ]
  },
  { 
    role: "Software Developer", 
    company: "Ignite Robotics", 
    period: "May 2025 - Aug 2025", 
    desc: [
      "Architected and deployed a full-stack digital waiver system using React.js, Express.js, and SQL Server, automating the organization's onboarding process and replacing a manual, paper-based workflow.",
      "Engineered a secure backend API that generates, cryptographically hashes, and stores legal documents as PDFs, and sends automated confirmation emails with Nodemailer and pdf-lib.",
      "Developed an interactive frontend featuring a multi-step user flow, a custom HTML canvas signature pad, and robust form validation to ensure a seamless and compliant user experience.",
      "Resolved complex frontend bugs related to state management and component re-rendering, and fixed backend TypeScript errors to create a stable and reliable production-ready application."
    ]
  },
  { 
    role: "Peer Mentor", 
    company: "UW Robinson Center For Young Scholars", 
    period: "Sep 2023 - Present", 
    desc: [
      "Provide dedicated peer academic and socio-emotional support to first-year EEPers and Acads, helping ease their transition into university life.",
      "Conduct quarterly outreach to assigned mentees, ensuring consistent connection and offering guidance tailored to their preferred communication methods.",
      "Participate in formal training sessions and collaborated closely with the lead academic adviser to align mentorship strategies with RC goals.",
      "Volunteer at key RC events, including Bridge Orientation and the RC Mentor Kickoff, to foster a vibrant, welcoming community for new students."
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