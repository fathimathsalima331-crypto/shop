import "./Category.css";
import ProductCard from "../components/ProductCard";

// IMPORT UNIQUE IMAGES
import kidsJacketImg from "../assets/jackids.avif";
import casualSetImg from "../assets/casualset.jpg";

const kidsProducts = [
  {
    id: "kids-jacket-001",
    title: "Kids Jacket",
    price: "320",
    image: kidsJacketImg
  },
  {
    id: "kids-casual-002",
    title: "Casual Set",
    price: "210",
    image: casualSetImg
  }
];

export default function Kids() {
  return (
    <section className="category">
      <div className="category-header">
        <h1>Kids</h1>
        <p>Luxury fashion for kids from newborn to teens.</p>
      </div>

      <div className="category-grid">
        {kidsProducts.map((p) => (
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
