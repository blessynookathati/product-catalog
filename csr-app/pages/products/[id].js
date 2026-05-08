import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Layout>
      <div data-testid="product-detail">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-96 h-96 object-cover rounded"
        />
        <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </Layout>
  );
}