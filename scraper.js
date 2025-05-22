const puppeteer = require('puppeteer');

const scrapeJobs = async (keywords, minBudget) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const url = `https://www.upwork.com/nx/jobs/search/?q=${encodeURIComponent(keywords.join(' '))}&sort=recency`;
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const jobs = await page.evaluate(() => {
    const listings = document.querySelectorAll('[data-test="job-tile-list"] > div');
    return [...listings].map(el => {
      const title = el.querySelector('h4')?.innerText.trim();
      const description = el.querySelector('[data-test="job-description-text"]')?.innerText.trim();
      const url = el.querySelector('a')?.href;
      const skills = [...el.querySelectorAll('[data-test="skill-tag"]')].map(s => s.innerText.trim());
      const experienceLevel = el.querySelector('[data-test="experience-level"]')?.innerText.trim();
      const rate = el.querySelector('[data-test="job-type"] + div')?.innerText.trim();
      return { title, description, skills, experienceLevel, rate, url };
    });
  });

  await browser.close();

  const filteredJobs = jobs.filter(job => {
    const rateNum = parseInt(job.rate?.replace(/[^0-9]/g, '') || '0', 10);
    return rateNum >= minBudget;
  });

  return filteredJobs;
};

module.exports = scrapeJobs;
