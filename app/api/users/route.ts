
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}


export async function POST(request:Request){
    try{
        const userData = await request.json();
        const insertedUser = await prisma.user.create({
            data:userData
        })
        return NextResponse.json(insertedUser);

    }
    catch(error){
        return NextResponse.json(
            {message:"Something went wrong"},
            {status:500}
        )
    }
}