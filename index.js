const express = require ('express')
const app = express()

// settings
app.set('port',)

app.listen(app.get('port'), ()=>{

// routes
app.get('/', (req, res)=>{
    res.send('Bienvenidos')
})

    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}´)
})