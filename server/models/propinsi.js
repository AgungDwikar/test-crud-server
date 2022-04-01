import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class propinsi extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    prop_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prop_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prop_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prop_url_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'propinsi',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "prop_id_pk",
        unique: true,
        fields: [
          { name: "prop_id" },
        ]
      },
    ]
  });
  }
}
