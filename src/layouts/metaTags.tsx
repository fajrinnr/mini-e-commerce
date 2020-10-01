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
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta
        name="description"
        content="This website just for test requirement SehatQ"
      />
      <link rel="canonical" href={currentURL} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-152951972-1');`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5857F8N')`,
        }}
      />
    </Head>
  );
}
