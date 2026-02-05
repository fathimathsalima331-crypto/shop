import "./Home.css";
import ProductCard from "../components/ProductCard";

// LOCAL IMAGES
import heroImage from "../assets/gooooo.webp";
import blazer from "../assets/image 2.webp";
import dress from "../assets/dress1.webp";
import coat from "../assets/bg.jpg";
import gown from "../assets/blck.webp";

const products = [
  {
    id: "home-blazer",
    title: "Tailored Blazer",
    price: "1,250",
    image: blazer,
  },
  {
    id: "home-dress",
    title: "Designer Dress",
    price: "980",
    image: dress,
  },
  {
    id: "home-coat",
    title: "Luxury Coat",
    price: "2,100",
    image: coat,
  },
  {
    id: "home-gown",
    title: "Evening Gown",
    price: "1,750",
    image: gown,
  },
];

export default function Home() {
  return (
    <>
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Discover the World’s Finest Fashion</h1>
          <p>Luxury brands • Independent designers • Curated globally</p>
          <button className="lux-btn white">Shop Now</button>
        </div>
      </section>

      <section className="home-categories">
        <button className="cat-btn">New In</button>
        <button className="cat-btn">Women</button>
        <button className="cat-btn">Men</button>
        <button className="cat-btn">Bags</button>
      </section>

      <section className="home-products">
        <div className="home-heading">
          <h2>Featured Pieces</h2>
          <p>Hand-selected styles for the season</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}
