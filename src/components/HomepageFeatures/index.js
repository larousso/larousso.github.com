import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: 'Recettes',
    Img: 'img/ramen6.png',
    width: '400px',
    Link: 'docs/intro',
    description: (
      <>
        Le cauchemar en cuisine
      </>
    ),
  },
  {
    title: 'Article tech',
    Img: 'img/oldcomputer.png',
    Link: 'blog',
    description: (
      <>
        Blog tech sur java, postgresql etc
      </>
    ),
  }
];

function Feature({Img, width, Link, title, description}) {
  return (
    <div className={clsx('col col--6')}>
        <a href={Link} >
          <div className="text--center">
              <img src={Img} width={width}/>
          </div>
        </a>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
