import { v2 } from "cloudinary"

export const CloudinaryProvider = {
    provider: "CLOUDINARY",
    useFactory:()=>{
        return v2.config({
            cloud_name:"",
            api_key: "",
            api_secret:'',
        })
    }
}