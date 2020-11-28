exports.seed = function(knex, Promise) {
  return knex('shipments').insert([
    {shipment_name: 'Blue Tech', client_id: 1},
    {shipment_name: 'Green Tech', client_id: 2},
    {shipment_name: 'Yellow Tech', client_id: 3},
    {shipment_name: 'Purple Tech', client_id: 4},

  ]);
};
