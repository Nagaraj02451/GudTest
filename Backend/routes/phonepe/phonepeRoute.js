const {newPayment, checkStatus, RoomPost, RoomGet, RoomRemo, update_data, RoomDataLast, RoomDataremove, RoomData} = require('../../controller/phonepe/paymentController');
const express = require('express');
const router = express();

router.post('/payment', newPayment);
router.post('/status/:txnId', checkStatus);
router.post('/sevenrooms', RoomPost);
router.get('/sevenrooms', RoomGet);
router.delete('/gird/:id', RoomRemo);
router.put('/alterego/:id', update_data);
router.post('/room', RoomDataLast);
router.get('/room', RoomData);
router.delete('/roomremove/:id', RoomDataremove);

module.exports = router;