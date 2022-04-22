import dynamic from "next/dynamic";
import Link from "next/link";

const Product = dynamic(() => import("./Product"));

export default function MoreProductsDemo({ more, products }) {
  return (
    <div className="container">
      <div className="demo">
        <h2 className="demo__title">{more.heading}</h2>
        <div className="demo__content">
          {products.map((product) => (
            <Link key={product.link} href={product.link}>
              <Product key={product.link} product={product} />
            </Link>
          ))}
        </div>
        <a href="#" className="more__btn">
          MORE
        </a>
      </div>
    </div>
  );
}
