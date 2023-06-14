const mongoose = require('mongoose');

module.exports = () => {
    // const connectionParams = {         // connectionParams which required to connect our database
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    // };
    try{
        mongoose.connect(process.env.DB, {useNewUrlParser:true,
            useUnifiedTopology:true,})
        console.log('connected to database successfully');
    } catch (error) {
        console.log(error);
        console.log('could not connect to database')
    }
}