import {
  BookOpenText,
  BriefcaseBusiness,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export const siteName = "EduHub42";
export const siteDescription =
  "EduHub42 is an Education Development Enterprise providing academic support, education access assistance and career readiness services for learners and students.";

export type Pillar = {
  id: string;
  name: string;
  category: string;
  description: string;
  services: string[];
  icon: LucideIcon;
};

export const pillars: Pillar[] = [
  {
    id: "learn",
    name: "EduHub Learn",
    category: "Academic Development",
    description: "Supporting learners throughout their academic journey.",
    services: [
      "Private tutoring",
      "Group learning sessions",
      "Online tutoring",
      "Educational resources",
      "Digital Study Vault",
      "TOEFL and English language instruction",
      "Primary through tertiary support",
    ],
    icon: BookOpenText,
  },
  {
    id: "enroll",
    name: "EduHub Enroll",
    category: "Education Access & Admissions",
    description: "Helping learners access opportunities and navigate applications.",
    services: [
      "School applications",
      "University applications",
      "College admissions",
      "Bursary applications",
      "Scholarship applications",
      "International student assistance",
      "Student administrative support",
    ],
    icon: GraduationCap,
  },
  {
    id: "workforce",
    name: "EduHub Workforce",
    category: "Employability & Career Readiness",
    description: "Preparing learners and students for the world of work.",
    services: [
      "Career readiness coaching",
      "CV and interview preparation",
      "Workplace skills development",
      "Career guidance and mentorship",
    ],
    icon: BriefcaseBusiness,
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  body: { heading: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "build-a-study-routine",
    title: "5 Ways to Build a Study Routine That Actually Works",
    excerpt: "A realistic framework for building consistent study habits around your goals and daily life.",
    category: "Study Skills",
    author: "EduHub Learn",
    date: "12 September 2026",
    readTime: "5 min read",
    body: [
      { heading: "Start with your real week", paragraphs: ["A useful study plan works with your timetable, energy and responsibilities. Map your fixed commitments first, then choose a few repeatable study windows."] },
      { heading: "Make the next step obvious", paragraphs: ["Replace broad tasks such as ‘study maths’ with a clear action: review one concept, complete five problems, and note one question to ask."] },
      { heading: "Review and adjust", paragraphs: ["At the end of each week, keep what worked and simplify what did not. Consistency grows from a routine you can sustain, not a perfect schedule."] },
    ],
  },
  {
    slug: "university-application-timeline",
    title: "Understanding the University Application Timeline",
    excerpt: "Plan the key research, document and submission stages without leaving important steps too late.",
    category: "Education Guidance",
    author: "EduHub Enroll",
    date: "8 September 2026",
    readTime: "6 min read",
    body: [
      { heading: "Research before applications open", paragraphs: ["Compare entry requirements, programme structures, costs and locations. Create a balanced shortlist that includes more than one pathway."] },
      { heading: "Prepare your documents", paragraphs: ["Gather certified records, identification and supporting documents early. Check each institution’s requirements rather than assuming they are the same."] },
      { heading: "Track every application", paragraphs: ["Record reference numbers, deadlines and follow-up requests in one place. Continue checking official portals after submission."] },
    ],
  },
  {
    slug: "standout-bursary-motivation-letter",
    title: "How to Write a Standout Bursary Motivation Letter",
    excerpt: "Build a clear, credible motivation that connects your goals, circumstances and potential.",
    category: "Applications & Admissions",
    author: "EduHub Enroll",
    date: "2 September 2026",
    readTime: "7 min read",
    body: [
      { heading: "Lead with purpose", paragraphs: ["Explain what you intend to study and why it matters to you. Specific goals are more compelling than general statements about success."] },
      { heading: "Show evidence", paragraphs: ["Use concise examples of commitment, progress, responsibility or service. Let the reader see how you act on your ambitions."] },
      { heading: "Connect support to impact", paragraphs: ["Explain how the bursary would remove a barrier and what you intend to contribute through your education and career."] },
    ],
  },
  {
    slug: "first-job-interview",
    title: "Preparing for Your First Job Interview",
    excerpt: "A calm, practical approach to researching, practising and showing your potential.",
    category: "Career Readiness",
    author: "EduHub Workforce",
    date: "27 August 2026",
    readTime: "5 min read",
    body: [
      { heading: "Understand the opportunity", paragraphs: ["Read the role description closely and research the organisation. Identify the skills and qualities they are likely to explore."] },
      { heading: "Prepare short examples", paragraphs: ["Examples from school, volunteering, sport or community work can demonstrate teamwork, reliability and problem-solving."] },
      { heading: "Practise with purpose", paragraphs: ["Say your answers aloud, prepare thoughtful questions and plan the practical details. Preparation helps you be present rather than perfect."] },
    ],
  },
  {
    slug: "choosing-the-right-subjects",
    title: "Choosing Subjects with Your Future in Mind",
    excerpt: "Balance your strengths, interests and entry requirements when making important subject choices.",
    category: "Learner Development",
    author: "EduHub42 Team",
    date: "19 August 2026",
    readTime: "6 min read",
    body: [
      { heading: "Keep pathways open", paragraphs: ["Explore the entry requirements for several fields you may enjoy. Some programmes require specific subjects or achievement levels."] },
      { heading: "Know how you learn", paragraphs: ["Your interests and strengths matter. Discuss your choices with teachers, mentors and people who understand the options available."] },
      { heading: "Make an informed decision", paragraphs: ["A subject choice is an important step, not a permanent definition of your future. Gather reliable information and decide with intention."] },
    ],
  },
  {
    slug: "online-tutoring-success",
    title: "Making Online Tutoring Work for You",
    excerpt: "Simple ways to prepare your space, questions and materials for focused online learning.",
    category: "Tutoring",
    author: "EduHub Learn",
    date: "11 August 2026",
    readTime: "4 min read",
    body: [
      { heading: "Prepare before the session", paragraphs: ["Have your notes, textbook and recent work ready. Send difficult questions in advance when possible so the session can begin with focus."] },
      { heading: "Participate actively", paragraphs: ["Ask questions, explain your thinking and attempt problems during the session. Active learning helps your tutor identify where support is needed."] },
      { heading: "Use the follow-through", paragraphs: ["Summarise what you learned and complete a short practice task soon afterwards. Progress comes from what happens between sessions too."] },
    ],
  },
];
