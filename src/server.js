const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    /* 'localhost',
    pada kasus cloud, localhost bisa diubah menjadi 0.0.0.0 bila diterapkan pada google cloud,
    karena mengguankan internal ip repot. 0.0.0.0
    berarti ip dapet diakses dari ip mana saja seperti '*' untuk <any>
    */
    routes: {
      cors: {
        origin: ['*'], // untuk kasus same-origin buka pengaturan browser di chrome://flags/
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
