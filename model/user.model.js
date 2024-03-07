import mongoose , {Schema} from "mongoose";

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name :{
        type:String,
        minLength: 2,
    }
});

export const User = mongoose.model("User",userSchema);