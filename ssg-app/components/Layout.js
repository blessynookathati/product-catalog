export default function Layout({ children }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">SSG Product Catalog</h1>
      {children}
    </div>
  );
}