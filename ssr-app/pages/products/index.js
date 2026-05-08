import { useState } from "react";
import Layout from "../../components/Layout";
import ProductGrid from "../../components/ProductGrid";

export default function ProductsPage({ products }) {
  const [search, setSearch] = useState("");

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

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();

  return {
    props: {
      products: data.products,
    },
  };
}