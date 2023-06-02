import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request:Request){
    const expenses = await prisma.expense.findMany();
    return NextResponse.json(expenses);
}

export async function POST(request:Request){

    const { vendor, amount, description, status, categories } = await request.json();
    try {
        const expenses = await prisma.expense.create({
            data:{
                vendor,
                amount,
                description,
                status,
                created_at: new Date(),
                userId:"cli0hemgu0000lulgzrvtb59r",
                categories:{
                    connect:{
                        id:categories.id
                    }
                }
        
            }
        });

        return NextResponse.json({message:`New Expense created successfully! ${expenses}`});
    } catch (error) {
        return NextResponse.json({error:`An error occurred while trying to create the expense - ${error}`}, { status: 500 });
    }
    
}