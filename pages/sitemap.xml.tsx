import { NextApiRequest, NextApiResponse } from "next";

function generateSiteMap({
  hostname,
  pages,
  dynamicRoutes,
}: {
  hostname: string;
  pages: string[];
  dynamicRoutes: string[];
}) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>${hostname}</loc>
       </url>
       ${pages
         .map((page) => {
           return `
        <url>
          <loc>${`${hostname}/${page}`}</loc>
        </url>
      `;
         })
         .join("")}
       ${dynamicRoutes
         .map((route) => {
           return `
        <url>
          <loc>${`${hostname}/${route}`}</loc>
        </url>
      `;
         })
         .join("")}
     </urlset>
   `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const hostname = `https://www.aitsportsclub.com/`;
  const pages = ["gallery", "team", "contact", "pace/events"];
  const dynamicRoutes = ["pace/register/[slug]"];

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap({
    hostname,
    pages,
    dynamicRoutes,
  });

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
