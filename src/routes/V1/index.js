const express = require('express');
const ticketController = require('../../controller/ticket-controller');
const router = express.Router();

router.post('/tickets', ticketController.create);
module.exports = router;