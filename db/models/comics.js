const {
  mongoose
} = require("../index")
const ObjectId = mongoose.Types.ObjectId;

const comicSchema = mongoose.Schema({

  frontpage: {
    type: String
  },
  name: {
    type: String
  },
  year: {
    type: String
  },
  number: {
    type: String
  },
  description: {
    type: String
  },
  autor: {
    type: String
  },
  company: {
    type: String
  },
  tag: {
    type: String
  },
  slug: {
    type: String
  },
  viewComic: {
    type: String
  }
});

let comicModel = mongoose.model('Comic', comicSchema);

module.exports = {
  comicModel: comicModel
}