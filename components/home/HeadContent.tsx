import Head from 'next/head';
import { metadata } from '@/app/layout'; // Adjust the import path as per your project structure

const HeadContent = () => {
  return (
    <Head>
      <title>{String(metadata.title) || 'Default Title'}</title>
      <meta name="description" content={String(metadata.description) || 'Default Description'} />
      <meta property="og:title" content={String(metadata.title) || 'Default Title'} />
      <meta property="og:description" content={String(metadata.description) || 'Default Description'} />
      <meta property="og:image" content="/default.png" />
      <meta property="og:url" content="https://dev-bry.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default HeadContent;