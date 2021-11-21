const mongoose = require('mongoose')

const dbConnection = async() => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log(`Connection : ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = dbConnection;