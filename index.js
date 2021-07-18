const express = require('express');

//  Create the server
const app = express();

//  Config app port
const PORT = process.env.PORT || 4000;

//  Define main url
app.get('/', (req, res) => {
    res.send('Recibiendo datos');
})

app.listen(PORT, () => {
    console.log(`El servidor está conectado en el puerto: ${PORT}`);
});


