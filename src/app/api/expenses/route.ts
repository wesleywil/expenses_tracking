import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "../../../../prisma/client";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (session) {
    const expenses = await prisma.expense.findMany({
      where: {
        userId: session?.user.id,
      },
      include: {
        categories: true,
      },
    });
    return NextResponse.json(expenses);
  }
  return NextResponse.json(
    { message: "You are not authorized to do that, try to login first!" },
    { status: 401 }
  );
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const { vendor, amount, description, status, categories, created_at } =
    await request.json();
  try {
    if (session) {
      const expenses = await prisma.expense.create({
        data: {
          vendor,
          amount,
          description,
          status,
          created_at,
          userId: session?.user.id,
          categories: {
            connect: {
              id: categories.id,
            },
          },
        },
      });
      return NextResponse.json({
        message: `New Expense created successfully! ${expenses}`,
      });
    }
    return NextResponse.json(
      { message: "You are not authorized to do that, try to login first!" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: `An error occurred while trying to create the expense - ${error}`,
      },
      { status: 500 }
    );
  }
}
