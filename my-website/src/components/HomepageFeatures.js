import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'It is fast..',
    Svg: require('../../static/img/bow.svg').default,
    description: (
      <>
     
      </>
    ),
  },
  {
    title: '...easy...',
    Svg: require('../../static/img/fire.svg').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: '...yet effective',
    Svg: require('../../static/img/cooking.svg').default,
    description: (
      <>
 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
