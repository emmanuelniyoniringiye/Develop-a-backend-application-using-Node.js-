const express = require('express');
const app = express();
const port = 7000;
app.get('/', (req, res) => {
    res.send("WELCOME TO NODEJS PROJECT  USING  EXPRESS MODULE");
    //res.write('EXPRESS MODULE IS MAINLY USED TO BUILD API AND WEB APPLICATIONS');

});
app.listen(port, () => {
    console.log(`server is  running on   port :${port}`);
});
app.listen(port, () => { console.log(`server is  running on   port :${port}`); });