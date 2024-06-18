import BlogModle from "@/app/models/BlogSchema";
import dbConnect from "@/app/lib/dbConnect";

export const GET = async (request: Request,{params}: {params : {_id:string}}) => {
    
    await dbConnect()
    console.log("_id IS: ",params._id)
    try {
        const isSame = await BlogModle.findById({ _id: params._id })
        if (!isSame) {
            return Response.json({
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
        throw new Error("not GET DTATA")
    }
}