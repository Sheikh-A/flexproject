
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('clients', tbl => {
            tbl.increments();
            tbl.string('client_name',255).notNullable().unique();
            tbl.string('client_segment',255).notNullable();
        })
        .createTable('shipments', tbl => {
            tbl.increments();
            tbl.text('shipment_name',255)
            tbl.integer('client_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('clients')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
        })
  )};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('shipments')
      .dropTableIfExists('clients');
};
