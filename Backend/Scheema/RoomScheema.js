const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    Roomid:String,
    RoomType : String,
    RoomPhoto : String,
    RoomName : String,
    Charge : String,
  });

module.exports = mongoose.model('Order', OrderSchema);

