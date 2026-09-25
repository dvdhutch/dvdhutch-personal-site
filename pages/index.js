import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const headerImages = [
  '/images/1a135cc7b8b2025a.jpeg',
  '/images/04317b39f96c893f.jpeg',
  '/images/03d63889705fefc5.jpeg',
  '/images/21deb47f71eb75d2.jpeg',
  '/images/b285c58d954b0c8c.jpeg',
  '/images/0b0fb141483c85df.jpeg',
  '/images/60973c7ae8c207a8.jpeg',
  '/images/290ef31e7db15171.jpeg',
  '/images/c2f6b3871e723ba7.jpeg',
];

export default function Home() {
  const [imageIndex, setImageIndex] = useState(null);

  useEffect(() => {
    setImageIndex(Math.floor(Math.random() * headerImages.length));
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I live in New York and lead <a href="https://www.helvetica-labs.com/" target="_blank">Helvetica Labs</a>.</p>
        <p>Before that I've enjoyed building products and teaching. Some highlights include:</p>
        <ul>
          <li>Built <a href="https://www.landmarkr.app/" target="_blank">Landmarkr</a>. <span className={utilStyles.lightText}>Daily geography guessing game with ~500k plays.</span></li>
          <li>Zankel Fellow at <a href="https://www.columbia.edu/" target="_blank">Columbia University</a>. <span className={utilStyles.lightText}>TA for a robotics course.</span></li>
          <li>CS Teacher at <a href="https://www.las.ch/" target="_blank">Leysin American School</a>. <span className={utilStyles.lightText}>Taught AI/ML.</span></li>
          <li>Product Intern at <a href="https://liveohana.ai/" target="_blank">Ohana</a>. <span className={utilStyles.lightText}>Real estate tech backed by <a href="https://en.wikipedia.org/wiki/Spencer_Rascoff" target="_blank">Zillow founder</a>, among others.</span></li>
          <li>Research at <a href="https://www.psu.edu/" target="_blank">Penn State</a>. <span className={utilStyles.lightText}>Published <a href="https://honors.libraries.psu.edu/catalog/9008dmh6286" target="_blank">thesis</a> on GPT-4 in education.</span></li>
        </ul>
        {imageIndex === null ? (
          <div style={{ width: '100%', aspectRatio: '3 / 1', marginTop: '2rem', marginBottom: '2rem' }} />
        ) : (
          <img
            src={headerImages[imageIndex]}
            alt=""
            onClick={() => setImageIndex((imageIndex + 1) % headerImages.length)}
            style={{ width: '100%', maxWidth: '100%', marginTop: '2rem', marginBottom: '2rem', cursor: "url('/images/pointer_cursor.svg') 19 4, pointer" }}
          />
        )}
        <p>
          <Link href="/about"><a>What I'm reading and writing</a></Link>
        </p>
        <p>
          Connect with me on <a href="https://twitter.com/dvdhutch" target="_blank">twitter</a> or <a href="https://www.linkedin.com/in/dvdhutch/" target="_blank">linkedin</a>, or send a note to david [at] helvetica-labs [dot] com.
        </p>
      </section>
    </Layout>
  );
}
