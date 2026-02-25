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
    desc: "Developing 10+ reusable React/Next.js components for a fleet-management dashboard MVP. Designed a data-ingestion API, built real-time telematics visualizations, and established CI/CD pipelines achieving 75% test coverage." 
  },
  { 
    role: "Student Assistant", 
    company: "UW Information Technology", 
    period: "Aug 2025 - Present", 
    desc: "Engineering custom enterprise software solutions utilizing C# .NET, ASP.NET Core, and JavaScript. Contributing to the full software development lifecycle and applying CI/CD pipelines in a real-world enterprise environment." 
  },
  { 
    role: "Coding Officer & Web Developer", 
    company: "Web Impact UW", 
    period: "Sep 2022 - Present", 
    desc: "Spearheading a team of 8 developers on agile client projects. Engineered and launched responsive websites for 3+ clients using React.js and Figma, increasing client web traffic by an average of 30%." 
  },
  { 
    role: "AI & Software Research Intern", 
    company: "UW Radiology Department", 
    period: "Jun 2025 - Sept 2025", 
    desc: "Collaborated with radiologists to engineer an automated data extraction pipeline for an AI-driven CT screening project. Automated imaging series selection using Python and pyDICOM, reducing manual preparation time by over 80%." 
  },
  { 
    role: "Software Developer", 
    company: "Ignite Robotics", 
    period: "May 2025 - Aug 2025", 
    desc: "Architected a full-stack digital waiver system using React.js, Express.js, and SQL Server. Engineered a secure backend API that generates, cryptographically hashes, and stores legal documents as PDFs." 
  },
  { 
    role: "Peer Mentor", 
    company: "UW Robinson Center", 
    period: "Sep 2023 - Present", 
    desc: "Providing dedicated peer academic and socio-emotional support to first-year early entrance students, aiding their transition into university life through consistent quarterly outreach and orientation events." 
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