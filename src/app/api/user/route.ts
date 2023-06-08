import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";


export async function GET(request:Request){
    const user = await prisma.user.findFirst({
        where:{
            id:"cli0hemgu0000lulgzrvtb59r",
        },
        include:{
            userIncome:true
        }
    });
    return NextResponse.json(user);
}