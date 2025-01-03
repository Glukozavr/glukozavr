import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useHistory } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

const imagesCredits = '<a href="https://www.freepik.com/free-vector/player-characters-online-game-concept_8131809.htm#fromView=search&page=2&position=2&uuid=33af6d3d-b1e1-4e8c-9350-519a6856dcab">Image by freepik</a>';
const imagesCredits2 = '<a href="https://www.freepik.com/free-vector/folklore-music-isolated-icon-set-with-usa-norway-germany-ukraine-couples-vector-illustration_41922685.htm#fromView=search&page=2&position=36&uuid=e5f48089-2250-4869-95a7-af26d3f39e2f">Image by macrovector on Freepik</a>'

const FeatureList = [
  {
    title: 'homepage.feature1.title',
    // Svg: require('@site/static/img/feature-engineer.svg').default,
    Img: require('@site/static/img/stroked-photo.png').default,
    description: 'homepage.feature1.text',
    Url: '/docs/',
  },
  {
    title: 'homepage.feature2.title',
    // Svg: require('@site/static/img/feature-gaming.svg').default, 
    Img: require('@site/static/img/stroked-npo-logo.png').default,
    description: 'homepage.feature2.text',
    Url: 'https://notpublicopinion.com/',
  },
  {
    title: 'homepage.feature3.title',
    // Svg: require('@site/static/img/feature-ukraine.svg').default,
    Img: require('@site/static/img/come-back-alive.png').default,
    Url: 'https://savelife.in.ua/en/donate-en/#donate-army-card-once/',
    description: 'homepage.feature3.text',
  },
];

function Feature({Svg, Img, title, description, Url}) {
  const history = useHistory();

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={Url} ><img src={Img} alt="Logo" /></Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><Translate id={title}></Translate></Heading>
        <p><Translate id={description}></Translate></p>
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
