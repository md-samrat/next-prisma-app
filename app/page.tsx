import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
