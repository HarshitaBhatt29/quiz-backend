const {v4:uuid} = require("uuid");
const userdata={
    data:[
        {
         id:uuid(),
         username:"harshita",
         password:"hb1234",

         emailId:"hb212@gmail.com"
        },
        {
            id:uuid(),
            username:"bhatt",
            password:"hb2904",
            emailId:"bhatt2904@gmail.com"
        },
    ]
}

module. exports = userdata;
