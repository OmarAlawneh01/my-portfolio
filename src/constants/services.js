// QA practice areas — the testing disciplines shown in the Practice section
import { FiSearch, FiFileText, FiServer, FiCpu, FiZap, FiAlertOctagon } from 'react-icons/fi';

export const qaServicesData = [
  {
    id: 1,
    icon: FiSearch,
    title: 'Manual & Exploratory Testing',
    description:
      'Black-box and exploratory testing using proven techniques: Equivalence Partitioning, Boundary Value Analysis, State Transition, and Decision Table testing.',
  },
  {
    id: 2,
    icon: FiFileText,
    title: 'Test Case Design & Documentation',
    description:
      'Structured test plans, detailed test cases, and clear traceability — managed in Azure DevOps Test Plans and Jira with full Agile/Scrum integration.',
  },
  {
    id: 3,
    icon: FiServer,
    title: 'API Testing',
    description:
      'REST API validation with Postman and Fiddler — covering CRUD operations, authentication flows, assertions, environment variables, and collection runners.',
  },
  {
    id: 4,
    icon: FiCpu,
    title: 'Test Automation',
    description:
      'Automated test suites with Selenium (Java) and Cypress, enabling fast, repeatable regression coverage alongside manual testing.',
  },
  {
    id: 5,
    icon: FiZap,
    title: 'Performance Testing',
    description:
      'Load and stress testing with Apache JMeter to identify bottlenecks, validate response times, and confirm behavior under concurrent-user load.',
  },
  {
    id: 6,
    icon: FiAlertOctagon,
    title: 'Bug Reporting & Defect Management',
    description:
      'Reproducible defect reports with severity and priority classification, full lifecycle tracking in Azure DevOps, and root-cause analysis for engineering teams.',
  },
];
