module.exports = ({ env }) => ({
  auth: {
    // secret: env('ADMIN_JWT_SECRET'),
    secret: 't1/viXYBv3wrj2g6owx0rg==',
  },
  apiToken: {
    // salt: env('API_TOKEN_SALT'),
    salt: 'SfBBR1nJGUyULo8tGKIqQA==',
  },
  transfer: {
    token: {
      salt: 'SfBBR1nJGUyULo8tGKIqQA==',
    },
  },
});
