import { DataTypes, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize(process.env.DB_CONNECTION_URL, {
  dialect: 'postgres',
  ssl: true, // Enable SSL for secure connection (Render PostgreSQL requires SSL)
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Disable SSL verification (necessary for some setups)
    }
  }
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true,
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
  savedImages: {
    type: DataTypes.ARRAY(DataTypes.INTEGER), // Array of Image IDs
    defaultValue: [],
  },
}, {
  tableName: 'User',
});

const Image = sequelize.define('Image', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
  },
  email: {
    type: DataTypes.STRING,
    trim: true,
  },
  phone: {
    type: DataTypes.STRING,
  },
  expectedSalary: {
    type: DataTypes.STRING,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    lowercase: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  currentStatus: {
    type: DataTypes.STRING,
  },
  nodejsExperience: {
    type: DataTypes.STRING,
  },
  reactjsExperience: {
    type: DataTypes.STRING,
  },
  image: {
    type: [DataTypes.JSONB],
  },
  category: {
    type: DataTypes.STRING,
  },
  published: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  score: {
    type: DataTypes.INTEGER,
  },
  creatorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
    },
  },
}, {
  tableName: 'Image'
});

// Define the association with the User model
Image.belongsTo(User, { foreignKey: 'creatorId' }); // Assuming creatorId is the foreign key in the Image model
export { User, Image, sequelize };
