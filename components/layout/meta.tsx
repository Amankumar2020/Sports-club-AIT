import Head from "next/head";
import { useRouter } from "next/router";


const DOMAIN = "";

const capitalizeFirstLetter = (str:string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


export default function Meta({
  title = "AIT SPORTS CLUB",
  description = "Ait sports club website",
  image = ``,
}: {
  title?: string;
  description?: string;
  image?: string;
  }) {
  
   const router = useRouter();

   let routeName = router.pathname.substr(1);
  //  if (routeName.length === 0) {
  //    routeName = "Home";
  //  }
  

  return (
    <Head>
      <title>{`${title} ${routeName && "|"} ${routeName && capitalizeFirstLetter(routeName)}`}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/sportslogo-modified.png" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
      />
    </Head>
  );
}
