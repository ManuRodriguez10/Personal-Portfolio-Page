import type { Project } from "@/components/project-card"

export const profile = {
  fullName: "Manuel Rodriguez",
  title: "Senior Computer Science Student",
  tagline: "Expected Grad Date: May 2026",
  shortBio: "Senior computer science student at New College of Florida with a strong interest in frontend development and UI/UX.",
  longBio: "I'm a senior computer science student at New College of Florida with a strong interest in frontend development and UI/UX. I enjoy building modern, clean web experiences with smooth animations and thoughtful architecture behind them. I care deeply about creating interfaces that feel intuitive and polished, because a clean, seamless UI can be the difference between a product users trust and one they leave behind. As I prepare to graduate, I'm focused on continuing to refine my skills and contributing to teams that value both strong engineering and great user experience.",
  email: "m.rodriguez25@ncf.edu",
  githubUrl: "https://github.com/ManuRodriguez10",
  linkedinUrl: "https://www.linkedin.com/in/manuel-rodriguez-a783b9235/",
  phone: "518-606-4235",
  address: "5800 Bay Shore Road, Sarasota, FL 34243",
  experienceLevel: "Entry level",
}

export const projects: Project[] = [
  {
    id: "matchfit",
    title: "MatchFit",
    description: "Built a full-stack soccer team management web app using React and Supabase with role-based authentication and multi-stage onboarding for coaches and players. Implemented team creation and invite-code onboarding, enabling players to join teams and complete profile setup with positions and jersey numbers. Developed real-time, role-specific dashboards displaying team stats, upcoming events, published lineups, and roster counts. Built an interactive lineup builder with multiple formations and drag-and-drop player positioning on a visual soccer field. Ensured secure, role-based data access with Supabase Row-Level Security, and delivered a modern, accessible UI using Tailwind CSS, Radix UI, Framer Motion, and robust form validation.",
    tech: ["React", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS", "Radix UI"],
    githubUrl: "https://github.com/ManuRodriguez10/Match-Fit",
    liveUrl: "#",
    featured: true,
    timeline: "4 months (Ongoing)",
    role: "Senior Thesis",
    type: "Web Application",
    images: [
      "/assets/matchfit-3.png",
      "/assets/matchfit-1.png",
      "/assets/matchfit-2.png",
      "/assets/matchfit-4.png",
      "/assets/matchfit-5.png",
      "/assets/matchfit-6.png",
      "/assets/matchfit-7.png",
      "/assets/matchfit-8.png",
    ],
  },
  {
    id: "vibing-sarasota",
    title: "Vibing Sarasota",
    description: "A web application using React and Supabase to showcase local businesses and attractions in Sarasota, Florida. Implemented category-based browsing (Beaches, Food & Dining, Hotels, Golf Spots, Shopping, Exercise Spots) and search to help users discover local spots. Built dynamic interfaces with React and Tailwind CSS, enabling users to browse curated listings, view business details with images and descriptions and access to Google Maps links. Integrated React Query for efficient data fetching and caching. Used Supabase's PostgreSQL backend to store and manage user-submitted suggestions, including a \"Suggest a Spot\" form with validation and submission handling.",
    tech: ["React", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS", "React Query"],
    githubUrl: "https://github.com/ManuRodriguez10/Vibing-Sarasota-Final-Project",
    liveUrl: "https://drive.google.com/file/d/11WH6XNOIUXJgIAJdsSKorfKPxi7lprgP/view?usp=sharing",
    featured: true,
    timeline: "1 month",
    role: "Web Programming Class Final Project",
    type: "Web Application",
    images: [
      "/assets/vibing-sarasota-1.png",
      "/assets/vibing-sarasota-2.png",
      "/assets/vibing-sarasota-3.png",
      "/assets/vibing-sarasota-4.png",
    ],
  },
  {
    id: "scent-society",
    title: "Scent Society",
    description: "Built a full-stack e-commerce web application for browsing and purchasing premium colognes using React and Django. Implemented gender-based product categories (Men's and Women's collections) with scent type filtering (Fresh, Citrus, Night, Spicy, Sweet, Floral, Romantic) to help users discover fragrances that match their preferences. Developed dynamic product interfaces with React and Tailwind CSS, featuring interactive image carousels for product details, realtime shopping cart management, and a multi-step checkout process with promo code validation. Implemented protected routes using React Router to secure authenticated user features like cart access and order placement. Built a secure Django REST API backend with JWT token-based authentication, email verification system for new user registration, and PostgreSQL-backed data models to manage users, product catalogs, and shopping cart persistence. Designed separate cart systems for men's and women's products with full CRUD operations for cart item management.",
    tech: ["React", "Vite", "Django", "Tailwind CSS", "PostgreSQL", "JWT", "React Router"],
    githubUrl: "https://github.com/ManuRodriguez10/ScentSociety",
    liveUrl: "https://drive.google.com/file/d/1CIx19fcEBGbidB1hA7cRK08KOsN6YJ-Q/view?usp=drive_link",
    featured: true,
    timeline: "1 month",
    role: "Software Engineering Class Final Project",
    type: "Web Application",
    images: [
      "/assets/scent-society-1.png",
      "/assets/scent-society-2.png",
      "/assets/scent-society-3.png",
      "/assets/scent-society-4.png",
      "/assets/scent-society-5.png",
      "/assets/scent-society-6.png",
      "/assets/scent-society-7.png",
      "/assets/scent-society-8.png",
    ],
  },
  {
    id: "banyan-board",
    title: "Banyan Board",
    description: "A user-friendly interface using HTML to provide real-time updates on campus events, homework deadlines, and other academic activities, enhancing student engagement and daily planning efficiency. Developed key features including a comprehensive to-do list, interactive pop-up messages, and robust student calendar functionalities using JavaFX. These features enable students to manage and track their academic tasks, stay informed about urgent updates, and efficiently plan their schedules with visual aids and timely alerts.",
    tech: ["HTML", "Java", "JavaFX"],
    githubUrl: "https://github.com/ManuRodriguez10/BanyanBoard",
    liveUrl: "https://drive.google.com/file/d/1RfSkZqRnqj9Qh5PuABBLWdwoxPWLPCS4/view?usp=sharing",
    featured: true,
    timeline: "1 month",
    role: "Software Engineering Project 1",
    type: "Static Page",
    images: [
      "/assets/banyan-board-1.png",
      "/assets/banyan-board-2.png",
    ],
  },
  {
    id: "nsae-web-app",
    title: "NSAE Web App",
    description: "A comprehensive web application using Django and React for a non-profit animal shelter, aimed at boosting volunteer engagement and streamlining event management. Implemented advanced user authentication and registration systems to facilitate easy sign-up processes for new volunteers. Engineered dynamic user interfaces with React that allow registered volunteers to easily access information on upcoming events, log volunteer hours, and interact with the platform in a user-friendly manner. Leveraged Django's robust backend capabilities to enable detailed activity tracking and generate intuitive reports and dashboards for administrative staff.",
    tech: ["Django", "React"],
    githubUrl: "",
    liveUrl: "https://drive.google.com/file/d/1eChEDwxHszWp36ZsgECXfsfKHc0pMbuB/view?usp=sharing",
    featured: true,
    timeline: "1 month",
    role: "Software Engineering Project 2",
    type: "Web App",
    images: [
      "/assets/nsae-web-app-home.png",
      "/assets/nsae-web-app-1.png",
      "/assets/nsae-web-app-2.png",
      "/assets/nsae-web-app-3.png",
    ],
  },
  {
    id: "student-athlete-absence-tracker",
    title: "Student Athlete Absence Tracker",
    description: "Designed dynamic GUIs with Java Swing, creating intuitive interfaces that include dropdown menus, forms, and functionalities for generating CSV reports. Implemented advanced absence tracking and notification systems utilizing the Observer design pattern to automate communications, ensuring coaches receive timely updates about athlete absences. The application supports the export of team and athlete data to CSV format, enabling detailed reporting and analysis for coaches and administrative staff.",
    tech: ["Java", "Java Swing", "Object-Oriented Design Patterns"],
    githubUrl: "https://github.com/ManuRodriguez10",
    liveUrl: "#",
    featured: true,
  },
]

export const skills = [
  { category: "Languages", items: ["Python", "Java", "JavaScript", "HTML", "CSS"] },
  { category: "Frontend", items: ["React"] },
  { category: "Backend", items: ["Django", "SQL", "Supabase"] },
  { category: "Tools", items: ["Cursor", "Google Workspace", "Microsoft Office Suite"] },
]

export const experience = [
  {
    title: "Venture Planning Intern",
    company: "Suncoast Venture Studio",
    period: "August 2025 — Present",
    location: "Sarasota, FL",
    description: "Supported evaluation of early-stage startups by conducting market research, competitive analysis, and financial feasibility assessments. Collaborated with founders and mentors to refine business models and go-to-market strategies. Researched and evaluated tech stacks, large language models (LLMs), and AI integration opportunities to guide product and platform development.",
  },
  {
    title: "Teaching Assistant: Software Engineering, Object Oriented Programming",
    company: "Computer Science Department, New College of Florida",
    period: "January 2025 — Present",
    location: "Sarasota, FL",
    description: "Provided tutoring support to students struggling with object-oriented programming concepts, using one-on-one sessions and group workshops to enhance understanding and application of these concepts in Java. Collaborated with the course professor to review and refine course materials, ensuring clarity, accuracy, and educational effectiveness. Graded assignments, offering detailed, actionable feedback to students that focused on both strengths and areas for improvement to foster skill development and academic growth.",
  },
  {
    title: "Student Assistant",
    company: "Jane Bancroft Cook Library, New College of Florida",
    period: "January 2024 — Present",
    location: "Sarasota, FL",
    description: "Modernized library resources by digitizing and archiving senior thesis documents, utilizing advanced scanning equipment to enhance accessibility and preservation. Enhanced visitor experience by providing reception services, assisting with inquiries, and directing phone calls. Supported educational technology integration by assisting visitors with makerspace tools, including 3D printers and virtual reality sets.",
  },
  {
    title: "Student Assistant",
    company: "Athletic Admissions Department, New College of Florida",
    period: "October 2023 — November 2024",
    location: "Sarasota, FL",
    description: "Assisted prospective student-athletes with the application process, ensuring timely submission of all required documents and maintaining communication to address any issues. Conducted informative calls, offering personalized guidance to prospective students and their families about academic programs, campus life, and admission criteria. Organized and managed the submission of application materials, streamlining the process and maintaining accurate records for compliance.",
  },
]

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "New College of Florida",
    period: "August 2023 — May 2026",
    location: "Sarasota, FL",
    description: "Focused on software engineering, algorithms, object-oriented programming, web programming, and data structures.",
  },
  {
    degree: "Associate of Business Management",
    school: "Bryant & Stratton College",
    period: "August 2022 — May 2023",
    location: "Albany, NY",
    description: "Business management fundamentals.",
  },
]

export const relatedCourses = [
  "Software Engineering",
  "Intro to Python",
  "Data Structures",
  "Algorithms",
  "Object Oriented Programming",
  "Object Oriented Design",
  "Discrete Math",
  "Intro to R",
  "Dealing with Data I",
  "Computer Architecture and Digital Hardware",
  "Web Programming",
  "Calculus I",
]

export const languages = [
  { language: "Spanish", proficiency: "Native" },
  { language: "English", proficiency: "Fluent" },
]
