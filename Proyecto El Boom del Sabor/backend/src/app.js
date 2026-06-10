const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes =
require("./routes/auth.routes");

const userRoutes =
require("./routes/user.routes");

const productRoutes =
require("./routes/product.routes");

const drinkRoutes =
require("./routes/drink.routes");

const reservationRoutes =
require("./routes/reservation.routes");

const dashboardRoutes =
require("./routes/dashboard.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req,res)=>{

    res.send(
        "Backend funcionando correctamente"
    );

});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/drinks", drinkRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/dashboard", dashboardRoutes);

module.exports = app;