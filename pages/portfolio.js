// pages/portfolio.js
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/portfolio.module.css';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: 'Landar',
      description: 'Led a mixed methods user research project on mastering',
      imageUrl: '/images/landr.jpg',
    },
    {
      title: 'Lyf',
      description: 'Redesigned a fintech app information architecture',
      imageUrl: '/images/lyf.jpg',
    },
    {
      title: 'Testapic',
      description: 'Carried out remote research to learn more about digital advertising',
      imageUrl: '/images/testapic.jpg',
    },
    {
      title: 'Ubisoft',
      description: 'Delivered Game User Research insights on For Honor',
      imageUrl: '/images/ubisoft.jpg',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Portfolio</h1>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <img src={project.imageUrl} alt={project.title} className={styles.image} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
