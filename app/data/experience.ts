type ExperienceType = {
  title: string;
  companyName: string;
  description: string[];
  durationWorkTime: string;
};
export const experience: ExperienceType[] = [
  {
    title: "Senior Backend Developer",
    companyName: "System Group",
    description: [
      "Own business-critical features with complex domain logic across the Financial and Cost Accounting modules of a 100+ engineer ERP platform serving 400+ active users, from technical design through delivery.",
      "Reduced resource usage by up to 40% on high-traffic features such as Excel import/export by redesigning backend logic and optimizing PostgreSQL queries.",
      "Improved the design and review of complex financial queries and reports, increasing report generation speed and cutting resource consumption by up to 15%.",
      "Designing and developing the Cost Accounting Management module end-to-end, currently in active implementation.",
      "Built and maintained BDD test coverage (Gherkin/Cucumber) to validate business requirements and catch regressions before production; serve as technical owner leading code reviews and driving architecture decisions.",
      "Built an AI-powered internal agent to investigate flaky tests and cut manual investigation effort; apply AI-native workflows (Cursor, Claude, OpenCode) across implementation, refactoring, and code review.",
    ],
    durationWorkTime: "Nov 2023 – Present",
  },
  {
    title: "Software Engineer",
    companyName: "Part Group",
    description: [
      "Built Nest.js microservices integrating with machine learning APIs, improving system efficiency and reducing latency for downstream services.",
      "Introduced CI/CD practices for the team, shortening release cycles and improving software quality.",
      "Optimized microservices to handle production workloads of up to 18,000 requests/day; diagnosed and resolved resource contention and memory leaks, cutting required compute resources by ~30%.",
    ],
    durationWorkTime: "Apr 2022 – Nov 2023",
  },
  {
    title: "Freelance Software Engineer",
    companyName: "Self-Employed",
    description: [
      "Built a document management platform with a Node.js/Express REST API, replacing a manual departmental workflow.",
    ],
    durationWorkTime: "Apr 2021 – Nov 2021",
  },
  {
    title: "Software Engineer",
    companyName: "Honari",
    description: [
      "Maintained e-commerce backend APIs (PHP/MySQL); improved order-processing throughput by 25% and cut query times by 50% via caching and indexing.",
    ],
    durationWorkTime: "Feb 2020 – Mar 2021",
  },
  {
    title: "Software Engineer",
    companyName: "Kamva.ir",
    description: [
      "Rebuilt an e-commerce platform's frontend in React (-40% load time) and built an internal admin portal for inventory, order, and customer management.",
    ],
    durationWorkTime: "Nov 2017 – Jan 2020",
  },
];
