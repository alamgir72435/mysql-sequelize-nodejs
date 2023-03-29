const config = {
    HOST: '127.0.0.1',// 'localhost',
    USER: 'root',
    PASSWORD: 'your_root_password_here',
    DB: 'your_database_name_here',
    port: '3306',
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}

export default config;