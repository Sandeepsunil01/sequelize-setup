const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize-practice', 'root', 'Sandeep@23', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

const Users = sequelize.define('user', {
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userCode: {
        type: Sequelize.DataTypes.VIRTUAL,
        // get() {
        //     const userPrefix = "Stud-"
        //     return userPrefix;
        // },
        set(value) {
            const userPrefix = "Stud-"
            return setDataValue(userPrefix);
        }
    },
    username : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    password : {
        type: Sequelize.DataTypes.STRING(10),
    },
    age: {
        type: Sequelize.DataTypes.INTEGER(2),
        defaultValue: 21,
    },
    constant: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    with : {
        type: Sequelize.DataTypes.STRING,
    }
});

Users.sync({alter: true}).then((data) => {
    console.log("Sync Successful");
    return Users.create({
        "username" : "Sandeep",
        "password": "Pass"
    });
}).catch((error) => {
    console.log(`Errors $error`);
});

// async function connection() {
//     await sequelize.authenticate();
//     console.log("Connection Successful");
// }

// connection();

// This Can Also be written as follow
sequelize.authenticate().then(() => {
    console.log("Connection Successful");
}).catch((error) => {
    console.log("Error Connecting to Database");
});

console.log("Another Task");