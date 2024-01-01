const express = require("express");
const app = express();

const port = 5000;

const checkWorkingHours = (req, res, next) => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const currentHour = currentDate.getHours();
  
    // Check if it's a weekday (Monday to Friday) and time is between 9 and 17
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && currentHour >= 9 && currentHour <= 17) {
        next(); // Continue to the next middleware/route
    } else {
        res.status(403).send('The web application is only available during working hours (Monday to Friday, 9h to 17h).');
    }
};

app.use(express.static(__dirname + "/projet"));

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/projet/home.html");
});

app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/projet/services.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/projet/contact.html");
});

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/projet/style.css");
});

app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});
