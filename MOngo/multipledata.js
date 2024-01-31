const mongoose = require("mongoose");



// for connection with mongodb
mongoose.connect("mongodb://localhost:27017/hanuman" ,{ userNewurlParser :true,useunifindTopology:true}).then(() => {
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


// Inserting many data into the database collection

const createE1 = new Employee({
    name: "happy",
    mobile: 144552,
    age: 19,
    salary: 5000,
    married: true
});

const createE2 = new Employee({
    name: "Atul",
    mobile: 13235,
    age: 24,
    salary: 1000,
    married: false
});

const createE3 = new Employee({
    name: "Dell",
    mobile: 45787,
    age: 33,
    salary: 23000,
    married: true
});

// async function insertData() {
//     try {
//         const empData = await Employee.insertMany([createE1, createE2, createE3]);
//         console.log(empData);
//     } catch (error) {
//         console.error(error);
//     }
// }




//this  is used to read data from database 



    const getData =async () =>{
        try{
        const result =  await Employee.find()    //findone,findMany  is used for fetch one data 
        // .select({name:1})
    //    .limit(1)                             //this is use for limit data 
    // .sort({name:1})                          //this method is use for sort data in assending and decending order
    .countDocuments();                          //count documents is use for count how many data is in the databse  
        console.log(result)
       }catch(err){
        console.log(err);
       }
       
}

// Call the async function
// insertData();

getData();

const updateData = async (_id) => {
    try {
        const result = await Employee.findByIdAndUpdate({ _id }, {
            $set: {
                name: "LAlALala"
            }
        },{
            userFindAndModify : false
        });
        console.log(result);
    } catch (err) {
        console.log(err); // Fixed: Change curly braces to parentheses
    }
}

updateData("65b9da369041fe1ec6f4fe8c");
