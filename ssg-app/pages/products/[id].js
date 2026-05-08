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

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();

  const paths = data.products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
    revalidate: 60,
  };
}