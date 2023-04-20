const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const jobs = require('./utils/job');

const {PORT , DB_SYNC} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');
const { createChannel , subscribeMessage } = require('./utils/messageQueue');
const { REMINDER_BINDING_KEY } = require('./config/serverConfig');
const EmailService = require('./services/emailService');
const app = express();

const setupAndStartServer = async ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api' , apiRoutes);

    app.listen(PORT , async ()=>{
        console.log(`Server started running on port ${PORT}`);
        if(DB_SYNC){
            db.sequelize.sync({alter:true});
        }

        /* rabbit mq broker channel */ 
        const channel = await createChannel();

        /*Subscribing to the messages on <REMINDER_BINDING_KEY> Queue */
        subscribeMessage(channel , EmailService , REMINDER_BINDING_KEY);

        /* cron jobs  */
        jobs();
               
    })
}


setupAndStartServer();