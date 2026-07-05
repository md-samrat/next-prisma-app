import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const product = await prisma.product.create({
    data: body,
  });

  return Response.json(product);
}

export async function GET() {
    const products = await prisma.product.findMany();
    return Response.json(products);
}