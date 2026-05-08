import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
        data-testid={`product-card-${product.id}`}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-lg font-bold mt-2 product-card-title">
          {product.title}
        </h2>
        <p>${product.price}</p>
      </div>
    </Link>
  );
}