const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const {PORT , DB_SYNC} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');
// const { sendBasicEmail } = require('./services/emailService');
const app = express();

const setupAndStartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api' , apiRoutes);

    app.listen(PORT , ()=>{
        console.log(`Server started running on port ${PORT}`);
        if(DB_SYNC){
            db.sequelize.sync({alter:true});
        }

        // sendBasicEmail(
        //     'ayushplayzsoft@gmail.com',
        //     'ayushplayssoft@gmail.com',
        //     'This is testing email',
        //     'Hey, how are you , I hope you like the support'
        // );
        cron.schedule('* * * * *', () => {
            console.log('running a task every minute');
          })
    })
}


setupAndStartServer();