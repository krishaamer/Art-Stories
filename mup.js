module.exports = {
  servers: {
    one: {
      host: '46.101.225.192',
      username: 'root',
      password: 'tereTalv6'
    }
  },
  meteor: {
    name: 'www.artstories.gallery',
    path: '.',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'https://www.artstories.gallery',
      PORT: 5000,
      MONGO_URL: 'mongodb://kunstilood:ysun8atowY@ds029665.mlab.com:29665/artstories'
    },
    ssl: {
     crt: 'ssl.pem',
     key: 'private.pem',
     port: 443
    },
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 90
  }
};