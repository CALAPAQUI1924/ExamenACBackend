
import mongoose from "mongoose";

const cloudURI = "mongodb+srv://CALAPAQUI:<1924>@cluster0.je9ec.mongodb.net/";

const connectDB = async () => {
  try {
    await mongoose.connect(cloudURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a MongoDB en la nube");
  } catch (error) {
    console.error("Error conectando a MongoDB en la nube:", error.message);
    process.exit(1); 
  }
};

export default connectDB;


