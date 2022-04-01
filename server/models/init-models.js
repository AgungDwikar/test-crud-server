import _sequelize from "sequelize";
import Sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _propinsi from "./propinsi.js";

import config from "../config/config";

const sequelize = new Sequelize(
    config.db_name,
    config.db_username,
    config.db_password,
    {
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

function initModels(sequelize) {
    const propinsi = _propinsi.init(sequelize, DataTypes);

    return {
        propinsi,
    };
}

const models = initModels(sequelize);

export default models;
export { sequelize };
// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
