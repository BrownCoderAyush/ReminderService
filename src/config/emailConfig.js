const nodemailer = require('nodemailer');


const { EMAIL_ID , EMAIL_PASS } = require('./serverConfig');

const sender = nodemailer.createTransport({
    service : 'Gmail' , 
    // this is important to prevent ' Unexpected socket close'
    secure:true,
    auth : {
        user : EMAIL_ID , 
        pass : EMAIL_PASS 
    }
});


module.exports = sender;