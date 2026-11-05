export const SITE = {
  name: 'Joseph Bautista',
  email: 'josephreuben.bautista@gmail.com',
  calendly: 'https://calendly.com/joseph-bautista/30min',
  github: 'https://github.com/joseph-bautista',
  linkedin: 'https://www.linkedin.com/in/joseph-bautista/',
  title: 'Senior Software Engineer | Backend | Cloud | AI',
}

export const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
]

export const SNAPSHOT: { label: string; value: string; href?: string; linkText?: string; tail?: string }[] = [
  { label: 'Focus', value: 'Backend systems, cloud architecture, CI/CD, AI integrations and agent workflows' },
  { label: 'Core stack', value: 'Laravel · Python · PostgreSQL · AWS · Google Cloud' },
  { label: 'Currently', value: 'Senior Software Engineer at Uni-President Information Philippines; Founding Engineer at Valtor Solutions' },
  { label: 'Also building', value: '', href: 'https://joinhousemate.com', linkText: 'HouseMate', tail: ', a B2B SaaS for rental property owners and managers (founder)' },
  { label: 'Based in', value: 'Metro Manila, PH · working remotely with global teams' },
]

export const PROOF = [
  { value: '8+', label: 'years shipping production systems' },
  { value: '−37%', label: 'monthly AWS spend, Match Me Auto Group' },
  { value: '−94%', label: 'deploy time with GitHub Actions CI/CD, Match Me Auto Group' },
  { value: '+83%', label: 'team dev efficiency, Xctuality' },
]

export const SERVICES = [
  {
    icon: 'layers',
    title: 'Backend & API engineering',
    body: 'Clean, well-structured APIs and services in Laravel, Python (FastAPI) and Node. Schema design, query optimization and modular architecture that stays maintainable as the product grows.',
    tags: ['Laravel', 'FastAPI', 'PostgreSQL', 'MySQL', 'REST APIs'],
  },
  {
    icon: 'cloud',
    title: 'Cloud architecture, optimization & migration',
    body: 'Reliable, secure infrastructure built to the size you actually need. Trimmed monthly AWS spend by 37% on a live production environment, and currently leading an AWS to Google Cloud migration.',
    tags: ['AWS', 'Google Cloud', 'Alibaba Cloud', 'Managed PostgreSQL', 'IAM'],
  },
  {
    icon: 'repeat',
    title: 'CI/CD & release automation',
    body: 'Automated pipelines that replace manual release steps and make shipping routine. Cut deployment time by 94% and improved release consistency.',
    tags: ['GitHub Actions', 'Docker', 'Bash', 'Linux'],
  },
  {
    icon: 'cpu',
    title: 'AI features & agent workflows',
    body: 'Practical LLM features wired into real workflows, such as a BOQ engine on Claude and Amazon Bedrock, plus AI agent workflows that help teams build and maintain software and automate existing business processes.',
    tags: ['Claude', 'Amazon Bedrock', 'Cursor', 'Agent workflows', 'Automation'],
  },
] as const

