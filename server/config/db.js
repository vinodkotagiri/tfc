import mongoose from 'mongoose'

async function connectMongoose(URI){
    try{
        await mongoose.connect(URI)
        return true
    }catch(err){
        console.log(`Error connecting mongodb: `,err)
        return false
    }
}

export default connectMongoose