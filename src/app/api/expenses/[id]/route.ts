import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import prisma from "../../../../../prisma/client";
import { NextResponse } from "next/server";


export async function PUT(request: Request) {
    const session = await getServerSession(authOptions);
    const { id, vendor, amount, description, status, categoryId, created_at } =
      await request.json();
    try {
      if (session) {
        const expenses = await prisma.expense.update({
          where:{
            id
          },
          data:{
            vendor,
            amount,
            description,
            status,
            categories:{
              set:[{id:categoryId}]
            },
            created_at,
          },
          include:{
            categories:true,
          }
        });
        return NextResponse.json({
          message: `Expense updated successfully! ${expenses}`,
        });
      }
      return NextResponse.json(
        { message: "You are not authorized to do that, try to login first!" },
        { status: 401 }
      );
    } catch (error) {
      return NextResponse.json(
        {
          error: `An error occurred while trying to update the expense - ${error}`,
        },
        { status: 500 }
      );
    }
  }


  export async function DELETE(request: Request, {params}:{params:{id:string}}) {
    const session = await getServerSession(authOptions);
    const id = params.id;
    try {
      if (session) {
        const expense = await prisma.expense.delete({
          where:{
            id
          },
        });
        return NextResponse.json({
          message: `Expense deleted successfully! ${expense}`,
        });
      }
      return NextResponse.json(
        { message: "You are not authorized to do that, try to login first!" },
        { status: 401 }
      );
    } catch (error) {
      return NextResponse.json(
        {
          error: `An error occurred while trying to delete this expense - ${error}`,
        },
        { status: 500 }
      );
    }
  }