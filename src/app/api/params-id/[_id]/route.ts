import BlogModle from "@/app/models/BlogSchema";
import dbConnect from "@/app/lib/dbConnect";
import { NextRequest,NextResponse } from "next/server";
export const GET = async (request: NextRequest,{params}: {params : {_id:string}}) => {
    
    await dbConnect()
    console.log("_id IS: ",params._id)
    try {
        const isSame = await BlogModle.findById({ _id: params._id })
        if (!isSame) {
            return NextResponse.json({
                message: 'not match _id'
            }, { status: 400 })
        }
        return Response.json(
            {
                success: true,
                data:isSame,
                message: "fetch data success"
            }, { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: " Error : fetch data"
            }, { status: 500 }
        )
    }
}