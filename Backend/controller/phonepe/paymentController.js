const crypto =  require('crypto');
const axios = require('axios');
const collectionroom = require("../../Scheema/RoomScheema");
const PaymentScheemaLast = require("../../Scheema/Paydata")

const newPayment = async (req, res) => {

    try {

        const merchantTransactionId = req.body.transactionId;
        const data = {
            merchantId: process.env.merchant_id,
            merchantTransactionId: merchantTransactionId,
            merchantUserId: req.body.MUID,
            name: req.body.name,
            amount: req.body.amount * 100,
            redirectUrl: `http://localhost:2000/api/status/${merchantTransactionId}`,
            redirectMode: 'POST',
            mobileNumber: req.body.number,
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        };

        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + process.env.salt_key;

        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const test_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
        // const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"

        const options = {
            method: 'POST',
            // url: prod_URL,
            url: test_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };

        // console.log("Datas" , options);


        axios.request(options).then(function (response) {
            // console.log(response.data.success)
            return res.send(response.data.data.instrumentResponse.redirectInfo.url)
        })


        .catch(function (error) {
            console.error(error);
        });

       
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const checkStatus = async(req, res) => {
    const merchantTransactionId = res.req.body.transactionId
    const merchantId = res.req.body.merchantId

    const keyIndex = 1;
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + process.env.salt_key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + "###" + keyIndex;

    const options = {
    method: 'GET',
    url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum,
        'X-MERCHANT-ID': `${merchantId}`
    }
    };

    
    // CHECK PAYMENT TATUS
    axios.request(options).then(async(response) => {
        console.log(response.data)
        if (response.data.success === true) {
            const url = `http://localhost:3000/final`
            return res.redirect(url)
            
        } else {
            const url = `http://localhost:3000/failed`
            return res.redirect(url)
        }
    })
    .catch((error) => {
        console.error(error);
    });
};


const RoomDataLast =  async (req, res) => {
    const ContactLast = new PaymentScheemaLast({
        ...req.body
    })
     const datas =  await ContactLast.save()
    
      res.json(datas)
  };

  const RoomDataremove =  async (req, res) => {
    const Data_scheema = await PaymentScheemaLast.findByIdAndDelete(req.params.id)
    res.json({Msg:"Deleted"  , Data_scheema} )
  };

  const RoomData =  async (req, res) => {
    const orders = await PaymentScheemaLast.find();
    res.json(orders);
  };
    
const RoomPost =  async (req, res) => {
    const Contact = new collectionroom({
        ...req.body
    })
     const datas =  await Contact.save()
    
      res.json(datas)
  };
    
  const RoomGet =  async (req, res) => {
    const orders = await collectionroom.find();
    res.json(orders);
  };

  const RoomRemo =  async (req, res) => {
    const Data_scheema = await collectionroom.findByIdAndDelete(req.params.id)
    res.json({Msg:"Deleted"  , Data_scheema} )
  };


  const update_data = async(req , res)=>{
    const updatedata = await collectionroom.findByIdAndUpdate(req.params.id , {$set : req.body} , {new : true})
    res.json(updatedata)
}


module.exports = {
    newPayment,
    checkStatus,
    RoomPost,
    RoomGet,
    RoomRemo,
    update_data,
    RoomDataLast,
    RoomDataremove,
    RoomData
}
