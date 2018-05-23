
const {comicModel} = require("../db/models/comics")
module.exports = {
  getComic: async function(id) {
    try{
      var result = await comicModel.findById(id)
      return result
    }catch(err){
      return false
    }
  
  },
  getComics: async function(){
    //let postModel = mongoose.model('Post', postSchema);
    try {
      let allComics = await comicModel.find()
      return allComics
    }catch(err){
      return false
    }
  },
  addComic: async function({frontpage, name, year, number, description, autor, company, tag, slug, viewComic}) {
    let comic = {
      frontpage: frontpage,
      name: name,
      year: year,
      number: number,
      description: description,
      autor: autor,
      company: company,
      tag: tag,
      slug: slug,
      viewComic: viewComic
    }
    try {
      let myComicModel = new comicModel(comic)
      var result = await myComicModel.save()
      return result
    }catch(err) {
      return err
    }
  },
  deleteComic: async function(id) {
    try{
      var result = await comicModel.findByIdAndRemove(id)
      return true
    }catch(err){
      return false
    }
  },
  updateComic: async function(params) {
    try{
    var data = {}
    if (params.frontpage, params.name, params.year, params.number, params.description, params.autor, params.company, params.tag, params.slug, params.viewComic) 
     data.frontpage = params.frontpage, data.name = params.name, data.year = params.year, data.number = params.number, data.description = params.description, data.autor = params.autor, data.company = params.company, data.tag = params.tag, data.slug = params.slug, data.viewComic = params.viewComic
        var result = await comicModel.findByIdAndUpdate(params._id,data)
        return result
    }catch(err){
      return false
   }
  },
  filter: async function(params) {
    try {
      let filterComics = await comicModel.find(params)
      return filterComics
    }catch(err){
      return false;
    }
  }
//   companyFilter: async function(company){
//     try {
//       let companyComics = await comicModel.find(company)
//       return companyComics
//     }catch(err){
//       return false
//     }
//   },
//   nameFilter: async function(name){
//     try {
//     let nameComics = await comicModel.find(name)
//     return nameComics
//     }catch(err) {
//       return false
//     }
//   },
//   yearFilter: async function(year){
//     try {
//       let yearComics = await comicModel.find(year)
//       return yearComics
//     }catch(err) {
//       return false
//     }
//   },
//   autorFilter: async function(autor) {
//     try {
//       let autorComics = await comicModel.find(autor)
//       return autorComics
//     }catch(err) {
//       return false
//     }
//   }
 }