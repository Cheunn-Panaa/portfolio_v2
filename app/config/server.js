module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    host: '0.0.0.0',
    auth: {
      secret: env('ADMIN_JWT_SECRET', '93bac65f4210eed05220475b15f52af5'),
    },
  },
});
