const mongoose = require("mongoose")

const PaymentSchema = mongoose.Schema({
    firstdate:String,
    seconddate : String,
    Adult : String,
    Child : String,
    PropertyL : String,
    Night : String,
    RoomCharge : String,
    Tax : String,
    Vehicles : String,
    TotalAmount : String,
    Name : String,
    Email : String,
    PhoneNumber : String,
    Roomid : String
  });

module.exports = mongoose.model('Payment', PaymentSchema);

