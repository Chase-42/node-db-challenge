exports.seed = function(knex) {
  return knex("projects")
    .del()
    .then(function() {
      return knex("projects").insert([
        {
          name: "Clean out garage",
          description: "Pretty self-explanatory",
          completed: false
        },
        {
          name: "Replace smoke alarm batteries",
          description: "Batteries > death by fire",
          completed: false
        },
        {
          name: "Clean out fridge",
          description: "Get rid of old food",
          completed: false
        }
      ]);
    });
};
