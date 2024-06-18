import mongoose,{Schema,Document} from "mongoose";


export interface BlogTypes extends Document{
  title:string,
  description:string,
  image_uri :string,
  price:string,
  public_id : string,
}

const BlogSchema:Schema<BlogTypes> = new Schema({
  title:{
    type:String,
    required:true,
    trim:true
  },
  image_uri:{
    type:String,
    required:true,
    trim:true
  },
  description:{
    type:String,
    trim:true,
    required:true
  },
  price:{
    type:String,
    required:true,
    trim:true,
  },
  public_id:{
    type:String,
    required:true,
    trim:true
  },
},{timestamps:true})

const BlogModle = (mongoose.models.Blog as mongoose.Model<BlogTypes>) || mongoose.model<BlogTypes>('Blog',BlogSchema)

export default BlogModle