import app from "./app"
import chalk from "chalk";

const PORT = Number(process.env.PORT) || 5001;
app.listen(PORT, () => {
  console.log(
    chalk.hex("#00ffff").bold(`Server is up and running on port ${PORT}`)
  );
});