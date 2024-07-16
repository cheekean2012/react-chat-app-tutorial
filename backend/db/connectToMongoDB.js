import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGO_DB_URI);
        // const response = await mongoose.connect(process.env.MONGO_DB_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // });
        console.log(`MongoDB connected: ${response.connection.host}`);
    } catch (error) {
        console.log(`Error connect: ${error.message}`);
    }
    };

export default connectToMongoDB;