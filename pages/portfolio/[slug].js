// pages/portfolio/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/layout';
import { useEffect } from 'react';

const projectData = {
  subway: {
    title: 'NYC\'s Underserved Neighborhoods',
    description: 'A deep-dive into New York neighborhoods that are underserved by the New York City Subway.',
    imageUrl: '/images/subway.jpg',
    externalUrl: 'https://storymaps.arcgis.com/stories/3b06e62cea54424eb239c3719842386c', // External URL for this project
  },
  lyf: {
    title: 'Lyf',
    description: 'Detailed description about Lyf project...',
    imageUrl: '/images/lyf.jpg',
    content: (
      <>
        <p>This is a detailed description of the Lyf project. It involved redesigning a fintech app's information architecture.</p>
        <img src="/images/lyf-project-detail.jpg" alt="Lyf project details" />
      </>
    ),
  },
  testapic: {
    title: 'Testapic',
    description: 'Detailed description about Testapic project...',
    imageUrl: '/images/testapic.jpg',
    content: (
      <>
        <p>This is a detailed description of the Testapic project. It involved remote research on digital advertising.</p>
        <img src="/images/testapic-project-detail.jpg" alt="Testapic project details" />
      </>
    ),
  },
  ubisoft: {
    title: 'Ubisoft',
    description: 'Detailed description about Ubisoft project...',
    imageUrl: '/images/ubisoft.jpg',
    content: (
      <>
        <p>This is a detailed description of the Ubisoft project. It involved delivering game user research insights for For Honor.</p>
        <img src="/images/ubisoft-project-detail.jpg" alt="Ubisoft project details" />
      </>
    ),
  },
};

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const project = projectData[slug];

  // Redirect to external URL if it exists and then go back to /portfolio
  useEffect(() => {
    if (project?.externalUrl) {
      window.open(project.externalUrl, '_blank');
      router.push('/portfolio'); // Redirect back to the portfolio page
    }
  }, [project]);

  if (!project) {
    return <p>Project not found.</p>;
  }

  // If there's an external URL, don't render the page content
  if (project.externalUrl) {
    return null; // Prevent rendering if redirecting
  }

  return (
    <Layout>
      <Head>
        <title>{project.title}</title>
      </Head>
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
      {project.content}
    </Layout>
  );
}
