// ============================================================
// portfolioData.js — Centralized configuration for Shibina S
// 2029 Glassmorphic Portfolio — Web Developer & Software Engineer
// ============================================================

export const personalInfo = {
  name: "Shibina S",
  firstName: "Shibina",
  lastName: "S",
  brandName: "SHIBINA S",
  title: "Web Developer & Software Engineer",
  tagline: "Crafting High-Performance E-Commerce Platforms, Responsive Web Applications & Enterprise Software Solutions",
  location: "Deira, Dubai, UAE",
  phone: "+971 523346885",
  emails: {
    primary: "Shibinaibi@gmail.com",
  },
  summary:
    "Software Engineer & Web Developer with 3+ years of experience across web development, technical mentoring, full-stack application engineering, and SAP ABAP consulting. Expert in building and maintaining WordPress/WooCommerce e-commerce platforms, customizing responsive websites with custom HTML, CSS, JavaScript, and PHP, and managing web hosting and server administration. Experienced Assistant Professor in Computer Science and former SAP ABAP Consultant for Wipro – Estée Lauder.",
  resumeUrl: "/shibina-resume.pdf",
  videoUrl: "/hero-video.mp4",
  videoPoster: "/hero-poster.png",
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/shibina-s",
  email: "Shibinaibi@gmail.com",
  phone: "+971523346885",
};

export const heroContent = {
  greeting: "Hello & Welcome to my Digital Space",
  headline: "Designing Elegant Web Experiences. Engineering Scalable Solutions.",
  subtitle: "Web Developer & Software Engineer based in Dubai, UAE. Specializing in WooCommerce platforms, modern web architecture, Python/Django full-stack development, and enterprise systems.",
  stats: [
    { value: "3+", label: "Years Tech Experience" },
    { value: "3", label: "Live UAE Enterprise Websites" },
    { value: "8+", label: "Professional Certifications" },
    { value: "100%", label: "Steyp Assessment Score" },
  ],
  ctaPrimary: { text: "Explore My Work", href: "#projects" },
  ctaSecondary: { text: "Get In Touch", href: "#contact" },
  ctaResume: { text: "Download Resume", href: "/shibina-resume.pdf" },
};

export const aboutContent = {
  subtitle: "Engineering Mindset",
  heading: "Versatile Web Developer & Technical Innovator",
  bioParagraphs: [
    "I am a passionate Web Developer and Software Engineer based in Deira, Dubai, UAE, with a B.Tech in Computer Science and over 3 years of hands-on technical experience.",
    "My work spans full-lifecycle web development — from designing bespoke e-commerce experiences on WooCommerce, Elementor, and Blocksy to building custom PHP, HTML5, and CSS3 interfaces, managing cloud hosting, and optimizing website security and speed.",
    "Previously, I served as an Assistant Professor in Computer Science teaching Web Development, Python, and Machine Learning, and spent over two years as an SAP ABAP Consultant at Kulsam IT Solutions working on enterprise logistics and reporting for global clients like Wipro – Estée Lauder."
  ],
  highlights: [
    "UAE Live E-Commerce & Web Platforms (mizco.ae, mizhome.ae, mizperfectsupplies.com)",
    "Steyp Certified UI Engineer & Web Application Developer (10/10 Perfect Scorecards)",
    "Python Full-Stack & Django Web Framework Expertise",
    "Computer Science Mentorship & Practical Lab Management",
    "SAP ABAP Enterprise Report & EWM Enhancement Development"
  ]
};

export const processContent = {
  badge: "My Workflow",
  heading: "From Concept to High-Converting Digital Platforms",
  description: "I follow a structured end-to-end web engineering methodology ensuring pixel-perfect responsive design, robust server security, and seamless user experiences.",
  cards: [
    {
      number: "01",
      title: "Requirement & UX Mapping",
      text: "Understanding business goals, target audience demographics, product catalog taxonomy, and conversion pathways."
    },
    {
      number: "02",
      title: "UI Engineering & Design",
      text: "Crafting modern glassmorphic responsive interfaces with HTML5, CSS3, Elementor, and custom SASS/PHP overrides."
    },
    {
      number: "03",
      title: "Development & E-Commerce",
      text: "Building WooCommerce engines, payment gateways, product inventory syncing, custom APIs, and backend workflows."
    },
    {
      number: "04",
      title: "Optimization & Security",
      text: "Optimizing Web Vitals, cross-browser compatibility, SSL encryption, automated server backups, and database tuning."
    },
    {
      number: "05",
      title: "Deployment & Growth",
      text: "Deploying live platforms to high-performance servers, setting up Google Analytics, and providing ongoing technical support."
    }
  ],
  endText: "Delivering world-class digital experiences!"
};

