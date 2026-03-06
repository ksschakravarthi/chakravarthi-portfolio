import { useState } from 'react';
import GlassBreak from './GlassBreak';
import { useTheme } from '../context/ThemeContext';

// Generates a simple styled resume as a data URI (plain text / HTML blob)
function downloadResume(theme) {
  const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>Chakravarthi Kudupudi — Resume</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;600&family=JetBrains+Mono:wght@400;500&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#0A0A0A;color:#F0F0F0;font-family:'DM Sans',sans-serif;padding:40px;max-width:900px;margin:0 auto}
  h1{font-family:'Bebas Neue';font-size:72px;letter-spacing:4px;color:${theme.accent};line-height:1}
  .sub{font-family:'JetBrains Mono';font-size:11px;letter-spacing:3px;color:#666;margin-top:6px;margin-bottom:8px}
  .contact{display:flex;gap:20px;font-size:12px;color:#999;margin-bottom:32px;flex-wrap:wrap}
  .section-title{font-family:'Bebas Neue';font-size:28px;letter-spacing:3px;color:${theme.accent};margin:28px 0 10px;border-bottom:1px solid ${theme.accent}30;padding-bottom:4px}
  .exp-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px}
  .role{font-weight:600;font-size:15px;color:#F0F0F0}
  .company{font-family:'JetBrains Mono';font-size:11px;color:${theme.accent};margin:2px 0}
  .period{font-family:'JetBrains Mono';font-size:10px;color:#555}
  ul{margin:8px 0 0 16px;space-y:4px}
  li{font-size:13px;color:#999;margin-bottom:5px;line-height:1.5}
  .skills-grid{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
  .skill-tag{font-family:'JetBrains Mono';font-size:10px;border:1px solid ${theme.accent}40;color:${theme.accent};padding:4px 10px;letter-spacing:1px}
  .project{border:1px solid rgba(255,255,255,0.05);padding:16px;margin-bottom:12px;background:#111}
  .project-title{font-family:'Bebas Neue';font-size:22px;color:#F0F0F0;letter-spacing:2px}
  .project-sub{font-size:11px;color:#666;margin:2px 0 8px;font-family:'JetBrains Mono'}
  .edu-row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:13px}
  .edu-degree{color:#F0F0F0;font-weight:600}
  .edu-school{color:#888;font-size:12px;margin-top:2px}
  .edu-grade{font-family:'JetBrains Mono';font-size:11px;color:${theme.accent}}
</style>
</head>
<body>
<h1>KUDUPUDI SATYA<br/>SESHAGIRI CHAKRAVARTHI</h1>
<div class="sub">SOFTWARE ENGINEER · FRONTEND SPECIALIST</div>
<div class="contact">
  <span>📧 chakravarthikudupudi@gmail.com</span>
  <span>📞 +91 9490919750</span>
  <span>📍 Hyderabad, Telangana</span>
  <span>🐙 https://github.com/chakri-railtelit</span>
</div>

<div class="section-title">Professional Summary</div>
<p style="font-size:13px;color:#999;line-height:1.7;max-width:700px">
Software Engineer with 2+ years of professional experience in designing, developing, troubleshooting, and maintaining web applications using React.js, JavaScript, SQL, and RESTful APIs. Experienced in building data-driven and analytics-focused applications within healthcare and enterprise environments. Strong exposure to collaborative Agile development, distributed version control, and backend integration workflows.
</p>

<div class="section-title">Technical Skills</div>
<div class="skills-grid">
${['React.js','TypeScript','JavaScript (ES6+)','Node.js','Express.js','Python','PostgreSQL','MongoDB','REST API','Docker','Git/GitHub','Tailwind CSS','HTML5','CSS3','Postman','Agile/Scrum','Jest','D3.js','Redis','AWS Basics'].map(s=>`<span class="skill-tag">${s}</span>`).join('')}
</div>

<div class="section-title">Experience</div>
<div style="border:1px solid ${theme.accent}20;padding:20px;background:#111">
  <div class="exp-header">
    <div>
      <div class="role">Software Engineer (Frontend)</div>
      <div class="company">RailTel Corporation of India Limited</div>
    </div>
    <div class="period">APR 2024 – PRESENT<br/>HYDERABAD</div>
  </div>
  <ul>
    <li>Designed and developed scalable web applications focused on healthcare and enterprise analytics</li>
    <li>Implemented complex UI modules using React.js to present structured data in actionable visual formats</li>
    <li>Integrated RESTful APIs and transformed backend SQL data into user-friendly dashboards</li>
    <li>Debugged and resolved frontend and integration issues to maintain application stability</li>
    <li>Collaborated with backend developers for API contracts, SQL optimization, and data consistency</li>
    <li>Participated in Agile sprint planning, peer code reviews, and knowledge sharing sessions</li>
    <li>Used Git-based distributed version control for feature branching and release management</li>
    <li>Contributed to containerized deployment workflows and environment configuration</li>
  </ul>
</div>

<div class="section-title">Key Projects</div>

<div class="project">
  <div class="project-title">Hospital Information System (HIS)</div>
  <div class="project-sub">ENTERPRISE HEALTHCARE PLATFORM · RAILTEL</div>
  <ul>
    <li>Comprehensive web-based healthcare management system for patient data, appointments, billing, and reporting</li>
    <li>Built interactive dashboards extracting insights from structured SQL databases</li>
    <li>Integrated 20+ REST API endpoints for real-time data synchronization</li>
    <li>Implemented role-based authentication and secure access controls</li>
  </ul>
  <div class="skills-grid" style="margin-top:10px">
    ${['React.js','PostgreSQL','REST API','JWT Auth','Docker'].map(s=>`<span class="skill-tag">${s}</span>`).join('')}
  </div>
</div>

<div class="project">
  <div class="project-title">UMID — Unique Medical Identification</div>
  <div class="project-sub">INDIAN RAILWAYS · NATIONAL DEPLOYMENT</div>
  <ul>
    <li>Redevelopment of medical identity portal serving railway employees and pensioners nationwide</li>
    <li>Built responsive user interfaces and integrated backend services via REST APIs</li>
    <li>Assisted in SQL query validation and backend debugging</li>
  </ul>
</div>

<div class="project">
  <div class="project-title">RailTel ID Card Management System</div>
  <div class="project-sub">ENTERPRISE · ADMIN WORKFLOWS</div>
  <ul>
    <li>Dynamic form-based workflows for employee ID and visitor card management</li>
    <li>Multi-level approval dashboards with structured data visualization</li>
    <li>Integrated backend validation APIs and handled error states efficiently</li>
  </ul>
</div>

<div class="section-title">Education</div>
<div class="edu-row"><div><div class="edu-degree">B.E — Electronics &amp; Communication Engineering</div><div class="edu-school">Sathyabama University · 2023</div></div><div class="edu-grade">CGPA 7.4</div></div>
<div class="edu-row"><div><div class="edu-degree">Intermediate</div><div class="edu-school">Narayana Junior College, Vijayawada · 2019</div></div><div class="edu-grade">CGPA 6.4</div></div>
<div class="edu-row"><div><div class="edu-degree">SSC (10th)</div><div class="edu-school">CAMP School · 2017</div></div><div class="edu-grade">CGPA 9.3</div></div>
</body>
</html>`;

  const blob = new Blob([resumeHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Chakravarthi_Kudupudi_Resume.html';
  a.click();
  URL.revokeObjectURL(url);
}

export default function ResumeDownloadBtn({ className = '' }) {
  const { theme } = useTheme();
  const [breaking, setBreaking] = useState(false);
  const [text, setText] = useState('DOWNLOAD RESUME');

  const handleClick = () => {
    setBreaking(true);
    setText('SHATTERING...');
  };

  const handleDone = () => {
    setBreaking(false);
    setText('✓ DOWNLOADED!');
    downloadResume(theme);
    setTimeout(() => setText('DOWNLOAD RESUME'), 3000);
  };

  return (
    <>
      {breaking && <GlassBreak onDone={handleDone} />}
      <button
        onClick={handleClick}
        disabled={breaking}
        className={`group relative overflow-hidden flex items-center gap-3 font-body font-semibold tracking-widest text-sm transition-all ${className}`}
        style={{
          border: `1px solid ${theme.accent}`,
          color: theme.bg,
          background: theme.accent,
          padding: '14px 28px',
          boxShadow: `0 0 30px ${theme.accent}40`,
        }}
      >
        {/* Hover wipe */}
        <div
          className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300"
          style={{ background: theme.text }}
        />
        {/* Download icon */}
        <svg className="relative z-10 w-4 h-4 shrink-0 group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 3v13M6 11l6 6 6-6M3 21h18" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="relative z-10">{text}</span>

        {/* Glitch lines on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
          {[20, 45, 70].map((top) => (
            <div
              key={top}
              className="absolute h-px w-full animate-pulse"
              style={{ top: `${top}%`, background: `${theme.bg}30` }}
            />
          ))}
        </div>
      </button>
    </>
  );
}
