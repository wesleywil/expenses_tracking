import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";


export async function GET(){
  const session = await getServerSession(authOptions);

  try{
    if(session){
      const incomes = await prisma.userIncome.findMany({
        where:{
          userId:session.user!.id,
        }
      })
      return NextResponse.json(incomes);
    }
      return NextResponse.json({message:"You are not authorized to do that, try to login first!"}, {status:401})
  }catch(error){
    return NextResponse.json({error: `An error occurred while trying to retrieve the user Income list - ${error}`,}, { status:500})
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const { title, at_date, description, amount } = await request.json();

  try {
    if (session) {
      const income = await prisma.userIncome.create({
        data: {
          title,
          at_date,
          description,
          amount,
          userId: session?.user.id,
        },
      });
      return NextResponse.json({
        message: `New User Income created successfully! ${income}`,
      });
    }
    return NextResponse.json(
      { message: "You are not authorized to do that, try to login first!" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json({
      error: `An error occurred while trying to create a new userIncome registration - ${error}`,
    });
  }
}
