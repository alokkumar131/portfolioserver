const express = require("express");
const router = express.Router();

const userTicketsController = require("../controllers/user-tickets-controller");


router.get('/tickets',userTicketsController.getTickets);
// user/tickets

router.post('/submit',userTicketsController.onSubmit);

module.exports = router;