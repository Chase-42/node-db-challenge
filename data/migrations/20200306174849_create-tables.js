exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments("id");
      table
        .text("name", 128)
        .unique()
        .notNull();
      table.text("description", 255);
      table
        .boolean("completed")
        .notNull()
        .defaultTo(false);
    })
    .createTable("resources", table => {
      table.increments("id");
      table
        .text("name", 128)
        .unique()
        .notNull();
      table.text("description", 255);
    })
    .createTable("tasks", table => {
      table.increments("id");
      table.text("description", 255).notNull();
      table.text("notes", 255).notNull();
      table
        .boolean("completed")
        .notNull()
        .defaultTo(false);
      table
        .integer("project_id")
        .unsigned()
        .notNull()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("projects_resources", table => {
      table
        .integer("project_id")
        .notNull()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("resource_id")
        .notNull()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
