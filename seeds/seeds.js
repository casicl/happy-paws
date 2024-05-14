const sequelize = require('../config/connection');
const { User, animals } = require('../models');

const userData = require('./userData.json');
const animalsData = require('./animalsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const animal of animalsData) {
    await animals.create({
      ...animal,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
