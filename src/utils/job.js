const cron = require('node-cron');
const {sendBasicEmail,fetchPendingEmails} = require('../services/emailService');
const setupJobs = ()=>{

    cron.schedule('*/2 * * * *', async () => {
        const response = await fetchPendingEmails();
        console.log(response);
        // console.log('running a task every minute');
    })

}

module.exports = setupJobs;