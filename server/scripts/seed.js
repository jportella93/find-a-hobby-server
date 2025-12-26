#!/usr/bin/env node

const dotenv = require('dotenv');

dotenv.config();
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs').promises;

const Hobby = require('../models/hobby');

// Database connection setup (reuse existing db.js logic)
const dbURL = process.env.MONGODB_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(dbURL);
    console.log(`✅ Connected to MongoDB: ${dbURL}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}

async function loadJSON(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`❌ Error reading ${filePath}:`, error);
    throw error;
  }
}

async function seedHobbies() {
  const hobbiesPath = path.join(__dirname, '../data/hobbies.json');

  try {
    const hobbies = await loadJSON(hobbiesPath);
    console.log(`📁 Loaded ${hobbies.length} hobbies from ${hobbiesPath}`);

    let inserted = 0;
    let skipped = 0;

    for (const hobbyData of hobbies) {
      try {
        // Use upsert to avoid duplicates based on name
        const result = await Hobby.findOneAndUpdate(
          { name: hobbyData.name }, // filter
          hobbyData, // update data
          {
            upsert: true, // create if doesn't exist
            new: true, // return the updated document
            setDefaultsOnInsert: true, // apply defaults on insert
          },
        );

        if (result.upserted) {
          inserted++;
          console.log(`➕ Inserted: ${hobbyData.name}`);
        } else {
          skipped++;
          console.log(`⏭️  Skipped (already exists): ${hobbyData.name}`);
        }
      } catch (error) {
        console.error(`❌ Error seeding hobby "${hobbyData.name}":`, error);
      }
    }

    console.log('\n📊 Seeding Summary:');
    console.log(`   • ${inserted} hobbies inserted`);
    console.log(`   • ${skipped} hobbies skipped (already existed)`);
  } catch (error) {
    console.error('❌ Error seeding hobbies:', error);
    throw error;
  }
}

async function main() {
  console.log('🌱 Starting database seeding...\n');

  try {
    await connectToDatabase();
    await seedHobbies();

    console.log('\n✅ Database seeding completed successfully!');
  } catch (error) {
    console.error('\n❌ Database seeding failed:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n⚠️  Received SIGINT, closing database connection...');
  await mongoose.connection.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n⚠️  Received SIGTERM, closing database connection...');
  await mongoose.connection.close();
  process.exit(0);
});

// Run the seeding script
if (require.main === module) {
  main();
}

module.exports = { seedHobbies, connectToDatabase };
