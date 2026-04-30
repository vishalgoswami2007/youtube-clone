import mongoose, {Schema} from 'mongoose';

const userSchema = new mongoose.Schema({
       username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
       },
       email:{
        type: String,
        required:true,
        trim: true,
       },
       fullname:{
        type: String,
        required:true,
        trim: true,
       },
       avatar:{
        type: String,
        default: false
       },
       coverImage:{
        type: String,
        default: false
       },
       password:{
        type: String,
        required: [true, 'Password is required']
        
       },
       id:{
        type: string,
        required: true,
        unique: true
       },
       watchHistory:{
        type: mongoose.Schema.Types.ObjectID,
        Ref: 'videos'
    },
}, {timestamps: true})    

export const user = mongoose.model('user', userSchema)