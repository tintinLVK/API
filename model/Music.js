const { DataTypes } = require("sequelize");
const connexion = require("./../DB/dbconnect");

const Music = connexion.define("Music", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artiste: {
    type: DataTypes.STRING,
  },
  cover: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lien: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Music;