export const technicalSkills = {
  categories: [
    {
      title: "Web Development & E-Commerce",
      icon: "🌐",
      skills: [
        { name: "HTML5 & CSS3", desc: "Semantic Markup & Modern Styling" },
        { name: "WordPress & WooCommerce", desc: "E-Commerce Architecture & Catalog" },
        { name: "JavaScript & React", desc: "Dynamic Interactive Components" },
        { name: "Elementor & Blocksy", desc: "Custom Layouts & Theme Customization" },
        { name: "PHP & Custom Snippets", desc: "Backend Logic & Functions" },
        { name: "Bootstrap & TailwindCSS", desc: "Responsive Design Systems" },
        { name: "Shopify & CMS", desc: "Store Management & Content" },
        { name: "REST APIs & JSON", desc: "API Development & Integration" },
      ]
    },
    {
      title: "Programming & Frameworks",
      icon: "💻",
      skills: [
        { name: "Python", desc: "Backend Logic & Scripting" },
        { name: "Django", desc: "Full-Stack Web Framework" },
        { name: "SQL", desc: "Database Queries & Management" },
        { name: "C & C++", desc: "Core Programming Foundations" },
        { name: "Java", desc: "Object-Oriented Development" },
        { name: "jQuery & SASS", desc: "Frontend Scripting & Preprocessing" },
      ]
    },
    {
      title: "Enterprise Systems & SAP",
      icon: "🏢",
      skills: [
        { name: "SAP ABAP", desc: "Enterprise Report Development" },
        { name: "SAP EWM", desc: "Extended Warehouse Management" },
        { name: "Barcode Automation", desc: "Logistics & Scanner Programming" },
        { name: "HR Module Support", desc: "SAP Functional Collaboration" },
      ]
    },
    {
      title: "Hosting & Server Administration",
      icon: "⚡",
      skills: [
        { name: "Website Hosting", desc: "Server Setup & DNS Configuration" },
        { name: "Server Administration", desc: "Apache/Nginx & Control Panels" },
        { name: "Backup & Recovery", desc: "Automated Data Safeguards" },
        { name: "Security Basics", desc: "SSL certificates, Access Control, Firewalls" },
        { name: "Git & GitLab", desc: "Version Control & Repositories" },
      ]
    },
    {
      title: "Machine Learning & Hardware",
      icon: "🧠",
      skills: [
        { name: "Audio MFCC", desc: "Acoustic Feature Extraction" },
        { name: "Support Vector Machines (SVM)", desc: "Classification & Pattern Recognition" },
        { name: "Arduino & Microcontrollers", desc: "Circuit Prototyping & Sensor Logic" },
        { name: "IoT Systems", desc: "Connected Hardware & Monitoring" },
      ]
    },
    {
      title: "IT Support & Tools",
      icon: "🛠️",
      skills: [
        { name: "Google Analytics", desc: "Traffic & Ecommerce Conversion Tracking" },
        { name: "Microsoft 365 & Workspace", desc: "Productivity & Documentation" },
        { name: "Technical Mentoring", desc: "Student & Junior Dev Mentorship" },
        { name: "Troubleshooting", desc: "Hardware, Network & System Diagnostics" },
      ]
    }
  ]
};

