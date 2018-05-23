/**
 * Esquema principal de la aplicación
 */

const { buildSchema } = require('graphql');
const schema = buildSchema(`
scalar Upload
type Query {
  comic(_id: String): Comic
  comics: [Comic]
  filter (company: String, tag: String, year: String, autor: String): [Comic]
  nameFilter: [Comic]
  yearFilter: [Comic]
  autorFilter: [Comic]
  companyFilter (company: String): [Comic]
}

type Mutation {
  addComic (frontpage: String, name: String, year: String, number: String, description: String, autor: String, company: String, tag: String, slug: String, viewComic: String):Comic
  deleteComic (_id: String): Comic
  updateComic (_id: String, frontpage: String, name: String, year: String, number: String, description: String, autor: String, company: String, tag: String, slug: String, viewComic: String): Comic
  singleUpload (file: Upload!): File!
 
}

type File {
  id: ID!
  path: String!
  filename: String!
  mimetype: String!
  encoding: String!
}

type Comic {
  _id: String
  frontpage: String
  name: String
  year: String
  number: String
  description: String
  autor: String
  company: String
  tag: String
  slug: String
  viewComic: String
}
`);


module.exports = schema;