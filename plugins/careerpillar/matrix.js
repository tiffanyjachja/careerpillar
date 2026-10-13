// Default competency matrix for the careerpillar.
//
// This is a generic, industry-style ladder. It is written in plain language and
// is NOT any one company's leveling document. To use your own company's matrix,
// import a JSON file with the same shape via "Import Matrix" in the dashboard
// sidebar (stored in your browser only), and save the same file as
// ~/careerpillar-matrix.json so the Claude Code skills pick it up too.
//
// Shape:  { IC: { <Competency>: { <Level>: "<descriptor>" } }, Manager: { ... } }
// Optional: "levelNames": { IC: { IC4: "Senior Software Engineer", ... }, Manager: { ... } }
//           to show your company's job titles next to level keys in the dashboard.
// Levels: IC2–IC8 on the IC track, M3–M6 on the Manager track.

const DEFAULT_MATRIX = {
  IC: {
    Scope: {
      IC2: 'Well-defined tasks, bug fixes, and small features inside one component',
      IC3: 'Standalone features and tools; owns a component end to end',
      IC4: 'Complex features and team-level solutions; influences direction within the team',
      IC5: 'Team architecture and multi-team projects; influence extends beyond the team on a project basis',
      IC6: 'Cross-team, cross-functional initiatives; influence at the organization level',
      IC7: 'Organization-wide or multi-organization work; sets technical direction for a large area',
      IC8: 'Company-wide technical strategy; work spans multiple parts of the company'
    },
    Delivery: {
      IC2: 'Writes, tests, and ships production code; troubleshoots failures; may take part in on-call',
      IC3: 'Solves problems where the goal is clear but the approach is not; manages visible risks',
      IC4: 'Finds and fixes root causes; escalates well; breaks work down; turns requirements into results',
      IC5: 'Consistently excellent contributions; weighs short- against long-term tradeoffs; fixes architecture weaknesses; removes bottlenecks',
      IC6: 'Shapes technical strategy across teams; turns ambiguous requirements into a coherent plan',
      IC7: 'Handles escalations; reduces complexity risk; brings clarity; simplifies large systems',
      IC8: 'Leads strategically critical programs; individual work has material company impact'
    },
    'Design & Architecture': {
      IC2: 'Implements simple, clean solutions within an existing design',
      IC3: 'Designs small components; contributes to design discussions for their area',
      IC4: 'Independently improves and simplifies existing components; leads medium-sized designs; mentors junior engineers',
      IC5: 'Leads design of the most critical components; sets patterns, practices, and tooling; reviews designs beyond the team',
      IC6: 'Creates migration plans; leads mission-critical designs; gives build-vs-buy guidance; reviews cross-team designs',
      IC7: 'Reduces redundancy across a large organization; makes strategic decisions aligned with company vision; guides teams on best practices',
      IC8: 'Simplifies company-wide design; leads company-wide technical initiatives and communities'
    },
    'Collaboration & Citizenship': {
      IC2: 'Listens actively; asks clarifying questions; keeps others updated',
      IC3: 'Explains ideas clearly; participates in planning and design; may mentor juniors',
      IC4: 'Explains complex concepts to technical and non-technical audiences; mentors; interviews at and below their level',
      IC5: 'Leads technical discussions; drives alignment; resolves conflicts; produces artifacts that speed up decisions',
      IC6: 'Communicates vision and strategy to diverse audiences; leads large projects; represents engineering externally (talks, writing, community)',
      IC7: 'Communicates complex strategy at the organization level; mentors senior leaders; assesses promotions',
      IC8: 'Shapes industry standards; influences external communities; aligns stakeholders on long-term strategy'
    },
    'Process Improvement': {
      IC2: 'Follows engineering and operational standards; contributes to dashboards and documentation',
      IC3: 'Improves standards; independently implements process improvements within the team',
      IC4: "Drives the team's engineering and operational standards; speeds up delivery; automates tests and manual work",
      IC5: 'Leads projects that streamline systems and processes; improves standards across several teams',
      IC6: 'Sets engineering and operational standards for the organization; improves speed and iteration of business results',
      IC7: 'Sets the standard for engineering excellence across a large organization; leads technical governance',
      IC8: 'Defines future process standards; recognized as an industry leader'
    }
  },
  Manager: {
    Scope: {
      M3: 'Leads one team; sets clear goals and owns team execution',
      M4: 'Leads several teams or a large team; coordinates with adjacent team leads',
      M5: 'Manager of managers; sets engineering direction for a major area of the organization',
      M6: 'Multi-organization or company-wide scope; shapes engineering strategy at scale'
    },
    Delivery: {
      M3: 'Accountable for team delivery; removes blockers; manages priorities and the engineering roadmap',
      M4: 'Drives consistent delivery across teams; manages dependencies; weighs short- against long-term tradeoffs',
      M5: 'Sets delivery standards for the organization; accountable for organization-level outcomes',
      M6: 'Ensures delivery excellence at company scale; leads complex multi-organization programs'
    },
    'Collaboration & Citizenship': {
      M3: 'Partners with product and design; advocates for the team; builds cross-functional relationships',
      M4: 'Builds alignment across teams; collaborates with senior leaders; contributes to strategic initiatives',
      M5: 'Shapes engineering culture; drives initiatives with other organizations; represents engineering at the executive level',
      M6: 'Connects engineering to company strategy; influences the industry externally'
    },
    'Process Improvement': {
      M3: 'Drives process improvements within the team; finds and removes bottlenecks',
      M4: 'Sets process standards across teams; drives operational excellence',
      M5: 'Sets organization-wide standards; improves people processes such as onboarding and training',
      M6: 'Defines process standards at company scale; recognized as an operational leader'
    },
    'Technical Strategy': {
      M3: 'Understands the team\'s systems fully; guides the team during escalations; accountable for system health',
      M4: 'Takes part in technical design reviews; drives technical excellence with measurable results',
      M5: 'Aligns with multi-organization technical strategy; makes architecture decisions with organization-wide impact; gives build-vs-buy guidance',
      M6: 'Finds alignment and simplification opportunities across organizations; guides teams on industry trends'
    },
    'Team Building': {
      M3: 'Sets clear goals and expectations; hires, motivates, and develops engineers; gives feedback; resolves conflicts',
      M4: 'Mentors managers and senior engineers; defines roles and responsibilities; leads through change',
      M5: 'Communicates vision and strategy; mentors senior managers and principal engineers; has a succession plan; drives engagement',
      M6: 'Connects teams around the organization\'s vision; designs scalable hiring, onboarding, and mentoring; designs org structures'
    }
  }
};
