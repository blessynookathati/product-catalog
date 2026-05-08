export default function ProductCard({ product }) {
  return (
    <div
      className="border rounded-lg p-4 shadow hover:shadow-lg transition"
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
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
}