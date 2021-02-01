const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);

	const { name, email, message } = req.body;

	const emailToFrom = {
		to: "hey@olivercederborg.com",
		from: "hey@olivercederborg.com",
	};

	const content = {
		to: emailToFrom.to,
		from: emailToFrom.from,
		subject: `New Message From: ${name}`,
		text: message,
		html: `<p><strong>Name: ${name}<br>
          Email: ${email}</strong>
          <br><br>
          Message: ${message}
          </p>`,
	};

	try {
		await sgMail.send(content);
		res.status(200).send("Message sent successfully.");
	} catch (error) {
		console.log("ERROR", error);
		res.status(400).send("Message not sent.");
	}
}
