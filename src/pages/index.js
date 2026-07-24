import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const fundamentals = [
  {number: '01', title: 'Model mechanics', description: 'Keep work inside the model’s effective context. Treat clearing, compaction, and delegation as deliberate state-management choices.', link: '/docs/model-mechanics/context-and-sessions'},
  {number: '02', title: 'Agent configuration', description: 'Separate capabilities from procedures. Push only durable rules; let agents pull specialized skills when needed.', link: '/docs/agent-configuration/skills-tools-and-instructions'},
  {number: '03', title: 'Intent and planning', description: 'Interrogate ambiguous ideas, capture the destination in a PRD, and preserve rejected choices as explicit scope boundaries.', link: '/docs/planning/alignment-prds-and-scope'},
  {number: '04', title: 'Decomposing work', description: 'Convert the destination into small, dependency-aware vertical slices that produce integrated feedback early.', link: '/docs/decomposition/issues-slices-and-prototypes'},
  {number: '05', title: 'Agent execution', description: 'Run bounded loops with explicit task selection, isolation, stop conditions, and human-owned orchestration.', link: '/docs/execution/loops-sandboxes-and-parallel-agents'},
  {number: '06', title: 'Quality control', description: 'Use tests, fresh-context review, deterministic checks, and human QA as the agent’s feedback system.', link: '/docs/quality/tests-review-and-feedback'},
  {number: '07', title: 'Architecture', description: 'Prefer deep modules and clear interfaces so humans retain the system map while agents implement bounded internals.', link: '/docs/architecture/deep-modules-and-boundaries'},
  {number: '08', title: 'Knowledge lifecycle', description: 'Move durable state into code, issues, commits, and current documentation. Remove stale planning artifacts after use.', link: '/docs/lifecycle/documentation-and-state'},
];

function FundamentalCard({number, title, description, link}) {
  return (
    <Link className={styles.card} to={link}>
      <span className={styles.cardNumber}>{number}</span>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
      <span className={styles.cardLink}>Read topic <span aria-hidden="true">→</span></span>
    </Link>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.eyebrow}>FIELD GUIDE · AI-ASSISTED SOFTWARE ENGINEERING</div>
        <Heading as="h1" className={styles.heroTitle}>
          Keep the agent <span>smart, bounded, and accountable.</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          A practical mental model for turning ambiguous product intent into small, testable, reviewable units of AI-executed work.
        </p>
        <div className={styles.heroActions}>
          <Link className={clsx('button button--primary button--lg', styles.primaryButton)} to="/docs/overview">Start with the mental model</Link>
          <Link className={clsx('button button--secondary button--lg', styles.secondaryButton)} to="/docs/workflow/end-to-end-playbook">Use the playbook</Link>
        </div>
        <div className={styles.systemLine} aria-label="Workflow summary">
          <span>ALIGN</span><i /><span>SPECIFY</span><i /><span>SLICE</span><i /><span>EXECUTE</span><i /><span>VERIFY</span>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="AI Agent Engineering Fundamentals" description="A practical guide to context windows, skills, tools, compaction, PRDs, vertical slices, agent loops, testing, review, and agent-friendly architecture.">
      <HomepageHeader />
      <main>
        <section className={styles.principleBand}>
          <div className={clsx('container', styles.principleGrid)}>
            <div>
              <span className={styles.kicker}>CORE CONSTRAINT</span>
              <Heading as="h2">The model is not equally capable across its entire context window.</Heading>
            </div>
            <p>The workflow compensates by keeping tasks small, storing state in explicit artifacts, and using fresh contexts for implementation and review.</p>
          </div>
        </section>

        <section className={styles.fundamentalsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div><span className={styles.kicker}>THE FUNDAMENTALS</span><Heading as="h2">Eight systems that work together</Heading></div>
              <p>Each topic is concise enough to scan and specific enough to apply.</p>
            </div>
            <div className={styles.cardGrid}>{fundamentals.map((item) => <FundamentalCard key={item.number} {...item} />)}</div>
          </div>
        </section>

        <section className={styles.workflowSection}>
          <div className={clsx('container', styles.workflowGrid)}>
            <div>
              <span className={styles.kicker}>OPERATING MODEL</span>
              <Heading as="h2">Humans own intent and judgment. Agents own bounded execution.</Heading>
              <p>The point is reliable throughput without losing design control, architectural understanding, or review quality.</p>
              <Link className="button button--primary" to="/docs/reference/operating-checklist">Open the operating checklist</Link>
            </div>
            <div className={styles.shiftPanel}>
              <div><span>DAY SHIFT</span><strong>Human-led</strong><p>Discovery · alignment · design · prioritization · product QA</p></div>
              <div><span>NIGHT SHIFT</span><strong>Agent-led</strong><p>Explore · implement · test · commit · report</p></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
