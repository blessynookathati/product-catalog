import Layout from "../../components/Layout";

export default function ProductDetail({ product }) {
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

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}