exports.seed = function (knex, Promise) {
  return knex('rent').del()
    .then(function () {
      return knex('rent').insert([
       {id:1,time:'2018',area:'wellington'}
      ])
    })
}