export const WORK = [
  {
    num: '01', type: 'Founder · B2B SaaS', title: 'HouseMate', href: 'https://joinhousemate.com',
    body: 'A B2B SaaS platform for rental property owners and managers, built across four repositories: the platform and an admin CRM, each with its own backend and frontend. Every repository runs its own planner, coder, QA and security agents (plus a designer agent on the frontends) around a shared workspace that keeps decisions and context consistent and work traceable.',
    tags: ['FastAPI', 'ReactJS', 'PostgreSQL', 'AI agents'], resultLabel: 'Role', result: ['Founder', 'Four-repo platform'],
  },
  {
    num: '02', type: 'Platform · AI & API', title: 'AI-powered procurement platform', href: 'https://valtorsolutions.com/products',
    body: 'Founding engineer on a construction procurement platform: architected the backend and AWS infrastructure, digitized sourcing, bidding, quotation and order management, shipped an AI BOQ recommendation engine, and is now leading the migration of its infrastructure from AWS to Google Cloud.',
    tags: ['Laravel', 'PostgreSQL', 'AWS', 'Google Cloud', 'Claude', 'Amazon Bedrock'], resultLabel: 'Role', result: ['Founding engineer', 'Leading GCP migration'],
  },
  {
    num: '03', type: 'Infrastructure · DevOps', title: 'AWS cost & CI/CD overhaul', href: 'https://www.matchmecarfinance.co.uk/',
    body: 'Optimized AWS infrastructure and automated GitHub Actions CI/CD pipelines, improving release consistency and starting the shift toward a modular monolithic architecture.',
    tags: ['AWS', 'GitHub Actions', 'Docker', 'Laravel'], resultLabel: 'Result', result: ['−37% AWS cost', '−94% deploy time'],
  },
  {
    num: '04', type: 'Backend · SaaS', title: 'QR generator platform', href: 'https://qr.xctuality.com/',
    body: 'Backend for a QR code generation app: Laravel REST APIs handling dynamic QR generation, analytics and user management.',
    tags: ['Laravel', 'MySQL', 'REST API', 'AWS'], resultLabel: 'Result', result: ['Increased product traction'],
  },
]

export const PROCESS = [
  { title: 'Scope', body: 'We align on the problem, constraints and what success looks like before any code is written.' },
  { title: 'Architect', body: 'A right-sized design for data, services and infrastructure, with trade-offs explained plainly.' },
  { title: 'Build & automate', body: 'Incremental delivery behind CI/CD, so you see working software early and often.' },
  { title: 'Hand over', body: 'Documentation and clean hand-off so your team can own and extend what was built.' },
]

export const JOBS = [
  {
    period: 'Jun 2026 – Present', title: 'Senior Software Engineer', company: 'Uni-President Information Philippines Corp. · Pasig, Philippines',
    bullets: [
      'Delivered software across three time-critical projects using Python, Java, C# and Alibaba Cloud, helping teams meet critical delivery timelines.',
      'Built an internal system for the team to track tasks and plan sprints.',
      'Set up AI agents to help the team develop features and maintain the app.',
      'Completed remaining development tasks and technical documentation for a project successfully delivered on schedule.',
      'Collaborated with cross-functional teams to resolve implementation issues and mentored junior and mid-level developers through technical guidance and code reviews.',
    ],
    tags: ['Python', 'Java', 'C#', 'Alibaba Cloud', 'AI agents'],
  },
  {
    period: 'Jun 2025 – Present', title: 'Founding Engineer & Lead Software Developer', company: 'Valtor Solutions, Inc. · Philippines',
    bullets: [
      'Joined as a founding engineer, taking ownership of the technical foundation and building the core construction procurement platform from the ground up.',
      'Architected and developed the platform using Laravel, PostgreSQL and AWS, digitizing sourcing, bidding, quotation and order-management workflows.',
      'Led technical direction across the founding team, defining system architecture, engineering practices and technology strategy.',
      'Set up automations from existing business processes, and proposed and implemented new features.',
      'Developed an AI-powered BOQ recommendation system using Claude and Amazon Bedrock to accelerate quotation generation and product recommendations.',
      'Set up AI agents to help the team develop features and maintain the app.',
      'Leading the migration of the application infrastructure from AWS to Google Cloud, with compute and managed PostgreSQL already set up.',
    ],
    tags: ['Laravel', 'PostgreSQL', 'AWS', 'Google Cloud', 'Claude', 'Amazon Bedrock'],
  },
  {
    period: 'Mar 2024 – Apr 2026', title: 'Senior Developer and AWS Cloud Engineer', company: 'Match Me Auto Group · Pasay, Philippines',
    bullets: [
      'Optimized AWS infrastructure and reconfigured key cloud services, improving performance while reducing monthly operating costs by 37%.',
      'Designed and automated GitHub Actions CI/CD pipelines, reducing deployment time by 94% and improving release consistency.',
      'Led system segmentation and initiated a transition toward a modular monolithic architecture, improving reliability and scalability.',
    ],
    tags: ['AWS', 'GitHub Actions', 'Laravel', 'Docker'],
  },
  {
    period: 'Mar 2022 – Sep 2025', title: 'Back End Engineer', company: 'Xctuality Ltd Pte · Singapore',
    bullets: [
      "Developed backend systems for a QR Generator application, contributing to increased traction across the company's business network and product ecosystem.",
      'Collaborated with the Tech Lead to improve project workflows and code structure, increasing development efficiency by 83%.',
      'Led a cross-functional team of frontend, mobile and backend engineers delivering client projects focused on security, performance and custom functionality.',
    ],
    tags: ['PHP', 'Laravel', 'MySQL', 'NodeJS', 'Docker'],
  },
  {
    period: 'Jul 2019 – Feb 2022', title: 'Software Engineer', company: 'Vaultech Inc. · Makati, Philippines',
    bullets: [
      'Led a team of four developers building a location-based service platform, overseeing development from backend architecture through deployment.',
      'Enhanced and maintained an online procurement platform using Laravel, MySQL and jQuery, improving stability, performance and user experience.',
      'Developed RESTful APIs in Laravel supporting mobile applications and real-time backend communication.',
    ],
    tags: ['Laravel', 'MySQL', 'jQuery', 'PHP'],
  },
  {
    period: 'Oct 2018 – Jun 2019', title: 'Software Engineer', company: 'Engage Outsourcing · Makati, Philippines',
    bullets: ['Developed and maintained features for an accounting application using Laravel, MySQL and jQuery, working across backend, database and frontend layers.'],
    tags: ['Laravel', 'MySQL', 'jQuery'],
  },
]

