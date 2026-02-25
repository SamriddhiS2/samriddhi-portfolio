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
}

export const themes: Record<ThemeMode, Theme> = {
  dark: {
    bg: "bg-slate-900", bgSoft: "bg-slate-800", text: "text-slate-50", textMuted: "text-slate-400", border: "border-slate-700",
    accentPrimary: "text-teal-400", accentSecondary: "text-emerald-400", borderColor: "border-teal-500", fillAccent: "bg-teal-500",
    buttonPrimary: "bg-teal-600 text-white hover:bg-teal-500", buttonSecondary: "bg-slate-800 text-slate-200 hover:bg-slate-700",
    gradient: "from-teal-400 to-emerald-500", cardBg: "bg-slate-800/80 backdrop-blur-md", lineColor: "bg-slate-600",
    navText: "text-slate-300", separator: "bg-slate-500", cursorColor: "bg-teal-400",
    homeIconColor: "text-emerald-200", homeIconBg: "bg-emerald-500/20"
  },
  light: {
    bg: "bg-slate-50", bgSoft: "bg-white", text: "text-slate-900", textMuted: "text-slate-600", border: "border-slate-300",
    accentPrimary: "text-emerald-600", accentSecondary: "text-green-600", borderColor: "border-emerald-500", fillAccent: "bg-emerald-600",
    buttonPrimary: "bg-emerald-600 text-white hover:bg-emerald-700", buttonSecondary: "bg-white text-slate-700 hover:bg-slate-100",
    gradient: "from-emerald-500 to-green-600", cardBg: "bg-white/80 backdrop-blur-md", lineColor: "bg-slate-300",
    navText: "text-slate-700", separator: "bg-slate-300", cursorColor: "bg-emerald-600",
    homeIconColor: "text-emerald-800", homeIconBg: "bg-emerald-100"
  }
};

export const projects = [
  { id: 'urban-pulse', title: "The Urban Pulse", desc: "Analyzing city traffic patterns using 5TB of sensor data.", details: "A comprehensive data analysis project processing over 5TB of IoT sensor data from metropolitan traffic systems. Utilized Python and Pandas for cleaning, and D3.js for visualizing congestion heatmaps in real-time. Reduced prediction latency by 40%.", tech: ["Python", "Pandas", "D3.js"], type: "Data Science", color: "from-emerald-400 to-green-500", link: "https://github.com/samriddhi/urban-pulse" },
  { id: 'neuronet', title: "NeuroNet", desc: "CNN for detecting early-stage radiology anomalies.", details: "Developed a Convolutional Neural Network architecture achieving 94% accuracy in detecting early-stage anomalies in X-ray scans. Implemented using PyTorch and TensorFlow, with a React frontend for radiologists to upload and view inference results.", tech: ["PyTorch", "TensorFlow"], type: "Machine Learning", color: "from-emerald-500 to-green-600", link: "https://github.com/samriddhi/neuronet" },
  { id: 'ecoparser', title: "EcoParser", desc: "Real-time dashboard for environmental monitoring sensors.", details: "Full-stack IoT dashboard for monitoring air quality index (AQI) sensors. Built with Node.js MQTT broker to handle high-throughput sensor streams and a Next.js frontend for real-time visualization. Deployed on AWS.", tech: ["React", "Node.js", "AWS"], type: "Full Stack", color: "from-green-400 to-emerald-600", link: "https://github.com/samriddhi/ecoparser" }
];

export const experience = [
  { role: "Software Engineering Intern", company: "TechGiant Corp", period: "May 2024 - Aug 2024", desc: "Optimized data ingestion pipelines using Go, reducing latency by 30%. Collaborated with cross-functional teams to deploy microservices on Kubernetes." },
  { role: "Data Science Research Assistant", company: "University Lab", period: "Jan 2023 - Present", desc: "Conducting research on computer vision transformers for medical imaging. Published findings in undergraduate research symposium." }
];

export const education = [
  { degree: "B.S. Computer Science", school: "University of Technology", year: "Expected 2026", details: "Focus in AI/ML and Systems. GPA: 3.9/4.0" }
];