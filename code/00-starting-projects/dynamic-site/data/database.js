const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDatabase() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  database = client.db('deployment');
}

function getDb() {
  if (!database) {
    throw new Error('No database connected!');
  }

  return database;
}

module.exports = {
  initDatabase: initDatabase,
  getDb: getDb,
};
