module.exports = {
  servers: {
    one: {
      host: '46.101.115.43',
      username: 'root',
      password: 'tereTalv6'
    }
  },
  meteor: {
    name: 'ArtStories',
    path: '.',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://46.101.115.43',
      PORT: 4000,
      MONGO_URL: 'mongodb://localhost/meteor'
    },
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 90
  },
  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  }
};