const express = require('express')
const app = express()
const port= 3000
const bodyparser =  require ('body-parser')


//configurando o body-parser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//configurando ejs
app.set('view engine', 'ejs')


//configurando arquivos estaticos
app.use(express.static('public'))

//rota principal
app.get('/', (req , res)=>{
    res.render('index.ejs')
})

//rota home
app.get('/home' , (req , res)=>{
    res.send('<h1>Pagina principal</h1>')
})

//rota login
app.get('/login', (req , res)=>{
    res.render('login')
})

//rota para filmes
app.get('/filmes', (req , res)=>{
    res.render('filmes')
})



//iniciando o servidor
app.listen(port , ()=>{
    console.log('Servidor online!')
})