export const projects = [
  {
    id: "mizco-ae",
    number: "01",
    badge: "🌐 Live UAE E-Commerce Platform",
    title: "MIZ Corporate & Equipment Store (mizco.ae)",
    tagline: "Mohammed Ibrahim Alzubaidy Co — Enterprise Supermarket & Commercial Equipment Platform",
    liveUrl: "https://mizco.ae",
    overview:
      "Fully customized corporate website and e-commerce portal built for MIZ in Dubai, UAE. Designed to showcase enterprise supermarket machinery, commercial refrigeration, and food service equipment.",
    architecture: [
      "Custom WordPress & WooCommerce architecture optimized for large product catalogs.",
      "Customized Blocksy theme with bespoke CSS styling and Elementor drag-and-drop page builders.",
      "Mobile-responsive UI designed for seamless navigation across all device resolutions.",
      "Managed website hosting, server administration, automated daily backups, and security hardening.",
      "Synchronized in-store supermarket equipment inventory with online pricing and catalog listings."
    ],
    techTags: ["WordPress", "WooCommerce", "PHP", "CSS3", "Blocksy", "Elementor", "Server Admin", "Web Security"],
    impact: [
      "Built a seamless digital showcase for high-value commercial supermarket equipment in the UAE.",
      "Optimized page load speed and mobile usability for retail and commercial buyers.",
      "Maintained 100% uptime with automated backup and cloud server management."
    ],
    image: "/certificates/cert-web-developer.png"
  },
  {
    id: "mizhome-ae",
    number: "02",
    badge: "🛋️ Live UAE Retail Platform",
    title: "MIZ Home Decor & Furniture (mizhome.ae)",
    tagline: "Modern E-Commerce Store for Premium Home Decor, Kitchenware & Interior Equipment",
    liveUrl: "https://mizhome.ae",
    overview:
      "A stylish e-commerce platform dedicated to home appliances, cookware, and living essentials in the UAE. Designed with a clean, high-conversion visual layout.",
    architecture: [
      "Structured WooCommerce product categories with high-resolution gallery sliders.",
      "Custom HTML5/CSS3 UI tweaks for product cards, quick view modals, and filter facets.",
      "Streamlined checkout flow and mobile-friendly payment gateway integration.",
      "Integrated SEO metadata and Open Graph tags for enhanced organic search visibility in Dubai."
    ],
    techTags: ["WooCommerce", "WordPress", "JavaScript", "HTML5", "CSS3", "SEO", "Responsive UI"],
    impact: [
      "Elevated brand presence in the UAE home decor and consumer retail sector.",
      "Enhanced customer conversion rate with intuitive category filtering and mobile layout.",
      "Provided smooth content and inventory management capabilities for store managers."
    ],
    image: "/certificates/cert-ui-engineer.png"
  },
  {
    id: "mizperfectsupplies-com",
    number: "03",
    badge: "🏬 Live UAE Supplies Store",
    title: "MIZ Perfect Supplies (mizperfectsupplies.com)",
    tagline: "B2B & Retail Supplies Portal for Supermarkets, Commercial Kitchens & Catering",
    liveUrl: "https://mizperfectsupplies.com",
    overview:
      "Comprehensive digital platform for commercial supplies, catering tools, and industrial packaging products across the Middle East.",
    architecture: [
      "Custom WooCommerce catalog engine handling bulk supply pricing and inquiry forms.",
      "Bespoke PHP hooks to extend standard checkout logic and customer inquiry routing.",
      "Cross-browser tested and optimized for ultra-fast load times on mobile networks."
    ],
    techTags: ["WordPress", "WooCommerce", "PHP Snippets", "Speed Optimization", "DNS & Hosting"],
    impact: [
      "Streamlined B2B customer inquiries and commercial supply order processing.",
      "Delivered reliable 99.9% platform stability with active SSL and malware protection."
    ],
    image: "/certificates/cert-backend-developer.png"
  },
  {
    id: "speaker-verification",
    number: "04",
    badge: "🧠 Machine Learning",
    title: "Speaker Verification System (MFCC + SVM)",
    tagline: "Acoustic Biometric Verification Engine for Voice Identity Authentication",
    overview:
      "Engineered a machine learning-based voice recognition system that extracts unique vocal features and verifies user identity using acoustic signal processing.",
    architecture: [
      "Utilized Mel-Frequency Cepstral Coefficients (MFCC) for acoustic feature extraction from raw audio.",
      "Trained a Support Vector Machine (SVM) classifier to recognize voice biometric signatures.",
      "Evaluated system accuracy against audio noise and pitch variations."
    ],
    techTags: ["Python", "Machine Learning", "MFCC Audio Analysis", "Support Vector Machines (SVM)", "Scikit-Learn"],
    impact: [
      "Achieved 89% classification accuracy across training and evaluation datasets.",
      "Demonstrated practical application of signal processing and machine learning algorithms."
    ],
    image: "/certificates/cert-devops-engineer.png"
  },
  {
    id: "battery-alarm",
    number: "05",
    badge: "🔌 Hardware & IoT",
    title: "Arduino Smart Battery Level & Voltage Alarm",
    tagline: "Microcontroller Voltage Monitoring System with Dual Visual & Audible Alert System",
    overview:
      "Designed and prototyped an embedded hardware system that monitors battery health in real-time and triggers automatic alarms upon detecting low voltage thresholds.",
    architecture: [
      "Configured Arduino microcontroller with precision voltage divider circuits.",
      "Programmed alert threshold logic triggering visual LED indicators and audible buzzer alarms."
    ],
    techTags: ["Arduino", "C/C++", "Circuit Design", "Embedded Systems", "Hardware Prototyping"],
    impact: [
      "Prevented deep-discharge battery damage in low-power electronic setups.",
      "Created an economical, highly reliable power monitoring prototype."
    ],
    image: "/certificates/cert-btech-attestation.png"
  },
  {
    id: "sap-abap-logistics",
    number: "06",
    badge: "🏢 Enterprise SAP System",
    title: "SAP ABAP & EWM Logistics Automation (Wipro / Estée Lauder)",
    tagline: "Enterprise SAP Enhancements, Barcode Scanning Integration & Customs Reporting",
    overview:
      "Developed custom SAP ABAP reports and Extended Warehouse Management (EWM) enhancements for Wipro servicing global client Estée Lauder.",
    architecture: [
      "Built modular SAP ABAP reports and database extraction routines for supply chain analytics.",
      "Engineered custom barcode scanning programs to streamline warehouse logistics operations.",
      "Collaborated with cross-functional SAP functional consultants to customize HR and logistics modules."
    ],
    techTags: ["SAP ABAP", "SAP EWM", "Barcode Programming", "Enterprise Logistics", "SQL"],
    impact: [
      "Optimized warehouse inventory tracking and barcode processing throughput for global supply chains.",
      "Delivered reliable enterprise reports supporting critical business operations."
    ],
    image: "/certificates/cert-ieee-member.png"
  }
];

