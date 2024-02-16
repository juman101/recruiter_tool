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
  picture: {
    type: DataTypes.STRING,
    defaultValue: '/avatar.png',
  },
  role: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: ['Creator'],
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
  slug: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  published: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

User.hasMany(Image);
Image.belongsTo(User);

export { User, Image, sequelize };
