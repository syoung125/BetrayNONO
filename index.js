const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const dotenv = require("dotenv");
const MongoStore = require("connect-mongo");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 19002;
const CokieStore = MongoStore(session);

mongoose.connect(
  process.env.MONGO_URL ? process.env.MONGO_URL : process.env.MONGO_URL_PROD,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("open", () => {
  console.log("success connect ❤❤🧡");
});

mongoose.connection.on("error", () => {
  console.log("Sorry Error💢💢💢");
});

app.use(helmet());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);
const handleListening = () =>
  console.log(`✅ Listening on : http://localhost:${PORT}`);
// const handleListening = () => {};

app.listen(PORT, handleListening);
