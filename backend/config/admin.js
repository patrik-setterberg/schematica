module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '596ef718e923e409a7fcb747726129d4'),
  },
});
