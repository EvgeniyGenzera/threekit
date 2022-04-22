import Head from "next/head";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../components/Header"));
const Banner = dynamic(() => import("../../components/Banner"));
const Shoe = dynamic(() => import("../../components/shoe/Player"));
const Sofa = dynamic(() => import("../../components/sofa/Player"));
const Door = dynamic(() => import("../../components/metal-door/Player"));
const CTA = dynamic(() => import("../../components/CTA"));
const MoreProductsDemo = dynamic(() =>
  import("../../components/MoreProductsDemo")
);
const ProductAbout = dynamic(() => import("../../components/ProductAbout"));
const Footer = dynamic(() => import("../../components/Footer"));

function Landing({ page, products, slug }) {
  return (
    <div>
      <Head>
        <title>{page.seo.title}</title>
        <meta name="description" content={page.seo.description}></meta>
        <meta property="og:title" content={page.seo.og_title} />
        <meta property="og:description" content={page.seo.og_description} />
        <meta
          property="og:image"
          content={`http://54.208.102.213:1337${page.seo.og_image.url}`}
        />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://preview.threekit.com/app/js/threekit-player.js"></script>
      </Head>

      <Header />
      <Banner banner={page.Banner} />
      {slug === "shoe" && <Shoe />}
      {slug === "sofa" && <Sofa />}
      {slug === "metal-door" && <Door />}
      <CTA cta={page.CTA} />
      <MoreProductsDemo more={page.MoreProducts} products={products} />
      <ProductAbout about={page.About} slug={slug} />
      <Footer />
    </div>
  );
}

Landing.getInitialProps = async ({ query: { slug } }) => {
  const landing = await fetch(
    `http://54.208.102.213:1337/landing/?Slug=${slug}`
  );
  const products = await fetch("http://54.208.102.213:1337/products");
  const landingJson = await landing.json();
  const productsJson = await products.json();
  return {
    page: landingJson[0],
    products: productsJson,
    slug,
  };
};

export default Landing;
