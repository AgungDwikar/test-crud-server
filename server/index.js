import "dotenv/config";
import express from "express";
import cors from "cors";
import compress from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import models, { sequelize } from "./models/init-models";
import routes from "./routes/indexPropRoutes";
import middleware from "./middleware/middleware";

const port = process.env.PORT || 3008;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(compress());
app.use(cors());

app.use(async (req, res, next) => {
    req.context = { models };
    next();
});

app.use(process.env.URL_API + "/propinsi", routes.propinsiRoute);

app.use(middleware.handleError);
app.use(middleware.notFound);

const dropDatabaseSync = false;

sequelize.sync({ force: dropDatabaseSync }).then(async () => {
    if (dropDatabaseSync) {
        console.log("database do not drop");
    }
    app.listen(port, () => {
        console.log(`server is listening on port ${port}`);
    });
});

export default app;
