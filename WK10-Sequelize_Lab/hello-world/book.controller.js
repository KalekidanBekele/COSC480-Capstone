const { Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    'hello_world_db',
    'root',
    '',
    {
        host:'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const Book = sequelize.define("books", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATEONLY,
    },
    subject: {
        type: DataTypes.INTEGER,
    }
});

sequelize.sync().then(() => {
    console.log('Book table created successfully!');

    /*Create the books within the table
    Book.create({
        title: "Clean Code",
        author: "Rober Cecil Martin",
        release_date: "2021-12-14",
        subject: 3
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to created a new record: ', error);
    });*/

    /*Finding all te books in the table
    sequelize.sync().then(() => {
        Book.findAll().then(res => {
            console.log(res)
        }).catch((error) => {
            console.error('Failed to retrieve data: ', error);
        });
    });*/

    /* Search for one book in the table with the specific conditions
    sequelize.sync().then(() => {
        Book.findOne({
            where: {
                
                id: "1"
                
            }
        }).then(res => {
            console.log(res)
        }).catch((error) => {
            console.error('Failed to retrieve data: ', error);
        });
    })*/

    sequelize.sync().then(() => {
        Book.destroy({
            where: {
                id: 2
            }
        }).then(() => {
            console.log("Successfully deleted record.")
        }).catch((error) => {
            console.error('Failed to delete record: ', error);
        });
    })
    
}).catch ((error) => {
    console.error('Unable to create table: ', error);
});

