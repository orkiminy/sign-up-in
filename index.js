const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const app= express();

app.set('view engine', 'ejs')

app.get("/loginPage.html", (req, res) => {
    res.render("login");
});




const port = 5000;
app.listen(port, () => {
    console.log('server running on port: 5000');
})
