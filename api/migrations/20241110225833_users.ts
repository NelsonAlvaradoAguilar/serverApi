import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable().unique();
        table.binary('profilePic');
        table.timestamps(true, true);
      });}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('users');}

