import { jsPDF } from 'jspdf';

export interface CvItem {
  title?: string;
  institution?: string;
  period?: string;
  details?: string[];
  description?: string;
  link?: string;
}

export interface CvSection {
  title: string;
  items?: CvItem[];
  paragraphs?: string[];
  bulletPoints?: string[];
}

export const cvData = {
  name: 'Eyerusalem Habte',
  title: 'Frontend Developer | Mobile App Developer',
  subtitle: '4th Year Information Systems Student at Addis Ababa University',
  personalInfo: [
    'Addis Ababa, Ethiopia',
    'ehabte936@gmail.com',
    'github.com/K-I-D-A-N'
  ],
  summary:
    'Passionate 4th-year Information Systems student at Addis Ababa University specializing in frontend web development and cross-platform mobile app development. I enjoy building modern, user-centric digital experiences with React, React Native, and clean UI/UX principles that solve practical problems for users and organizations.',
  skills: [
    'React',
    'React Native',
    'JavaScript',
    'HTML/CSS',
    'TypeScript',
    'Java',
    'C++',
    'C#',
    'PHP',
    'Django',
    'PostgreSQL',
    'UI/UX Design'
  ],
  education: [
    {
      title: 'BSc in Information Systems',
      institution: 'Addis Ababa University',
      period: '2022 - Present (4th Year)'
    }
  ],
  experience: [
    {
      title: 'Student Developer & Team Project Contributor',
      institution: 'Academic and Independent Projects',
      period: '2023 - Present',
      details: [
        'Collaborated with peers on web and mobile app development projects focused on usability and practical functionality.',
        'Contributed to app architecture, UI implementation, user flows, and project presentation for academic and portfolio-based work.'
      ]
    }
  ],
  projects: [
    {
      title: 'FAMBETRENT Mobile Application',
      institution: 'Rental Platform App',
      period: 'React Native',
      description:
        'Developed as a collaborative team project to connect landlords and tenants in Ethiopia. Implemented booking flows, property discovery features, and property management capabilities for a seamless rental experience.'
    },
    {
      title: 'EduFun Kids Learning Zone',
      institution: 'Interactive Educational Platform',
      period: 'Web Development',
      description:
        'Designed an engaging learning platform for children aged 3–8 years with adaptive mini-games, colorful content, and educational activities tailored to Ethiopian cultural themes.'
    },
    {
      title: 'Dormitory Management System (DHMS)',
      institution: 'AAU Dormitory Portal',
      period: 'Full-Stack / Web',
      description:
        'Built a team-based dormitory operations platform featuring room allocation, maintenance requests, laundry tracking, and administrative workflows to streamline student housing management.'
    }
  ],
  achievements: [
    'Built and presented multiple portfolio and academic web/mobile applications.',
    'Strong foundation in object-oriented programming and modern software design practices.',
    'Focused on crafting polished user experiences and writing maintainable front-end code.'
  ],
  languages: ['English', 'Amharic'],
  contact: [
    'Email: ehabte936@gmail.com',
    'Location: Addis Ababa, Ethiopia',
    'GitHub: github.com/K-I-D-A-N'
  ]
};

function addSectionTitle(doc: jsPDF, title: string, x: number, y: number) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(16, 44, 83);
  doc.text(title, x, y);
  doc.setDrawColor(25, 92, 166);
  doc.setLineWidth(0.6);
  doc.line(x, y + 4, x + 70, y + 4);
}

function addTextBlock(doc: jsPDF, text: string, x: number, y: number, width: number, fontSize = 8.8, color = 70) {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(fontSize);
  doc.setTextColor(color, color, color);
  const splitText = doc.splitTextToSize(text, width);
  doc.text(splitText, x, y);
  return y + splitText.length * (fontSize + 1.1);
}

function addBulletList(doc: jsPDF, items: string[], x: number, y: number, width: number) {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(70, 70, 70);
  const lines: string[] = [];
  items.forEach((item) => {
    lines.push(`• ${item}`);
  });
  const text = lines.join('\n');
  const splitText = doc.splitTextToSize(text, width);
  doc.text(splitText, x, y);
  return y + splitText.length * 10.5;
}

