import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    table.string("image").notNullable();
    table.string("descriptions").notNullable();
    table.decimal("likes").defaultTo(0);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("posts");
}
