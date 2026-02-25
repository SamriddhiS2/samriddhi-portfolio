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
  { id: 'urban-pulse', title: "The Urban Pulse", desc: "Analyzing city traffic patterns using 5TB of sensor data.", details: "A comprehensive data analysis project processing over 5TB of IoT sensor data from metropolitan traffic systems. Utilized Python and Pandas for cleaning, and D3.js for visualizing congestion heatmaps in real-time. Reduced prediction latency by 40%.", tech: ["Python", "Pandas", "D3.js"], type: "Data Science", color: "from-teal-400 to-emerald-500", link: "https://github.com/SamriddhiS2" },
  { id: 'neuronet', title: "NeuroNet", desc: "CNN for detecting early-stage radiology anomalies.", details: "Developed a Convolutional Neural Network architecture achieving 94% accuracy in detecting early-stage anomalies in X-ray scans. Implemented using PyTorch and TensorFlow, with a React frontend for radiologists to upload and view inference results.", tech: ["PyTorch", "TensorFlow"], type: "Machine Learning", color: "from-emerald-400 to-teal-600", link: "https://github.com/SamriddhiS2" },
  { id: 'ecoparser', title: "EcoParser", desc: "Real-time dashboard for environmental monitoring sensors.", details: "Full-stack IoT dashboard for monitoring air quality index (AQI) sensors. Built with Node.js MQTT broker to handle high-throughput sensor streams and a Next.js frontend for real-time visualization. Deployed on AWS.", tech: ["React", "Node.js", "AWS"], type: "Full Stack", color: "from-teal-500 to-emerald-700", link: "https://github.com/SamriddhiS2" }
];

export const experience = [
  { 
    role: "Software Engineer Intern", 
    company: "Elementrailer", 
    period: "Dec 2025 - Present", 
    desc: "Built the MVP of a fleet-management dashboard using React and Next.js. Established a CI/CD pipeline via GitHub Actions and achieved 75% code coverage with Jest, reducing deployment lead time by 60%." 
  },
  { 
    role: "AI & Software Research Intern", 
    company: "UW Radiology Department", 
    period: "Jun 2025 - Sept 2025", 
    desc: "Automated the imaging series selection process for a clinical study using Python and pyDICOM, reducing manual data preparation time by over 80%. Co-authored an award-winning RSNA 2025 research abstract." 
  },
  { 
    role: "Software Developer", 
    company: "Ignite Robotics", 
    period: "May 2025 - Aug 2025", 
    desc: "Architected a full-stack digital waiver system using React, Node.js, and MongoDB. Designed a secure admin dashboard with real-time analytics to manage 500+ weekly active users." 
  }
];

export const education = [
  { 
    degree: "B.S. Computer Science & Data Science", 
    school: "University of Washington", 
    year: "Sept 2022 - June 2026", 
    details: "UW Academy (Robinson Center). Awards: Dean's List, Opportunity Scholar of Cohort 12." 
  }
];