const nodemailer = require('nodemailer');

const sendNotification = async (jobs, config) => {
  if (!jobs.length) return;

  const transporter = nodemailer.createTransport({
    host: config.emailConfig.host,
    port: config.emailConfig.port,
    auth: {
      user: config.emailConfig.user,
      pass: config.emailConfig.pass
    }
  });

  const message = {
    from: `"Upwork Scraper" <${config.emailConfig.user}>`,
    to: config.notifyEmail,
    subject: `🚨 ${jobs.length} New Upwork Jobs`,
    text: jobs.map(job => `${job.title} - ${job.url}`).join('\n'),
  };

  await transporter.sendMail(message);
};

module.exports = sendNotification;
