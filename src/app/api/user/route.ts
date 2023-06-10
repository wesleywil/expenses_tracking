import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (session) {
    const user = await prisma.user.findFirst({
      where: {
        id: session?.user.id,
      },
      include: {
        userIncome: true,
      },
    });
    return NextResponse.json(user);
  }
  return NextResponse.json(
    { message: "You are not authorized to do that, try to login first!" },
    { status: 401 }
  );
}
