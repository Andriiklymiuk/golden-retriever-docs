import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './index.module.css';

function TerminalBlock({label, language, children}: {label: string; language: string; children: string}) {
  return (
    <div className={styles.terminal}>
      <div className={styles.terminalChrome}>
        <span className={styles.terminalDot} aria-hidden />
        <span className={styles.terminalLabel}>{label}</span>
      </div>
      <CodeBlock language={language}>{children}</CodeBlock>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const logoUrl = useBaseUrl('/img/logo.png');
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={clsx(styles.heroLogo, styles.heroFadeIn)}>
          <img src={logoUrl} alt="Golden Retriever logo" />
        </div>
        <h1 className={clsx(styles.heroTitle, styles.heroFadeIn)}>
          {siteConfig.title.replace(' 🦮', '')} <span className={styles.heroAccent}>🦮</span>
        </h1>
        <p className={clsx(styles.heroTagline, styles.heroFadeInDelay)}>{siteConfig.tagline}</p>

        <div className={clsx(styles.installShell, styles.heroFadeInDelay, 'installTabsRoot')}>
          <Tabs groupId="install">
            <TabItem value="brew" label="Homebrew" default>
              <TerminalBlock label="zsh — macOS / Linux" language="bash">
                {'brew install andriiklymiuk/homebrew-tools/golden'}
              </TerminalBlock>
            </TabItem>
            <TabItem value="script" label="Install script">
              <TerminalBlock label="zsh — no Homebrew needed" language="bash">
                {"curl --proto '=https' --tlsv1.2 -LsSf \\\n  https://github.com/Andriiklymiuk/golden-cli/releases/latest/download/golden-cli-installer.sh | sh"}
              </TerminalBlock>
            </TabItem>
            <TabItem value="powershell" label="PowerShell">
              <TerminalBlock label="pwsh — Windows" language="powershell">
                {'irm https://github.com/Andriiklymiuk/golden-cli/releases/latest/download/golden-cli-installer.ps1 | iex'}
              </TerminalBlock>
            </TabItem>
            <TabItem value="cargo" label="Cargo">
              <TerminalBlock label="from source — Rust 1.82+" language="bash">
                {'cargo install --git https://github.com/Andriiklymiuk/golden-cli golden-cli'}
              </TerminalBlock>
            </TabItem>
            <TabItem value="claude" label="Claude Code">
              <TerminalBlock label="Claude Code — install the plugin" language="text">
                {'/plugin marketplace add Andriiklymiuk/golden-cli\n/plugin install golden@golden\n\n# also install the golden CLI (see the other tabs) — the plugin shells out to it'}
              </TerminalBlock>
            </TabItem>
          </Tabs>
        </div>

        <div className={clsx(styles.installShell, styles.tryItBlock, styles.heroFadeInDelay2)}>
          <TerminalBlock label="try it" language="bash">
            {'golden -h                    # verify install\n\ngolden init                  # seed a sample collection under collections/\ngolden run collections/      # run everything; exit 0=pass 1=fail 2=error\ngolden                       # no args → interactive TUI'}
          </TerminalBlock>
        </div>

        <div className={clsx(styles.ctaRow, styles.heroFadeInDelay2)}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Read the docs <span aria-hidden>·</span> 5 min ⏱️
          </Link>
          <Link
            className={styles.secondaryButton}
            to="https://marketplace.visualstudio.com/items?itemName=andriiklymiuk.golden-retriever">
            <span aria-hidden>{'</>'}</span> VS Code extension
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Golden Retriever — REST & GraphQL collections in your editor, terminal, CI & AI agents"
      description="Run Postman v2.1 collections from your editor, the terminal, CI, or an AI agent — git-synced, one source of truth.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
