import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request:Request){
    const expenses = await prisma.expense.findMany();
    return NextResponse.json(expenses);
}

