const cron = require('node-cron');
const sender = require('../config/emailConfig');
const emailService = require('../services/emailService');
const {sendBasicEmail,fetchPendingEmails} = require('../services/emailService');
const setupJobs = ()=>{

    cron.schedule('*/2 * * * *', async () => {
        const response = await fetchPendingEmails();
        response.forEach(email => {
            sender.sendMail({
                to : email.recipientEmail ,
                subject:email.subject,
                text:email.content
            }, async (err , data)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                    await emailService.updateTicket(email.id ,{status:'SUCCESS'});
                }
            })
        });
        console.log(response);
        // console.log('running a task every minute');
    })

}

module.exports = setupJobs;