export const SIDE_PROJECT = {
  period: 'Apr 2026 – Present', title: 'Founder', company: 'HouseMate · Mandaluyong, Philippines',
  bullets: [
    'Founded and led a B2B SaaS platform for rental property owners and managers, built on Python (FastAPI), ReactJS and PostgreSQL across four repositories: the platform and the admin CRM, each with its own backend and frontend.',
    'Set up AI agents to help develop features and maintain the app: every repository has its own planner, coder, QA and security agents, plus a designer agent on the frontends, which work independently on each feature assigned.',
    'Maintain a shared workspace that stores decisions and context across all four repositories, so agents stay consistent and work is traceable.',
  ],
  tags: ['FastAPI', 'ReactJS', 'PostgreSQL', 'AI agents'],
}

export const EDUCATION = [
  { name: 'BS Information Systems', meta: "De La Salle – College of Saint Benilde · 2026 – Present · One-year bachelor's degree equivalency program" },
  { name: 'Diploma in Information and Communications Technology', meta: 'Rizal Technological University · 2016' },
]

export const SKILLS = [
  { name: 'Programming languages', meta: 'PHP, JavaScript, Python, Java, C#' },
  { name: 'Frameworks', meta: 'Laravel, ExpressJS, ReactJS, FastAPI, Spring Boot, .NET' },
  { name: 'Cloud & tools', meta: 'MySQL, PostgreSQL, Postman, Docker, AWS, Google Cloud, Alibaba Cloud, GitHub Actions' },
  { name: 'AI', meta: 'Claude, Amazon Bedrock, Cursor, AI agent workflows for development and maintenance' },
  { name: 'Languages', meta: 'English (professional), Filipino (native)' },
]

export const BEYOND = [
  { name: 'Basketball', note: 'Teamwork and reading the play.' },
  { name: 'Gym', note: 'Progressive overload, applied to code.' },
  { name: 'Hiking & nature', note: 'One step at a time, eyes on the summit.' },
  { name: 'Family & travel', note: 'The highest priority, and the best perspective.' },
]
