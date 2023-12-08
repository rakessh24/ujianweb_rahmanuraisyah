//untuk koneksi

import { Sequelize } from "sequelize";

const db = new Sequelize('ujian_db', 'rahma', 'rakesh24310', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;