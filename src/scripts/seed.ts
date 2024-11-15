import UserInstance from '../models/user';

export async function seed() {
  try {
    // Create table
    await UserInstance.sync({ force: true });

    // Insert mock users
    await Promise.all([
      UserInstance.create({
        firstName: 'Harry',
        lastName: 'Potter',
        admin: false,
      }),
      UserInstance.create({
        firstName: 'Hermione',
        lastName: 'Granger',
        admin: true,
      }),
      UserInstance.create({
        firstName: 'Ron',
        lastName: 'Weasley',
        admin: false,
      }),
      UserInstance.create({
        firstName: 'Albus',
        lastName: 'Dumbledore',
        admin: true,
      }),
      UserInstance.create({
        firstName: 'Severus',
        lastName: 'Snape',
        admin: false,
      }),
    ]);

    console.log('Mock users seeded successfully!');
  } catch (error) {
    console.error('Error seeding mock users:', error);
  }
}

// Check if the script is being executed directly
if (process.argv[1]?.endsWith('seed.ts')) {
  seed().catch((error) => {
    console.error('Error in seeding process:', error);
    process.exit(1);
  });
}
