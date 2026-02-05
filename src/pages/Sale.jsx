import "./Category.css";
import ProductCard from "../components/ProductCard";

// IMPORT UNIQUE IMAGE
import gownImg from "../assets/image1.jpg";

const saleProducts = [
  {
    id: "sale-gown-001",
    title: "Evening Gown",
    price: "750",
    image: gownImg
  }
];

export default function Sale() {
  return (
    <section className="category">
      <div className="category-header">
        <h1>Sale</h1>
        <p>Exclusive designer discounts for a limited time.</p>
      </div>

      <div className="category-grid">
        {saleProducts.map((p) => (
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
