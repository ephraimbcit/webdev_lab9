const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// var path_to_front_end = '/Users/ephra/Downloads/comp1537/Labs/lab9-weather-app-node-js-and-express-js-ephraimbcit/front_end';

// app.get('/', (req, res) => {
//     res.sendFile(path_to_front_end + '/index.html');
// });
// // app.get('/', (req, res) => {
// //     res.sendFile('front_end/index.html');
// // });


// app.get('/code.js', (req, res) => {
//     res.sendFile(path_to_front_end + '/code.js');
// });
// // app.get('/code.js', (req, res) => {
// //     res.sendFile('front_end/code.js');
// // });

// app.get('/style.css', (req, res) => {
//     res.sendFile(path_to_front_end + '/style.css');
// });
// app.get('/style.css', (req, res) => {
//     res.sendFile('front_end/style.css');
// });


app.listen(3000, () => {
    console.log('server deployed on 3000!');
});


app.get('/weather', async (req, res) => {
    console.log(req.query.city);
    resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`);
    resJson = await resp.json();
    res.send(resJson)
});