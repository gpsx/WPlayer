// Update with your config settings.

module.exports = {
  // client: 'mysql',
  // connection: {
  //   database: 'desafiocap04',
  //   user:     'root',
  //   password: 'bandtec'
  // },
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
