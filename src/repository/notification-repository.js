const notificationTicket = require('../models/notificationticket');

// const NotificationTicket = new notificationTicket();
class TicketRepository{

    async getAll(){
        try {
            const tickets = await notificationTicket.findAll();
            return tickets;
        } catch (error) {
            console.log('something went wrong in repository layer',error);
            throw error;
        }
    }


}


module.exports = TicketRepository;