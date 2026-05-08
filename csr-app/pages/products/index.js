import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ProductGrid from "../../components/ProductGrid";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <input
        type="text"
        placeholder="Search products..."
        data-testid="search-input"
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p data-testid="result-count" className="mb-4">
        {filteredProducts.length} Results
      </p>

      <ProductGrid products={filteredProducts} />
    </Layout>
  );
}