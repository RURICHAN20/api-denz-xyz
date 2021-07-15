const axios = require("axios")
const cheerio = require("cheerio")

module.exports = () => {
  let random_level = Math.floor(Math.random() * 136)
  let random_eq = Math.floor(Math.random() * 20)
  return axios.get(`https://jawabantebakgambar.net/level-${random_level}/`).then((val) => {
  })
}