function addSkillBadge(doc: jsPDF, text: string, x: number, y: number) {
  const width = doc.getTextWidth(text) + 16;
  doc.setFillColor(240, 247, 255);
  doc.setDrawColor(25, 92, 166);
  doc.setLineWidth(0.35);
  doc.roundedRect(x, y - 8.5, width, 12, 3, 3, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(25, 92, 166);
  doc.text(text, x + 8, y);
}

export function downloadCvPdf() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 36;
  const leftX = margin;
  const rightX = 300;
  const leftWidth = 220;
  const rightWidth = 220;

  doc.setFillColor(9, 27, 54);
  doc.rect(0, 0, pageWidth, 110, 'F');
  doc.setDrawColor(25, 92, 166);
  doc.setLineWidth(0.8);
  doc.line(margin, 106, pageWidth - margin, 106);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text(cvData.name, leftX, 48);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(202, 220, 240);
  doc.text(cvData.title, leftX, 69);

  doc.setFontSize(9.2);
  doc.setTextColor(222, 233, 244);
  doc.text(cvData.subtitle, leftX, 86);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(241, 248, 255);
  const contactY = 58;
  doc.text(`Email: ${cvData.personalInfo[1]}`, rightX, contactY);
  doc.text(`Location: ${cvData.personalInfo[0]}`, rightX, contactY + 14);
  doc.text(`GitHub: ${cvData.personalInfo[2]}`, rightX, contactY + 28);

  let topY = 132;
  addSectionTitle(doc, 'Professional Summary', leftX, topY);
  topY += 16;
  topY = addTextBlock(doc, cvData.summary, leftX, topY, pageWidth - margin * 2 - 4, 8.8, 70);

  let leftY = topY + 12;
  let rightY = topY + 12;

  addSectionTitle(doc, 'Technical Skills', leftX, leftY);
  leftY += 16;
  const skillItems = cvData.skills;
  let skillX = leftX;
  let skillY = leftY;
  skillItems.forEach((skill, index) => {
    const chipWidth = doc.getTextWidth(skill) + 16;
    if (skillX + chipWidth > leftX + leftWidth) {
      skillX = leftX;
      skillY += 16;
    }
    addSkillBadge(doc, skill, skillX, skillY);
    skillX += chipWidth + 8;
    if (index === skillItems.length - 1) {
      leftY = skillY + 14;
    }
  });

  leftY += 8;
  addSectionTitle(doc, 'Education', leftX, leftY);
  leftY += 16;
  cvData.education.forEach((item) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(18, 44, 83);
    doc.text(item.title, leftX, leftY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.4);
    doc.setTextColor(25, 92, 166);
    doc.text(item.institution, leftX, leftY + 12);
    doc.setTextColor(95, 95, 95);
    doc.text(item.period, leftX, leftY + 24);
    leftY += 36;
  });

  leftY += 4;
  addSectionTitle(doc, 'Languages', leftX, leftY);
  leftY += 14;
  addBulletList(doc, cvData.languages, leftX, leftY, leftWidth - 10);

  addSectionTitle(doc, 'Experience', rightX, rightY);
  rightY += 16;
  cvData.experience.forEach((item) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(18, 44, 83);
    doc.text(item.title, rightX, rightY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.4);
    doc.setTextColor(25, 92, 166);
    doc.text(item.institution, rightX, rightY + 12);
    doc.setTextColor(95, 95, 95);
    doc.text(item.period, rightX, rightY + 24);
    doc.setTextColor(70, 70, 70);
    const detailText = item.details?.join(' ');
    const wrapped = doc.splitTextToSize(detailText ?? '', rightWidth - 2);
    doc.text(wrapped, rightX + 8, rightY + 36);
    rightY += 54 + wrapped.length * 8;
  });

  rightY += 4;
  addSectionTitle(doc, 'Projects', rightX, rightY);
  rightY += 16;
  cvData.projects.forEach((item) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(18, 44, 83);
    doc.text(item.title, rightX, rightY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(25, 92, 166);
    doc.text(`${item.institution} • ${item.period}`, rightX, rightY + 11);
    doc.setTextColor(70, 70, 70);
    const wrapped = doc.splitTextToSize(item.description, rightWidth - 2);
    doc.text(wrapped, rightX + 6, rightY + 24);
    rightY += 36 + wrapped.length * 8;
  });

  rightY += 4;
  addSectionTitle(doc, 'Achievements', rightX, rightY);
  rightY += 14;
  addBulletList(doc, cvData.achievements, rightX, rightY, rightWidth - 10);

  doc.setDrawColor(218, 225, 235);
  doc.setLineWidth(0.4);
  doc.line(leftX, 126, pageWidth - margin, 126);
  doc.line(leftX + leftWidth + 18, 126, leftX + leftWidth + 18, pageHeight - 36);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.6);
  doc.setTextColor(112, 130, 150);
  doc.text('Professional, ATS-friendly one-page resume generated for internship and software engineering applications.', margin, pageHeight - 24);

  doc.save('Eyerusalem_Habte_CV.pdf');
}
