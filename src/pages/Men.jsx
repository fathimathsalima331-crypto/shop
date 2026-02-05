import "./Category.css";
import ProductCard from "../components/ProductCard";

// IMPORT UNIQUE IMAGES
import jacketImg from "../assets/jackmen.webp";
import suitImg from "../assets/modern.webp";

const menProducts = [
  {
    id: "men-jacket-001",
    title: "Designer Jacket",
    price: "1,450",
    image: jacketImg
  },
  {
    id: "men-suit-002",
    title: "Modern Suit",
    price: "1,890",
    image: suitImg
  }
];

export default function Men() {
  return (
    <section className="category">
      <div className="category-header">
        <h1>Men</h1>
        <p>Luxury menswear curated from the world’s best designers.</p>
      </div>

      <div className="category-grid">
        {menProducts.map((p) => (
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
