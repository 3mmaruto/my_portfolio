export const navigationItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const siteContent = {
  hero: {
    kicker: 'Ammar',
    titleLines: ['IT Engineer', 'Backend, deployment, and ML workflow focus'],
    summary:
      'I work on practical software systems across backend development, live website delivery, cloud-oriented deployment preparation, and machine learning experimentation, with a growing interest in how software engineering and AI can connect inside useful products.',
    note:
      'My strongest practical work so far centers on a live business website workflow and a Laravel backend project, supported by academic machine learning study.',
  },
  about: {
    eyebrow: 'About',
    title: 'A systems-oriented profile built around practical implementation.',
    description:
      'I am an IT engineer with practical project experience across backend development, API design, database-backed systems, static website delivery, cloud-oriented deployment workflows, and machine learning experimentation.',
    paragraphs: [
      'I care about clean structure, practical engineering decisions, and understanding how real technical workflows move from code to deployment.',
      'Rather than treating development as isolated tools, I focus on how a project is organized, how data moves through it, how it is deployed, and how it can evolve into something more complete over time.',
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Workflow-oriented strengths shaped by real implementation.',
    description:
      'My current skill set reflects backend systems, deployment workflows, live static website delivery, and machine learning fundamentals that I have actually used in practice.',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Real projects across delivery workflows, backend systems, and ML foundations.',
    description:
      'These projects reflect the kind of work I have actually implemented so far: a live business website, a Laravel backend system, and an academic ML study focused on preprocessing and model comparison.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let\'s connect',
    description:
      'I am continuing to build my skills across software engineering, deployment-oriented workflows, and AI / ML foundations, and I am open to practical technical opportunities, thoughtful collaboration, and project-based work.',
    email: '3mmaruto.bloot@gmail.com',
    phone: '0935930978',
    github: 'https://github.com/3mmaruto',
    note: 'Available on WhatsApp and Telegram',
  },
}

export const skillGroups = [
  {
    title: 'Backend and APIs',
    description: 'Built around Laravel project work, API endpoints, relational data structure, and backend organization.',
    items: ['PHP', 'Laravel', 'REST-style APIs', 'Eloquent ORM', 'Database design', 'Laravel migrations', 'JSON responses', 'Sanctum exposure'],
  },
  {
    title: 'Deployment and Workflow',
    description: 'Hands-on experience with repository workflow, static delivery, deployment preparation, and cloud-facing tooling.',
    items: ['Git', 'GitHub', 'GitHub Desktop', 'GitHub Pages', 'GitHub Actions basics', 'Docker preparation', 'Google Cloud Build exposure', 'Cloud Run exposure', 'Cloud Console workflow'],
  },
  {
    title: 'Web Delivery and ML Foundations',
    description: 'Practical website delivery on one side, and academic machine learning workflow on the other.',
    items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap customization', 'Responsive layout', 'Cloudflare integration', 'Custom domains', 'Basic SEO / indexing awareness', 'Python', 'Pandas', 'Scikit-learn', 'TensorFlow / Keras basics'],
  },
]

export const projectCards = [
  {
    title: 'Gold Group Business Website',
    tag: 'Live Website / Delivery Workflow',
    summary:
      'A live multi-page business website adapted for a real company use case, with practical work across structure, deployment, custom domain setup, Cloudflare integration, and search visibility basics.',
    details: [
      'Built and customized a multi-page static business website using HTML, CSS, JavaScript, and Bootstrap.',
      'Configured deployment through GitHub Pages and connected the live custom domain gold-group-hvac.com.',
      'Worked through Cloudflare integration, repository cleanup, project structure refinement, and lightweight dynamic product/spec handling.',
      'Treated the project as both a frontend delivery task and a real live publishing workflow.',
    ],
    links: [
      { label: 'Live site', href: 'https://gold-group-hvac.com/' },
      { label: 'Repository', href: 'https://github.com/3mmaruto/gold-website' },
    ],
  },
  {
    title: 'Trip Booking Backend System',
    tag: 'Backend / APIs / Deployment Prep',
    summary:
      'A Laravel-based backend project for transportation and booking data, structured around models, migrations, and JSON-serving API endpoints.',
    details: [
      'Built with Laravel 12 and PHP 8.2 around governorates, trips, and seat data.',
      'Defined migrations, schema structure, and model relationships using Eloquent ORM.',
      'Created REST-style routes for trip and seat retrieval, with Sanctum present for authentication exposure.',
      'Prepared the project for container-based deployment flow using Docker, Cloud Build, and Cloud Run exposure.',
    ],
    links: [
      { label: 'Repository', href: 'https://github.com/3mmaruto/laravel-safrah' },
    ],
  },
  {
    title: 'Titanic Machine Learning and Neural Network Study',
    tag: 'Academic ML / Model Comparison',
    summary:
      'An academic machine learning project focused on preprocessing, classification workflow, model comparison, and basic neural network understanding rather than deployed AI product work.',
    details: [
      'Worked through preprocessing steps including missing values, encoding, and scaling.',
      'Compared KNN and Decision Tree models and evaluated results with confusion matrices and classification metrics.',
      'Implemented a simple MLP neural network using TensorFlow / Keras basics.',
      'Used the project primarily to strengthen ML workflow fundamentals and neural network understanding.',
    ],
    links: [
      { label: 'Repository', href: 'https://github.com/3mmaruto/machine_learning-neural_network-data_analysis_projects' },
    ],
  },
]
