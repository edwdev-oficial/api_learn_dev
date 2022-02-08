const express = require ('express');
const bodyparser = require("../node_modules/body-parser");
const cors = require('cors');

const api = express();
const port = 8083;

// api.use(bodyparser, urlencoded());

api.get('/', async(req, res) => {

});

api.listen(port, () => {
    console.log(`api_learn_dev rodando na url http://localhost:${port}`)
});