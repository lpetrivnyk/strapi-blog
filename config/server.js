module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // keys: env.array('APP_KEYS'),
    keys: ['jTwa+WVHLIj6TJufBy43Zg==','2FK1fTZ9WxSOb8WQMBFXaw==','0nGxKboATZqtzzq2gIsKbA==','Nc+Kg0wNG3lhRuxlbPeRYw=='],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
