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
      title: 'Academic Wagers',
      description: 'Polymarket-stle wagers on academic outcomes. Making learning engaging, fun, and rewarding.',
      imageUrl: '/images/academic_wagers_img.png',
      slug: 'academic_wagers',
    },
    {
      title: 'Ohana Neighborhood Informational Tool',
      description: 'Ohana\'s ultimate guide to subletting - featuring the best neighborhoods to live in, and the things that are happening in them. Worked with team to build the front-end, and has since expanded to service other geographies.',
      imageUrl: '/images/Ohana neighborhood homepage final 2.png',
      slug: 'ohana_neighborhood',
    },
    {
      title: 'Ohana Corporate Blog',
      description: 'Ideated, sketched, protyped, and built Ohana\'s corporate blog for company announcements and SEO marketing.',
      imageUrl: '/images/Ohana blog page final.png',
      slug: 'ohana_blog',
    },
    {
      title: 'Student Perceptions of Digital Learning Technology: A Cross-Cultural Analysis of Music Students',
      description: 'Qualitative analysis of student\'s perceptions of digital learning technology at the Penn State School of Music and University of Oxford Faculty of Music.',
      imageUrl: 'https://media.architecturaldigest.com/photos/563000c2bf2db2f83856e12c/16:9/w_3040,h_1710,c_limit/harry-potter-sets-christ-church-college-oxford15.jpg',
      slug: 'thesis',
    },
    {
      title: 'NYC\'s Underserved Neighborhoods',
      description: 'A deep-dive into New York neighborhoods that are underserved by the New York City Subway.',
      imageUrl: '/images/subway.jpg',
      slug: 'subway',
    },
    {
      title: 'A Brief History of the University',
      description: 'A scoping account of the university, including its contribution to Western values such as liberalism and democracy, and the changing nature of the university in response to demographic and economic trends.',
      imageUrl: 'https://www.uni-wittenberg.de/wp-content/uploads/image/jpeg/Leuorea_1644_Ausschnitt.jpg',
      slug: 'uni',
    },
    {
      title: 'Tales of Water and Mountains',
      description: 'Geography is deterministic. For some, geography is destiny. For others, geography is fate. For Williamsport,a moderately large city situated on the West Branch of the Susquehanna River, as well as the principal cultural, economical, and commercial node of Central Pennsylvania, geography tells the story of of how and why a modest village became the wealthiest place in the world.',
      imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6VA6d2Qd4dsPoS7kCXeAyqaXZVBBZWVQj83AYia51Tj-Nso-naTeo-BUotriI_HZ1lZfUrj9C90BM0Dzy-U_pGuotiLBE7B05zP9TXvKQlBSSBFpnrTJ-MDzmRifvmJCUo_oF24ioMfeACC7bRpJdN5haerID8gZQIEFKK9FjpKjfQBgdyy0cHlzFRg/s1000/labeled%20williamsport.jpg',
      slug: 'williamsport',
    },
  ];

  return (
    <Layout isPortfolio>
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
