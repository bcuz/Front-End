// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    // way i'm using for wwt wasnt working
    connection: { host: '/var/run/postgresql', database: 'bubl' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/bubl.sqlite3'
    },
    useNullAsDefault: true,
    migrations:{directory: './data/migrations',},
    seeds:{
      directory:'./data/seeds',
    }
  },
};
