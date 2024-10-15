// pages/portfolio/index.js
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../styles/portfolio.module.css';
import Link from 'next/link';
// here is a 
export default function Portfolio() {
  const projects = [
    {
      title: 'NYC\'s Underserved Neighborhoods',
      description: 'A deep-dive into New York neighborhoods that are underserved by the New York City Subway.',
      imageUrl: '/images/subway.jpg',
      slug: 'subway',
    },
    {
      title: 'A Brief History of the University',
      description: 'A scoping account of the university, including its contribution to Western values such as liberalism and democracy, and the changing nature of the university in response to demographic and economic trends.',
      imageUrl: '/images/lyf.jpg',
      slug: 'uni',
    },
    {
      title: 'Testapic',
      description: 'Carried out remote research to learn more about digital advertising',
      imageUrl: '/images/testapic.jpg',
      slug: 'testapic',
    },
    {
      title: 'Ubisoft',
      description: 'Delivered Game User Research insights on For Honor',
      imageUrl: '/images/ubisoft.jpg',
      slug: 'ubisoft',
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
            <Link key={index} href={`/portfolio/${project.slug}`}>
              <div className={styles.card}>
                <img src={project.imageUrl} alt={project.title} className={styles.image} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
