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
````

---

## 📤 Output Format

Each job is saved with the following fields:

* `title`
* `rate`
* `experienceLevel`
* `skills`
* `description`
* `url`

---

## 🛠 How to Deploy to Apify

1. Go to [Apify Console](https://console.apify.com/)
2. Create a new Actor → Upload this repo as a ZIP or connect via GitHub
3. Configure your input schema in the Actor UI
4. Schedule it to run hourly or on demand

---

## 📜 License

MIT License — use it freely, modify, and contribute back if you improve it 💙

---

## ✨ Built by [Skyler Seegmiller](https://github.com/skylerseeg)

For automation services, reach out at [8om8work.com](https://8om8work.com)

````

---

### 📄 `LICENSE` (MIT License)

```text
MIT License

Copyright (c) 2025 Skyler Seegmiller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

---

### 📦 `.gitignore`

```gitignore
# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# dotenv
.env

# Apify local storage
apify_storage/

# Logs and temp files
logs/
*.log

# OS
.DS_Store
Thumbs.db

# IDEs and editors
.vscode/

# Deployment zips
*.zip
```

---
