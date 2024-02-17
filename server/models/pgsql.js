import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('User', 'juman', 'juman', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passwordResetCode: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
});

const Image = sequelize.define('image', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  skill: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  nodejsexp: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
 reactjsexp: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

User.hasMany(Image);
Image.belongsTo(User);




export { User, Image, sequelize };