export const certificates = [
  {
    id: "cert-ui-engineer",
    title: "UI Engineer Profession Certificate",
    issuer: "Steyp",
    date: "July 2023",
    credentialId: "e5zc77thyxqes36ve5x6",
    score: "10 / 10",
    image: "/certificates/cert-ui-engineer.png",
    category: "Web & UI",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git & GitLab", "jQuery", "Bootstrap", "SASS", "PWA"],
    description: "Certified UI Engineer with perfect 10/10 scorecard across HTML, CSS, React, SASS, Bootstrap, and Progressive Web Apps."
  },
  {
    id: "cert-web-developer",
    title: "Web Application Developer Certificate",
    issuer: "Steyp",
    date: "July 2023",
    credentialId: "rmvainz28j12ixzsul59",
    score: "10 / 10",
    image: "/certificates/cert-web-developer.png",
    category: "Web & UI",
    skills: ["API Development", "REST APIs", "Full-Stack Web Architecture"],
    description: "Certified Web Application Developer scoring 10/10 in API development, RESTful web services, and backend integration."
  },
  {
    id: "cert-backend-developer",
    title: "Backend Developer Certificate",
    issuer: "Steyp",
    date: "July 2023",
    credentialId: "oﬁ6jy2k18z8mo0k24b6",
    score: "10 / 10",
    image: "/certificates/cert-backend-developer.png",
    category: "Backend",
    skills: ["Python", "Django", "Django Advanced", "ORM & Databases"],
    description: "Backend Developer qualification with perfect 10/10 evaluation in Python, Django framework, and advanced backend web concepts."
  },
  {
    id: "cert-devops-engineer",
    title: "DevOps Engineer Certificate",
    issuer: "Steyp",
    date: "July 2023",
    credentialId: "1o3o7fkevg26hngpn1qj",
    score: "10 / 10",
    image: "/certificates/cert-devops-engineer.png",
    category: "DevOps & Cloud",
    skills: ["Website Hosting", "Server Management", "Domain & DNS Setup"],
    description: "DevOps Engineer certification scoring 10/10 in website hosting, web server setup, and server deployment."
  },
  {
    id: "cert-ieee-member",
    title: "IEEE Student Member Certificate of Recognition",
    issuer: "IEEE",
    date: "2021 - 2022",
    credentialId: "IEEE-STU-MEMBER",
    score: "Recognized Member",
    image: "/certificates/cert-ieee-member.png",
    category: "Professional & IEEE",
    skills: ["IEEE Membership", "Technical Leadership", "Computer Society"],
    description: "Recognized as a Student Member in good standing of IEEE, denoting personal and professional commitment to advancing technology."
  },
  {
    id: "cert-ieee-webinar",
    title: "Importance of Electromagnetic Field Theory Webinar",
    issuer: "IEEE SB & APS SB Chapter (MCC)",
    date: "August 2020",
    credentialId: "IEEE-APS-WEB-2020",
    score: "Participant",
    image: "/certificates/cert-ieee-webinar.png",
    category: "Professional & IEEE",
    skills: ["Electromagnetic Theory", "Wave Propagation", "AP-S IEEE"],
    description: "Certificate of participation in technical webinar organized by IEEE SB and Antennas and Propagation Society (APS) Kerala Chapter."
  },
  {
    id: "cert-nss",
    title: "NSS National Service Scheme Certificate",
    issuer: "Musaliar College of Engineering / APJ Abdul Kalam Technological University",
    date: "April 2022",
    credentialId: "176202019",
    score: "Enrolled Volunteer",
    image: "/certificates/cert-nss.png",
    category: "Achievements",
    skills: ["Community Leadership", "Social Service", "Event Management"],
    description: "Official NSS Participation Certificate recognizing active community service and social leadership during B.Tech degree."
  },
  {
    id: "cert-btech-attestation",
    title: "B.Tech Degree Digital Attestation",
    issuer: "APJ Abdul Kalam Technological University",
    date: "June 2022",
    credentialId: "AEDA0924588373493514658",
    score: "CGPA 7.51 / 10",
    image: "/certificates/cert-btech-attestation.png",
    category: "Degree",
    skills: ["Computer Science", "Software Engineering", "Algorithms", "Databases"],
    description: "Digitally attested Bachelor of Technology degree in Computer Science and Engineering."
  }
];

