import mongoose from 'mongoose'

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useCreateIndex: true, 
            useFindAndModify: false, 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
         }, err => {
            if(err) throw err;
            console.log('Connected to MongoDB!!!')
         });
    } catch (error) {
        console.log(`error in MongoDB ${error}`);
    }
}

export default connectDB