const mongoose = require("mongoose");



// for connection with mongodb
mongoose.connect("mongodb://localhost:27017/New").then(() => {
    console.log("Connected successfully");
}).catch((error) => {
    console.log(error);
});


// for building a structure of the collection
const empSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    married: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Employee = mongoose.model('Employee', empSchema);




// for insert single data in database 


const createDocument = async () => {
    try {
        const html = new Employee({
            name: "Node",
            mobile: 12232255,
            age: 22,
            salary: 100,
            married: false
        });

        const css = new Employee({
            name: "css",
            mobile: 12232255,
            age: 22,
            salary: 5000,
            married: true
        });

        const result = await Employee.insertMany([html,css]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};
createDocument();
 
// scheama --> a mongoose scheama is a structure of a document 
//  collection is in the mongoose is like a table 
// document is in the mongoose is like a row