export const experienceData = [
  {
    period: "Dec 2025 – Present",
    role: "Web Developer & Sales Officer",
    company: "MIZ – Mohammed Ibrahim Alzubaidy Company",
    location: "Dubai, UAE",
    badge: "Current Role",
    highlights: [
      "Developed and maintained the company's live WordPress and WooCommerce e-commerce platforms (mizco.ae, mizhome.ae, mizperfectsupplies.com).",
      "Managed product catalogs, pricing, inventory, images, and category taxonomy across online stores.",
      "Designed responsive web pages using Elementor and customized the Blocksy theme with tailored HTML, CSS, and PHP.",
      "Managed web hosting, server administration, domain DNS configuration, and automated website backups.",
      "Sold commercial supermarket equipment to prospective clients, matching technical specifications to customer requirements."
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "HTML5/CSS3", "Blocksy", "Elementor", "Server Admin"]
  },
  {
    period: "Jan 2025 – Oct 2025",
    role: "Assistant Professor – Computer Science",
    company: "Musaliar College of Engineering",
    location: "India",
    badge: "Academic Mentorship",
    highlights: [
      "Delivered undergraduate lectures and lab practicals in Web Development, Python, C Programming, Machine Learning, and IoT.",
      "Taught HTML, CSS, JavaScript, and full-stack web application development concepts.",
      "Mentored student groups through software engineering capstone projects and practical coding assessments.",
      "Provided hands-on IT support for computer laboratories, including workstation setup, software installations, and lab network maintenance."
    ],
    tech: ["Web Development", "Python", "C Programming", "Machine Learning", "IoT", "Network Admin"]
  },
  {
    period: "Aug 2022 – Dec 2024",
    role: "SAP ABAP Consultant",
    company: "Kulsam IT Solutions (Client: Wipro – Estée Lauder)",
    location: "India",
    badge: "Enterprise Consulting",
    highlights: [
      "Developed and enhanced custom SAP ABAP reports and programs tailored to global enterprise business requirements.",
      "Contributed to SAP Extended Warehouse Management (EWM) enhancements and inventory tracking automation.",
      "Programmed barcode scanning routines to support logistics and warehouse distribution centers.",
      "Collaborated with cross-functional SAP functional teams and stakeholders to deliver verified technical solutions."
    ],
    tech: ["SAP ABAP", "SAP EWM", "Barcode Programming", "SQL", "Logistics Systems"]
  }
];

export const educationData = [
  {
    period: "2018 – 2022",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "APJ Abdul Kalam Technological University",
    location: "Musaliar College of Engineering, India",
    score: "CGPA: 7.51 / 10",
    description: "Comprehensive 4-year degree covering Computer Networks, Database Management, Software Engineering, Web Technologies, Data Structures & Algorithms, Operating Systems, and Machine Learning."
  }
];

export const servicesData = [
  {
    number: "01",
    title: "WooCommerce & E-Commerce Engineering",
    icon: "🛒",
    description: "End-to-end WordPress/WooCommerce store creation, custom payment gateways, inventory syncing, and high-converting product pages."
  },
  {
    number: "02",
    title: "Custom Web Application Development",
    icon: "💻",
    description: "Responsive, ultra-fast websites and web applications built with modern HTML5, CSS3, JavaScript, React, and Python/Django."
  },
  {
    number: "03",
    title: "Hosting & Server Administration",
    icon: "⚡",
    description: "Cloud server setup, DNS management, SSL certificates, speed optimization, malware defense, and automated database backups."
  },
  {
    number: "04",
    title: "Enterprise SAP ABAP Development",
    icon: "🏢",
    description: "Custom ABAP reports, SAP EWM warehouse enhancements, barcode scanner integrations, and logistics software solutions."
  }
];
