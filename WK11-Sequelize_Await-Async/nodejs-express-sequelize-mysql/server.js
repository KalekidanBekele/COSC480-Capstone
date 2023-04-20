const express = require("express");
const cors = require("cors");

const app = express();
var corsOptions = {
    origin: "htpp://localhost:8080"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({entended: true}));

const db = require("./app/models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and resync db.");
});

app.get("/", (req, res) =>{
    res.json({ message: "Welcome to bezkoder application."});
});

require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
