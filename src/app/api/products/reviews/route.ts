import { Review } from "@/models/review";
import { connectDb } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";


connectDb();

export async function GET(){
    try{
        const data = Review.find({}).sort({createdAt:-1});
        console.log(data);
        if(!data) return NextResponse.json({message:"There are no reviews"},{status:200});
        return NextResponse.json({data:data},{status:200});
    }
    catch(err){
        console.log(err);
        return NextResponse.json({error:"Unable to fetch reviews"});
    }
}

export async function POST(req:NextRequest){
    const body = await req.json();
    console.log(body)
    try{
        const data = await Review.create(body);
        return NextResponse.json({data:data},{status:200});
    }
    catch(err){
        console.log(err);
        return NextResponse.json({error:"Unable to create review"});
    }
}