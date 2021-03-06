import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await knex.schema.createTable('post', (table) => {
        table.uuid('id').unique().notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('title').notNullable()
        table.string('body').notNullable()
        table.string('tags').notNullable()
        table
            .timestamp('created_at', {precision: 6})
            .defaultTo(knex.fn.now(6));
        table
            .timestamp('updated_at', {precision: 6})
            .defaultTo(knex.fn.now(6));
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('order');
}
