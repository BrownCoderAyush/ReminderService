const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/notification-repository');
const sendBasicEmail = async(mailFrom , mailTo , mailSubject , mailBody )=>{
    try {
        const response = await sender.sendMail({
             from:mailFrom,
             to:mailTo,
             subject:mailSubject,
             text:mailBody
        });      
    } catch (error) {
        console.log(error);
    }
}


const fetchPendingEmails = async(timestamp)=>{
    try {
        const ticketRepository = new TicketRepository();
        const response  = await ticketRepository.getAll();
        return response;
    } catch (error) {
        console.log('something went wrong in service layer',error);
        throw error;
    }
}
module.exports ={
sendBasicEmail,
fetchPendingEmails
}