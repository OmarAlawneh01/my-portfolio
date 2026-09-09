// Professional experience data — kept factual and in sync with resume
export const experienceData = [
  {
    id: 1,
    role: 'QA Specialist',
    company: 'Dalil Information Technology',
    location: 'Irbid, Jordan',
    period: '04/2026 – Present',
    current: true,
    summary:
      'Testing enterprise web platforms end to end — functional, API, performance, and security — across multiple client systems including IAM, BPM/GRC, and AI-assisted service platforms.',
    highlights: [
      'Own the full manual QA cycle — test case design, execution, defect reporting, and regression testing — reporting through Azure DevOps with clear reproduction steps, severity, and priority.',
      'Designed and executed end-to-end test plans scaled to each platform, from focused regression checks to full-coverage test suites.',
      'Identified high- and critical-severity defects, including cross-tenant access control gaps, session-handling flaws, and data integrity issues, before production release.',
      'Built an OWASP-aligned security test suite (authentication, session management, authorization, input validation, file upload, API/business logic) and Apache JMeter performance test plans executed across multiple concurrent-user loads.',
      'Validated REST APIs with Postman and Fiddler, and verified backend data integrity directly with SQL and MongoDB queries.',
      'Covered localization/RTL (Arabic) behavior and cross-browser/device compatibility as part of full-lifecycle testing engagements.',
    ],
    tools: ['Azure DevOps', 'Postman', 'Fiddler', 'Apache JMeter', 'SQL', 'MongoDB', 'Selenium', 'Cypress'],
  },
  {
    id: 2,
    role: 'Backend Developer Intern',
    company: 'Hydra Software L.L.C (Zagetrader)',
    location: 'Amman, Jordan',
    period: '07/2025 – 10/2025',
    current: false,
    summary:
      'Developed backend features for a trading-platform product, applying software design patterns and validating functionality with unit tests.',
    highlights: [
      'Developed backend features using PHP, MySQL, AJAX, and REST APIs, following established software design patterns.',
      'Built authentication systems and CRUD operations, and wrote unit tests to validate functionality before handoff.',
    ],
    tools: ['PHP', 'MySQL', 'AJAX', 'REST APIs'],
  },
];
