exports.seed = function(knex) {
  return knex("resources")
    .del()
    .then(function() {
      return knex("resources").insert([
        { name: "Broom", description: "Sweep sweep sweep" },
        { name: "Batteries", description: "Sweet sweet juice" },
        { name: "Lysol Wipes", description: "Cleanliness is a virtue" }
      ]);
    });
};
