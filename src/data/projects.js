// Data source for all portfolio projects
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Property Management System",
    description: "A web-based system for managing rental properties, tenants, and payments. Built with Python and Django. Features include automated billing, reporting, and user management.",
    githubLink: "https://github.com/...", // **ACTION: Add actual link**
    liveLink: null,
    featured: true,
    category: "Full Stack",
    date: "2023",
    technologies: ["Python", "Django", "PostgreSQL", "Tailwind CSS"],
    images: [
      { src: './images/projects/pms-dashboard.jpg', alt: 'PMS Dashboard Screenshot' },
      { src: './images/projects/pms-billing.jpg', alt: 'PMS Billing Module' },
    ],
  },
  {
    id: 2,
    title: "School Management System",
    description: "Comprehensive platform for managing students, staff, classes, and results. Developed in Python. Includes attendance tracking, grading, and parent communication modules.",
    githubLink: "https://github.com/...", // **ACTION: Add actual link**
    liveLink: null,
    category: "Backend",
    date: "2022",
    technologies: ["Python", "Django", "SQLite", "Bootstrap"],
    images: [
      { src: './images/projects/sms-overview.jpg', alt: 'School Management Overview' },
      { src: './images/projects/sms-attendance.jpg', alt: 'School Attendance Tracking' },
    ],
  },
  {
    id: 3,
    title: "SMS System",
    description: "A simple SMS sending and management application. Built with Python. Allows sending bulk messages and tracking delivery status for communication needs.",
    githubLink: "https://github.com/...", // **ACTION: Add actual link**
    liveLink: null,
    category: "API",
    date: "2021",
    technologies: ["Python", "Flask", "Twilio API", "REST"],
    images: [
      { src: './images/projects/sms-main.jpg', alt: 'SMS System Interface' },
    ],
  },
  {
    id: 4,
    title: "POS System",
    description: "Point of Sale system for small businesses. Handles sales, inventory, and receipts. Developed in Python for easy deployment and use in retail environments.",
    githubLink: "https://github.com/...", // **ACTION: Add actual link**
    liveLink: null,
    category: "Desktop/Retail",
    date: "2020",
    technologies: ["Python", "Tkinter", "SQLite"],
    images: [
      { src: './images/projects/pos-checkout.jpg', alt: 'POS Checkout Screen' },
      { src: './images/projects/pos-inventory.jpg', alt: 'POS Inventory View' },
    ],
  },
  {
    id: 5,
    title: "Deep Learning & Reinforcement Learning",
    description: "Collection of Jupyter notebooks and code for deep learning and RL experiments. Uses TensorFlow, PyTorch, and OpenAI Gym. Includes tutorials and project demos.",
    githubLink: "https://github.com/...", // **ACTION: Add actual link**
    liveLink: null,
    category: "AI/ML",
    date: "2024",
    technologies: ["Python", "TensorFlow", "PyTorch", "Jupyter"],
    images: [
      { src: './images/projects/dl-rl-notebook.jpg', alt: 'DL Notebook Screenshot' },
    ],
  },
  {
    id: 6,
    title: "Image Inpainting System (AI)",
    description: "Advanced image inpainting using deep learning (OpenCV, DeepFill, EdgeConnect). Restores missing parts of images with AI-powered algorithms.",
    githubLink: "https://github.com/...", // **ACTION: Add actual link**
    liveLink: null,
    category: "Computer Vision",
    date: "2023",
    technologies: ["Python", "OpenCV", "Deep Learning"],
    images: [
      { src: './images/projects/inpainting-demo.jpg', alt: 'Image Inpainting Result' },
    ],
  },
  {
    id: 7,
    title: "Hospital Management System",
    description: "A comprehensive hospital management platform for handling patients, staff, appointments, and billing. Built with modern web technologies for efficiency and reliability.",
    githubLink: "https://github.com/...", // **ACTION: Add actual link**
    liveLink: null,
    category: "Enterprise",
    date: "2024",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    images: [
      { src: './images/projects/hms-appointments.jpg', alt: 'HMS Appointments View' },
      { src: './images/projects/hms-patients.jpg', alt: 'HMS Patient Records' },
    ],
  },
];
export default PROJECTS_DATA;