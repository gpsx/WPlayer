
module.exports = {
  client: 'mssql',
  connection: {
    host: 'wplayer.database.windows.net',
    user: 'wplayer',
    password: '#Gfgrupo9',
    database: 'bdWPlayer',
    encrypt: true
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
