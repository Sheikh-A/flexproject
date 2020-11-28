
exports.seed = function(knex, Promise) {
  return knex('clients').insert([
    {client_name: 'Blue Tech', client_segment: 'SMB'},
    {client_name: 'Green Tech', client_segment: 'Mid-Market'},
    {client_name: 'Yellow Tech', client_segment: 'Enterprise'},
    {client_name: 'Purple Tech', client_segment: 'Emerging'},

  ]);
};
