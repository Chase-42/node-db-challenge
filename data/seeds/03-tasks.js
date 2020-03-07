exports.seed = function(knex) {
  return knex("tasks")
    .del()
    .then(function() {
      return knex("tasks").insert([
        {
          description: "Sweep out garage",
          notes: "Sweeping is the worst",
          completed: false,
          project_id: 1
        },
        {
          description: "Getting to the smoke alarms",
          notes: "Find a stepstool",
          completed: false,
          project_id: 2
        },
        {
          description: "Emptying fridge",
          notes: "Oh wow - this is tedious",
          completed: false,
          project_id: 3
        }
      ]);
    });
};
