import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import usersRoutes from "./routes/userRoutes.js";
import servicesRoutes from "./routes/serviceRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/services", servicesRoutes);
app.use("/api/users", usersRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
