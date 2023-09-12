import "./category-preview.styles.scss";
import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";

const CategoryPreview = ({ title, product }) => (
  <div className='category-preview-container'>
    <h2>
      <Link className='title' to={title}>{title.toUpperCase()}</Link>
    </h2>
    <div className='preview'>
      {product
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;