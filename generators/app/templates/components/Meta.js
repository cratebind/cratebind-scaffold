const metaData = {
  title:
    'CrateBind. Digital products that attract, convert and delight consumers. Dallas, Texas.',
  description:
    'We are a digital product agency partnering with consumer brands to build smart, simple and beautiful technology, software, apps & websites.',
  url: 'https://www.cratebind.com/',
  image:
    'https://assets.website-files.com/5eb3125a2c4327ed3cd0c8c7/5efa260d18271f8799a30376_CrateBind%20Open%20Graph.png',
};

const Meta = () => {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{metaData.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content={metaData.title} />
      <meta name="description" content={metaData.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaData.url} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:image" content={metaData.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaData.url} />
      <meta property="twitter:title" content={metaData.title} />
      <meta property="twitter:description" content={metaData.description} />
      <meta property="twitter:image" content={metaData.image} />
    </>
  );
};

export default Meta;
