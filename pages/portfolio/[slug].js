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
  uni: {
    title: 'A Brief History of the University',
    description: 'A scoping account of the university, including its contribution to Western values such as liberalism and democracy, and the changing nature of the university in response to demographic and economic trends.',
    imageUrl: 'https://www.uni-wittenberg.de/wp-content/uploads/image/jpeg/Leuorea_1644_Ausschnitt.jpg',
    externalUrl: 'https://sites.psu.edu/academy/2023/11/03/a-brief-history-of-the-university/',
  },
  williamsport: {
    title: 'Tales of water and mountains',
    description: 'Geography is deterministic. For some, geography is destiny. For others, geography is fate. For Williamsport,a moderately large city situated on the West Branch of the Susquehanna River, as well as the principal cultural, economical, and commercial node of Central Pennsylvania, geography tells the story of of how and why a modest village became the wealthiest place in the world.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6VA6d2Qd4dsPoS7kCXeAyqaXZVBBZWVQj83AYia51Tj-Nso-naTeo-BUotriI_HZ1lZfUrj9C90BM0Dzy-U_pGuotiLBE7B05zP9TXvKQlBSSBFpnrTJ-MDzmRifvmJCUo_oF24ioMfeACC7bRpJdN5haerID8gZQIEFKK9FjpKjfQBgdyy0cHlzFRg/s1000/labeled%20williamsport.jpg',
    externalUrl: 'https://sites.psu.edu/academy/2023/12/03/tales-of-water-and-mountains/',
  },
  thesis: {
    title: 'Student Perceptions of Digital Learning Technology: A Cross-Cultural Analysis of Music Students',
    description: 'Detailed description about Ubisoft project...',
    imageUrl: 'https://media.architecturaldigest.com/photos/563000c2bf2db2f83856e12c/16:9/w_3040,h_1710,c_limit/harry-potter-sets-christ-church-college-oxford15.jpg',
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
