const User = require('./User');
const animals = require('./animals');

module.exports = { User };



// Creates a relationship between User and animal model, with the User having a "has many" relationship with animal model.
User.hasMany(animals, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Creates a relationship between User and animal model, with a "belongs to" relationship of the animal to the User.
animals.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, animals };
