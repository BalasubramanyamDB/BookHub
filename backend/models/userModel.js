const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fname:{
        type: String,
    },
    lname:{
        type : String,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    fav:{
        type: [String],
        default: []
    }


})

//static signup method

userSchema.statics.signup = async function(fname,email,password){

    //validation
    if(!email || !password || !fname){
        throw Error('All fields must be provided')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
        
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is weak')
        
    }


    const exists = await this.findOne({email})
    if(exists) {
        throw Error(`Email exist`)
    }
    const salt = await bcrypt.genSalt(10)
    
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({fname,email,password:hash})

    return user

}
// static login method

userSchema.statics.login = async function(email, password){

    if(!email || !password){
        throw Error('All fields must be provided!')
    }
    const user = await this.findOne({email})

    if(!user){
        throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Invalid password')
    }
    console.log(user)
    return user
}
module.exports = mongoose.model('User',userSchema)