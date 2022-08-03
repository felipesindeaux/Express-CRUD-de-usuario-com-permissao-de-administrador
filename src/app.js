import express from "express";
import usersRouter from "./routes/users.routes";
import loginRouter from "./routes/login.routes";

const app = express();
app.use(express.json());
app.use("/users", usersRouter);
app.use("/login", loginRouter);
const port = 3001;

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
