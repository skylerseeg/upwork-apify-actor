# 🔍 Upwork Job Scraper – Apify Actor

Automate your Upwork job search with this powerful scraping and alerting system. Built to run as an [Apify Actor](https://apify.com/), this tool scrapes the latest job postings, filters by keywords and budget, and notifies you instantly via email.

---

## 🚀 Features

- 🔎 Scrapes Upwork job listings in real-time
- 📬 Sends email notifications for matching jobs
- 💾 Pushes structured data to Apify Dataset (JSON format)
- 🔧 Easily configurable with custom input fields
- 💡 Ideal for freelancers, agencies, and virtual assistants

---

## 📥 Input Schema

```json
{
  "keywords": ["node.js", "API", "automation"],
  "minBudget": 500,
  "notifyEmail": "you@example.com",
  "emailConfig": {
    "host": "smtp.example.com",
    "port": 587,
    "user": "yourSMTPuser",
    "pass": "yourSMTPpass"
  }
}
