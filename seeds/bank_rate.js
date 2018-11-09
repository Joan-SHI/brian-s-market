exports.seed = function (knex, Promise) {
    return knex('bank_rate').del()
      .then(function () {
        return knex('bank_rate').insert([
         {id:1,bank_name:'asb',rate:'5%'}
        ])
      })
  }
  


  knex('bank_rate')
    .insert({bank_name: 'westpac', rate: '15%'})


    knex('bank_rate')
        .where({id: 2})
        .del() 
        .then(data => {
            return knex('bank_rate')
        })