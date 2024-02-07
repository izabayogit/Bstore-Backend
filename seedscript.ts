
import { QueryInterface } from 'sequelize';
import { sequelize } from './src/entity/models/index';

// Import the seeders
// const userSeeder = require('./src/seeders/user-seeder');
const bookSeeder = require('./src/seeders/book-seeder');
import * as userSeeder from './src/seeders/user-seeder';

const runSeeds = async () => {
  try {
    // Sync the Sequelize models with the database
    await sequelize.sync();

    // Run the seeders
    const queryInterface: QueryInterface = sequelize.getQueryInterface();
    await userSeeder.up(queryInterface);
    await bookSeeder.up(queryInterface);

    console.log('Seeders executed successfully.');
  } catch (error) {
    console.error('Error running seeders:', error);
  } finally {
    // Close the Sequelize connection
    await sequelize.close();
  }
};

// Run the seeds
runSeeds();
