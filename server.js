const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require("./schema");
const secure = require('express-force-https');
const {getComics, getComic, addComic, deleteComic, updateComic, filter, companyFilter, nameFilter, yearFilter, autorFilter} = require("./managers/comic");
//const apolloUploadExpress = require ('apollo-upload-server')
const { apolloUploadExpress } = require('apollo-upload-server')
const app = express();
app.use(secure)

//import { apolloUploadExpress } from 'apollo-upload-server'

/**
 * Vinclulacion de Root Query y mutations con sus respectivas funciones JS
 */
var root = {
  comics: getComics,
  comic: getComic,
  addComic: addComic,
  deleteComic: deleteComic,
  updateComic: updateComic,
  filter: filter,
  companyFilter: companyFilter,
  nameFilter: nameFilter,
  yearFilter: yearFilter,
  autorFilter: autorFilter
}

/**
 * Añadimos el middleware que controla GraphQL y lo asignamos a la ruta /grapql
 * Incluimos en el middleware otro middleware para controlar CORS (https://www.npmjs.com/package/cors)
 * Vinculamos el schema y  las asignaciones de funciones
 * Activamos el editor gráfico de Queries (GraphiQL)
 */
app.use('/graphql', cors(), apolloUploadExpress(), graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Now browse to localhost:3000/graphql'));