const express = require('express');
const router = express.Router();

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
        </div>
    </body>
    </html>
    `)
})

//Let's make it available!
module.exports = router;