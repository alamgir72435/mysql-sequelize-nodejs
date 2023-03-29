import { DataTypes, Model, Sequelize } from "sequelize"
import * as config from "./../config/index.js"

const { DB, USER, PASSWORD,HOST } = config.default;


const sequelize = new Sequelize(DB, USER, PASSWORD, {
  port:3306,
  logging:false,
  pool: {
    maxConnections: 5,
    maxIdleTime: 30
  },
  host: HOST,
  dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


try {
  sequelize.authenticate();
  console.log('DB Connected')
  
} catch (error) {
  console.log('DB Error While Connect',error)
}


// import databases
import User from "./user.js"
import Contact from "./contact.js"


User(sequelize, DataTypes, Model)
Contact(sequelize, DataTypes, Model)


export { sequelize }