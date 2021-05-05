import mongoose from 'mongoose';
global.mongoose = mongoose


const connectdb = async () => {

    try {
        await mongoose.connect(`mongodb+srv://${process.env.mongouser}:${process.env.mongopassword}@box-test.ocogl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log("Mongodb Connected")

    } catch (error) {
        console.log(error.message)

    }

}
export default connectdb;