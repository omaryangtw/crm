module.exports = {
  db: {
    database: process.env.DB_NAME || "crm",
    user: process.env.DB_USER || "crm",
    password: process.env.DB_PASSWORD || "crm",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./crm.sqlite",
      logQueryParameters: true,
    },
  },
};
