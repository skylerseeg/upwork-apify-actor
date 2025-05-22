const Apify = require('apify');
const scrapeJobs = require('./scraper');
const sendNotification = require('./notifier');

Apify.main(async () => {
    const input = await Apify.getInput();
    const { keywords = ['node.js', 'API'], minBudget = 500, notifyEmail = '', emailConfig = {} } = input;

    const jobs = await scrapeJobs(keywords, minBudget);
    await Apify.pushData(jobs);

    if (notifyEmail) {
        await sendNotification(jobs, { notifyEmail, emailConfig });
    }
});
