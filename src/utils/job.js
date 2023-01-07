const cron = require('node-cron');
const sender = require('../config/emailConfig');
const emailService = require('../services/emailService');
const {sendBasicEmail,fetchPendingEmails} = require('../services/emailService');
const setupJobs = ()=>{

    cron.schedule('*/2 * * * *', async () => {
        const response = await fetchPendingEmails();
        response.forEach(email => {
            // const min1 = new Date().getMinutes();
            console.log("before ->" , new Date());
            sender.sendMail({
                to : email.recipientEmail ,
                subject:email.subject,
                text:email.content
            }, async (err , data)=>{
                if(err){
                    console.log(err);
                }else{
                    // console.log(data);
                    console.log("after ->" , new Date());
                    await emailService.updateTicket(email.id ,{status:'SUCCESS'});
                }
            })
        });
        console.log(response);
        // console.log('running a task every minute');
    })

    // set more cron jobs
}

module.exports = setupJobs;