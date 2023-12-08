import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    name: DataTypes.STRING,
    jenis: DataTypes.STRING,
    status: DataTypes.STRING,
    episode: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
},{
    freezeTableName: true
});

export default User;

(async()=> {
    await db.sync();
})();