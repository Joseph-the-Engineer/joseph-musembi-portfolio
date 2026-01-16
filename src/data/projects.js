/**
 * Synchronized Project Data
 * Verified against professional CV and local asset naming conventions.
 * Paths updated to relative format for GitHub Pages compatibility.
 */
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Property Management System",
    description: "A web-based system for managing rental properties, tenants, and payments. Built with Python and Django. Features include automated billing, reporting, and user management.",
    githubLink: "https://github.com/Musembi001",
    liveLink: null,
    featured: true,
    category: "Full Stack",
    date: "2023",
    technologies: ["Python", "Django", "PostgreSQL", "Tailwind CSS"],
    // Removed leading slash from src
    images: [{ src: 'images/projects/PMS.png', alt: 'Property Management Dashboard' }],
  },
  {
    id: 2,
    title: "School Management System",
    description: "Comprehensive platform for managing students, staff, classes, and results. Developed in Python. Includes attendance tracking, grading, and parent communication modules.",
    githubLink: "https://github.com/Musembi001", 
    liveLink: null,
    category: "Backend",
    date: "2022",
    technologies: ["Python", "Django", "SQLite", "Bootstrap"],
    images: [{ src: 'images/projects/SMS_APP.png', alt: 'School Management Overview' }],
  },
  {
    id: 3,
    title: "SMS System",
    description: "A simple SMS sending and management application. Built with Python. Allows sending bulk messages and tracking delivery status for communication needs.",
    githubLink: "https://github.com/Musembi001",
    liveLink: null,
    category: "API",
    date: "2021",
    technologies: ["Python", "Flask", "Twilio API", "REST"],
    images: [{ src: 'images/projects/SMS.png', alt: 'SMS System Interface' }],
  },
  {
    id: 4,
    title: "POS System",
    description: "Point of Sale system for small businesses. Handles sales, inventory, and receipts. Developed in Python for easy deployment and use in retail environments.",
    githubLink: "https://github.com/Musembi001",
    liveLink: null,
    category: "Desktop/Retail",
    date: "2020",
    technologies: ["Python", "Tkinter", "SQLite"],
    images: [{ src: 'images/projects/POS_system.png', alt: 'POS Checkout Screen' }],
  },
  {
    id: 5,
    title: "Task Management System",
    description: "A full-stack application featuring a JWT-based authentication system, task assignment, user roles, and activity tracking.",
    githubLink: "https://github.com/Musembi001",
    liveLink: null,
    category: "Full-Stack",
    date: "2024",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    images: [{ src: 'images/projects/Inpainting.png', alt: 'Task Management Interface' }],
  },
  {
    id: 6,
    title: "Predictive Data Analysis Tool",
    description: "A regression model built to forecast sales and visualize data trends using advanced Python libraries.",
    githubLink: "https://github.com/Musembi001",
    liveLink: null,
    category: "AI/ML",
    date: "2023",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    images: [{ src: 'images/projects/Inpainting.png', alt: 'Data Visualization Demo' }],
  },
  {
    id: 7,
    title: "Hospital Management System",
    description: "A comprehensive hospital management platform for handling patients, staff, appointments, and billing. Built with modern web technologies for efficiency and reliability.",
    githubLink: "https://github.com/Musembi001",
    liveLink: null,
    category: "Enterprise",
    date: "2024",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    images: [{ src: 'images/projects/HMIS.png', alt: 'Hospital Appointments View' }],
  },
];

export default PROJECTS_DATA;