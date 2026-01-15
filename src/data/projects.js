// Data source for all portfolio projects
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Property Management System",
    description: "A web-based system for managing rental properties, tenants, and payments. Built with Python and Django. Features include automated billing, reporting, and user management.",
    githubLink: "https://github.com/Musembi001", // Verified from CV
    liveLink: null,
    featured: true,
    category: "Full Stack",
    date: "2023",
    technologies: ["Python", "Django", "PostgreSQL", "Tailwind CSS"],
    images: [
      { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop', alt: 'Property Management Dashboard' },
      { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop', alt: 'Billing Module' },
    ],
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
    images: [
      { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop', alt: 'School Management Overview' },
    ],
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
    images: [
      { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop', alt: 'SMS System Interface' },
    ],
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
    images: [
      { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop', alt: 'POS Checkout Screen' },
    ],
  },
  {
    id: 5,
    title: "Deep Learning & Reinforcement Learning",
    description: "Collection of Jupyter notebooks and code for deep learning and RL experiments. Uses TensorFlow, PyTorch, and OpenAI Gym. Includes tutorials and project demos.",
    githubLink: "https://github.com/Musembi001",
    liveLink: null,
    category: "AI/ML",
    date: "2024",
    technologies: ["Python", "TensorFlow", "PyTorch", "Jupyter"],
    images: [
      { src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop', alt: 'Neural Network Visualization' },
    ],
  },
  {
    id: 6,
    title: "Image Inpainting System (AI)",
    description: "Advanced image inpainting using deep learning (OpenCV, DeepFill, EdgeConnect). Restores missing parts of images with AI-powered algorithms.",
    githubLink: "https://github.com/Musembi001",
    liveLink: null,
    category: "Computer Vision",
    date: "2023",
    technologies: ["Python", "OpenCV", "Deep Learning"],
    images: [
      { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop', alt: 'Computer Vision Demo' },
    ],
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
    images: [
      { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop', alt: 'Hospital Appointments View' },
    ],
  },
];

export default PROJECTS_DATA;