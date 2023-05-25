import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request: Request){
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
}