const Sib = require('sib-api-v3-sdk')
const client = Sib.ApiClient.instance
require('dotenv').config();

const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY;
console.log(process.env.API_KEY + "===============key");
const tranEmailApi = new Sib.TransactionalEmailsApi()
const sender = {
    email: 'thegreenland.prakriti@gmail.com',
    name: 'Raj',
}
const receivers = [
    {
        email: 'rajkasotiya26@gmail.com',
    },
]



tranEmailApi
    .sendTransacEmail({
        // host: "smtp.gmail.com",
        sender,
        to: receivers,
        subject: 'Raj is here',
        textContent: `
        Chal gya email
        `,
        // htmlContent: `
        // <h1>Cules Coding</h1>
        // <a href="https://cules-coding.vercel.app/">Visit</a>
        //         `,
        // params: {
        //     role: 'Frontend',
        // },

    })
    .then(console.log)
    .catch(console.log)

    //xsmtpsib-f53ed785714f05aa349a6d86a96f2bf737df641e165d35ed8e2e766207a768b1-zJtBsUD5QkFZMwHR