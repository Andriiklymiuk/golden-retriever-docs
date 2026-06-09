import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🔄 Git-synced collections',
    description: (
      <>
        Collections are Postman v2.1 JSON under <code>collections/</code>, versioned in your repo
        right next to the code. No export, no second source of truth.
      </>
    ),
  },
  {
    title: '🖥️ Editor, terminal & CI',
    description: (
      <>
        The same files run in the VS Code extension, the <code>golden</code> CLI, and your pipeline.
        Edit in the editor, gate every PR in CI.
      </>
    ),
  },
  {
    title: '🤖 AI-agent ready',
    description: (
      <>
        Non-interactive, speaks <code>--reporter json</code>, branchable exit codes, and ships a
        Claude Code plugin so an agent can drive it.
      </>
    ),
  },
  {
    title: '🧪 Real tests',
    description: (
      <>
        A <code>pm.*</code> / chai sandbox — assertions, env chaining, data-driven runs,
        <code>setNextRequest</code> — diffed against newman for conformance.
      </>
    ),
  },
  {
    title: '🌐 REST & GraphQL',
    description: (
      <>
        Query params, header bulk-edit, REST and GraphQL body editors, <code>curl</code> generation,
        and local request history.
      </>
    ),
  },
  {
    title: '📦 One static binary',
    description: (
      <>
        Static musl Linux (rustls, no OpenSSL), native macOS (Intel + Apple Silicon) and Windows.
        Nothing to install at runtime.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
