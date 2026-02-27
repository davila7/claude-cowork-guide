import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Context Over Prompts',
    description: (
      <>
        ChatGPT trained you to write better prompts. Cowork trains you to build
        better context. One is a skill that depreciates. The other compounds.
      </>
    ),
  },
  {
    title: '21 Plugins, Ranked',
    description: (
      <>
        Not all plugins are equal. Our tier list ranks every official plugin from
        S to C based on real-world testing — so you know what to install first.
      </>
    ),
  },
  {
    title: 'Ready-to-Use Templates',
    description: (
      <>
        Context files, global instructions, folder instructions, and tested
        prompts. Copy, customize, and start working in minutes.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md" style={{paddingTop: '2rem'}}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
