import Head from "next/head";

interface IMetaTagsProps {
  currentURL: string;
}

export default function MetaTags({ currentURL }: IMetaTagsProps) {
  return (
    <Head>
      <title>Mini E-Commerce</title>
      <meta property="og:title" content="Mini E-Commerce For SehatQ Test" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentURL} />
      <meta property="og:image" content="/assets/icons/trolley.svg" />
      <meta
        property="og:description"
        content="This website just for test requirement SehatQ"
      />
      <meta name="robots" content="index, follow" />
      <link rel="alternate" href="/" hrefLang="id-id" />
      <link rel="alternate" href="/" hrefLang="en-id" />
      <link rel="alternate" href="/" hrefLang="en-us" />
      <link rel="alternate" href="/" hrefLang="en-gb" />
      <link rel="shortcut icon" href="/assets/icons/trolley.svg" />
      <meta
        name="description"
        content="This website just for test requirement SehatQ"
      />
      <link rel="canonical" href={currentURL} />
    </Head>
  );
}
