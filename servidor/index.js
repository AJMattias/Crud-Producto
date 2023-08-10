const express = require('express');
const connectionDB =require('./config/db')
const cors = require("cors");

const app=express();


//conectamos a la deb
connectionDB();
app.use(cors());
// var whiteList = ['http://localhost:4200'];
// var corsOptions = {
//     origin: function(origin, callback){
//         if(whiteList.indexOf(origin) != -1){
//             callback(null, true);
//         }else{
//             callback(new Error('Not Allowed by CORS'))
//         }
//     }
//   }

// var corsoptions={origin:'*', optionsSuccessStatus: 200};

app.use(express.json());
app.use('/api/productos', require('./routes/productos'));
// app.use('/api/productos/:id', require('./routes/productos'));
//Hola Mundo
// app.get('/',(req, res)=>{
//     res.send("Hola Mundo");
// })

//Escuchar servidor
app.listen(4000, ()=>{
    console.log("El servidor esta corriendo correctamente")
})