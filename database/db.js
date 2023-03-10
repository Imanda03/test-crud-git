import mongoose from "mongoose"

mongoose.set('strictQuery', true);

const Connection = async (username, password) =>{
    const URL= `mongodb+srv://${username}:${password}@crudoperation.yu3do6c.mongodb.net/?retryWrites=true&w=majority`
    try {
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log("Database connected");
    } catch (error) {
        console.log("Error while connecting mongodb",error);
    }
}

export default Connection;