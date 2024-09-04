// pages/portfolio/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';


const projectData = {
  subway: {
    title: 'NYC\'s Underserved Neighborhoods',
    description: 'A deep-dive into New York neighborhoods that are underserved by the New York City Subway.',
    imageUrl: '/images/landr.jpg',
  },
  lyf: {
    title: 'Lyf',
    description: 'Detailed description about Lyf project...',
    imageUrl: '/images/lyf.jpg',
  },
  testapic: {
    title: 'Testapic',
    description: 'Detailed description about Testapic project...',
    imageUrl: '/images/testapic.jpg',
  },
  ubisoft: {
    title: 'Ubisoft',
    description: 'Detailed description about Ubisoft project...',
    imageUrl: '/images/ubisoft.jpg',
  },
};

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const project = projectData[slug];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <Layout>
      <Head>
        <title>{project.title}</title>
      </Head>
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
    </Layout>
  );
}
