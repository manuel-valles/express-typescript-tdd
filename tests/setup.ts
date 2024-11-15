import { seed } from '../src/scripts/seed';
import sequelize from '../src/config/sequelize';

beforeAll(async () => {
  jest.spyOn(global.console, 'log').mockImplementation(() => {});
  jest.spyOn(global.console, 'info').mockImplementation(() => {});
  jest.spyOn(global.console, 'warn').mockImplementation(() => {});
  jest.spyOn(global.console, 'error').mockImplementation(() => {});
  // Ensure that the test database is connected and synced
  await sequelize.authenticate();
  await sequelize.sync({ force: true }); // Sync DB, drop and recreate the tables
  // Add mock data
  await seed();
});

afterAll(async () => {
  // Close the connection after all tests
  await sequelize.close();
  jest.restoreAllMocks();
});
