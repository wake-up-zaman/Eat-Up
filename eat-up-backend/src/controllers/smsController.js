const Sms = require("../models/smsModel.js");
const User = require("../models/userModel.js");
const accountSid = 'AC232948ff0e157da3a49a93242d8fa98c';
const authToken = '1531d7efb878f17019e984ef21e5f439';
const client = require('twilio')(accountSid, authToken);

const createSms = async (req, res, next) => {
    try {
        const newMessage = new Sms(req.body);
        const newUser = await User.find({});
        const UserNumbers = newUser.map(obj => obj.phoneNumber);
        UserNumbers.forEach((number) => {
            client.messages
                .create({
                    body: newMessage.message,
                    from: '+15075933665',
                    to: number
                })
                .then(message => console.log("Message sent to ", number, ", Id is", message.sid))
                .catch((error) => {
                    console.log(error);
                });
        });
        const result = "message sent successfully";
        res.status(200).json({ result, UserNumbers, newMessage })
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createSms,
};






            // client.validationRequests
            // .create({friendlyName: 'My Home Phone Number', phoneNumber: '+8801799199335'})
            // .then(validation_request => console.log(validation_request.friendlyName));


//Special Doctor will come May,20.If you need any treatment,We are encouraged to come to Doctor's Village
//Our Doctor's village will be off on 21th May