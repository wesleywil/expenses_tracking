import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  console.log('SESSION FROM API ',session)
  try {
    if(session){
      const user = await prisma.user.findFirst({
        where: {
          id: session?.user.id,
        },
        include: {
          userIncome: true,
        },
      });
      return NextResponse.json(user, { status: 200 });
    }else{
      return NextResponse.json({error:"You're not authorized"}, { status: 401 });
    }

  } catch (error) {
    return NextResponse.json(
      { error: `A server error has occurred - ${error}` },
      { status: 500 }
    );
  }
}
