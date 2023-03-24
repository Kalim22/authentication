const nodemailer = require('nodemailer')

const mailsend = async () => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth :{
                user: "kalimali2295@gmail.com",
                pass: "qbubbiazjufyruza"
            }
        })

        let details = {
            from : "kalimali2295@gmail.com",
            to: 'studboy71@gmail.com',
            subject: "Testing purpose",
            text: "hello from mail of nodemailer"
        }

        transporter.sendMail(details, (err) => {
            if(err){
                console.log(err)
            }
            console.log('email has sent')
        })
    } catch (error) {
        console.log(error)
    }
}

mailsend()