import express from "express";
import UserRoutes from "./routes/user-route";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/users", UserRoutes);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
