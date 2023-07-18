const mailer = require("nodemailer")

var smtpProtocol  = mailer.createTransport({
    service:"gmail",
    auth:{
        user:"satya.sai.allam@gmail.com",
        pass:"sikbntmlfigypfon"
    }
})

var mailoption  = {
    from:"satya.sai.allam@gmail.com",
    to:"prasannagokada1996@gmail.com",
    subject:"Test mail",
    html:"Good morning"
}

smtpProtocol.sendMail(mailoption, function(err, response){
    if(err){
        console.log(err)
    }
    else{
    console.log("Message sent" + response.response)
}
    smtpProtocol.close()
})


