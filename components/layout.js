// components/layout.js
import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'David Hutchinson';
export const siteTitle = 'David Hutchinson';

export default function Layout({ children, home, isPortfolio }) {
  return (
    <div className={`${styles.container} ${isPortfolio ? styles.portfolioContainer : ''}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="David Hutchinson" />
        <meta property="og:image" content={`https://s.turbifycdn.com/aah/paulgraham/index-14.gif`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Transparent Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/"><a className={styles.navLink}>Home</a></Link>
          <Link href="/portfolio"><a className={styles.navLink}>Portfolio</a></Link>
          <Link href="/essays"><a className={styles.navLink}>Essays</a></Link>
        </div>
      </nav>

      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      {children}
    </div>
  );
}
