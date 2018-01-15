module.exports = require('knex')({
    client: 'pg',
    connection: 'postgres://wzbirmwu:b4rJHG_mmo2nSZTniV_EbkIuU4dQgNbp@baasu.db.elephantsql.com:5432/wzbirmwu',
    searchPath:'public',
    pool:{
      min:2,
      max:10
    }
})