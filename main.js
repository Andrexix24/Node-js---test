const express = require('express')
var hbs = require('hbs');
const app = express()
const port = 3000

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render("index")
})

app.get('/tables', (req, res) => {
  res.render("tables")
})


// rutas usuarios
app.get('/users', (req, res) => {
  res.render("Usuarios/usuarios")
})
app.get('/users/put', (req, res) => {
  res.render("Usuarios/agregarUsuario")
})
app.get('/users/edit', (req, res) => {
  res.render("Usuarios/editarUsuario")
})


// rutas compras
app.get('/buys', (req, res) => {
  res.render("Compras/compras")
})
app.get('/buys/put', (req, res) => {
  res.render("Compras/agregarCompras")
})
app.get('/buys/detail', (req, res) => {
  res.render("Compras/verDetalleCompras")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})