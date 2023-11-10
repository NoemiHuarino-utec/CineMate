import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Recomendaciones Personalizadas',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Cinemate utiliza inteligencia artificial para ofrecerte recomendaciones de películas personalizadas basadas en tus gustos.
      </>
    ),
  },
  {
    title: 'Descubre Nuevas Películas',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Con Cinemate, podrás descubrir nuevas películas que se ajusten a tus preferencias y ampliar tu repertorio cinematográfico.
      </>
    ),
  },
  {
    title: 'Tu Feedback Importa',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Da like o dislike a las peliculas que te salen para que nuestra IA se ajuste mejor a tus preferencias y haga cada vez mejores recomendaciones.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
      /*  <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div> */
    <div className={clsx('col col--4')}>
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
