const express = require('express');
const router = express.Router();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//THIS IS THE NON-TEMPLATE ISH
router.get('/', function (req,res, next)
{
    res.send(`
    <html>
    <head>
        <title>Anya-chan</title>
        <link href='/bw/vapor/bootstrap.css' rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
            <img src="https://thumbs.gfycat.com/AgilePoliticalAfricanparadiseflycatcher-size_restricted.gif" alt=""/>
            <a class="btn btn-primary" href="/bullshittery/second-level">Second-level bullshittery</a>
        </div>
    </body>
    </html>
    `)
})

router.get('/second-level', function (req, res, next)
{
    let names = ["Tass", "Levi", "Matt", "Taylor", "Krishiv", "Kale", "Cody", "Ethan"];
    let user = "Gabe";

    res.render('simple-hell', {

        name: user,
        userslog: names,
        isgabe: user === "Gabe",
        securitylevel: "epic"

    })
})

//Let's make it available!
module.exports = router;