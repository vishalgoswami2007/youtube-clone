import mongoose, {Schema} from 'mongoose';
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { json } from 'express';

const videoSchema = new mongoose.Schema({
        id: {
            type: String,
            required: true,
        },
        videos: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        title:  {
            type: String,
            required: true,
        },
        views: {
            type:Number,
            default: 0,
        },
        duration: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
        Owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        }, timestamp: true,
}),

 userSchema.pre("save", async function (next) {
    if(!this.isModified("Password")) return next ()

        this.password = bcrypt.hash(this.password, 10)
    next()
 })

 userSchema.methods.isPasswordCorrect = async function 
 (password) {
    return await bcrypt.compare(password, this.password)
 }
    

 userSchema.methods.generateAccessToken = function () {
   return json.sign({
        _id: this._id,
    username : this.username,
    fullname: this.fullname,
    email: this.email,
 }, 
 Process.env.ACCESS_TOKEN_SECRET,
{
    expiresIn = process.env.ACCESS_TOKEN_EXPIRY
}
  )
   },

 userSchema.methods.generateRefreshToken = function () {} 
 return json.sign(
    {
        _id: this._id,
 }, 
 Process.env.REFRESH_TOKEN_SECRET,
{
    expiresIn = process.env.REFRESH_TOKEN_EXPIRY
}
  )

export const video =  mongoose.model('video', videoSchema)