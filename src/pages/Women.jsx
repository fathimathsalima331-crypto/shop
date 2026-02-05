import "./Category.css";
import ProductCard from "../components/ProductCard";

// IMPORT UNIQUE IMAGES
import silkDressImg from "../assets/gown.webp";
import blazerImg from "../assets/coat.webp";
import casualImg from "../assets/image.jpg";

const womenProducts = [
  {
    id: "women-dress-001",
    title: "Silk Dress",
    price: "980",
    image: silkDressImg
  },
  {
    id: "women-blazer-002",
    title: "Tailored Blazer",
    price: "1,250",
    image: blazerImg
  },
  {
    id: "women-casual-003",
    title: "Casual Wear",
    price: "2,100",
    image: casualImg
  }
];

export default function Women() {
  return (
    <section className="category">
      <div className="category-header">
        <h1>Women</h1>
        <p>Discover the latest women’s fashion from luxury brands.</p>
      </div>

      <div className="category-grid">
        {womenProducts.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}
