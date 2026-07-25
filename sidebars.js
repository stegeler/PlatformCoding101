/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  fundamentalsSidebar: [
    'overview',
    {type: 'category', label: '1. Model mechanics', collapsed: false, items: ['model-mechanics/context-and-sessions']},
    {type: 'category', label: '2. Agent configuration', collapsed: false, items: ['agent-configuration/skills-tools-and-instructions']},
    {type: 'category', label: '3. Intent and planning', collapsed: false, items: ['planning/alignment-prds-and-scope']},
    {type: 'category', label: '4. Decomposing work', collapsed: false, items: ['decomposition/issues-slices-and-prototypes']},
    {type: 'category', label: '5. Agent execution', collapsed: false, items: ['execution/loops-sandboxes-and-parallel-agents']},
    {type: 'category', label: '6. Quality control', collapsed: false, items: ['quality/tests-review-and-feedback']},
    {type: 'category', label: '7. Architecture', collapsed: false, items: ['architecture/deep-modules-and-boundaries']},
    {type: 'category', label: '8. Knowledge lifecycle', collapsed: false, items: ['lifecycle/documentation-and-state']},
    {type: 'category', label: '9. Workflow', collapsed: false, items: ['workflow/end-to-end-playbook']},
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/glossary', 'reference/operating-checklist', 'reference/source-and-attribution'],
    },
  ],
};

export default sidebars;
