import prisma from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>

      <table className="w-full border border-gray-300">
        <thead className="bg-green-500">
          <tr>
            <th className="border p-3">SL</th>
            <th className="border p-3">Name</th>
            <th className="border p-3">Description</th>
            <th className="border p-3">Price</th>
            <th className="border p-3">Created At</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td className="border p-3">{index + 1}</td>
              <td className="border p-3">{product.name}</td>
              <td className="border p-3">
                {product.description ?? "N/A"}
              </td>
              <td className="border p-3">${product.price}</td>
              <td className="border p-3">
                {product.createdAt.toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}