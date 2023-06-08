import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(request: Request) {
  const { title, at_date, description, amount } = await request.json();

  try {
    const income = await prisma.userIncome.create({
      data: {
        title,
        at_date,
        description,
        amount,
        userId: "cli0hemgu0000lulgzrvtb59r",
      },
    });
    return NextResponse.json({
      message: `New User Income created successfully! ${income}`,
    });
  } catch (error) {
    return NextResponse.json({
      error: `An error occurred while trying to create a new userIncome registration - ${error}`,
    });
  }
}
