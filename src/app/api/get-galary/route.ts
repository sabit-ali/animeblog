import dbConnect from "@/app/lib/dbConnect";
import BlogModle from "@/app/models/BlogSchema";

export const GET = async (request :Request)=>{
    await dbConnect()
    try {
        const galary = await BlogModle.find()

        if(!galary){
            return Response.json({
                success:false,
                message:'Error fetch'
            },{status:400})
        }
        return Response.json({
            success:true,
            data:galary,
            message:'fetch success'
        },{status:200})

    } catch (error) {
        return Response.json({
            success:false,
            message:"Error fetch data"
        })
    }
}