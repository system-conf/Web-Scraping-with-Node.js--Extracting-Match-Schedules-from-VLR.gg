const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// URL
const url = 'https://www.vlr.gg/matches';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Maç bilgilerini çek
    const matches = [];
    $('.wf-card').each((index, element) => {
      const date = $(element).find('.wf-label').text().trim();
      const matchTime = $(element).find('.match-item-time').text().trim();
      const teams = $(element).find('.match-item-vs').text().trim();
      const stage = $(element).find('.match-item-event').text().trim();

      matches.push({
        date,
        matchTime,
        teams,
        stage
      });
    });

    // HTML şablonunu oluştur
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Match Schedule</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #2c2c2c; color: #ffffff; }
          .match { border: 1px solid #444; margin: 10px; padding: 10px; border-radius: 5px; }
          .date { font-weight: bold; color: #ff4c4c; }
          .matchTime, .teams, .stage { margin: 5px 0; }
        </style>
      </head>
      <body>
        <h1>Match Schedule</h1>
        ${matches.map(match => `
          <div class="match">
            <div class="date">${match.date}</div>
            <div class="matchTime">Time: ${match.matchTime}</div>
            <div class="teams">Teams: ${match.teams}</div>
            <div class="stage">Stage: ${match.stage}</div>
          </div>
        `).join('')}
      </body>
      </html>
    `;

    // HTML dosyasını kaydet
    const outputDir = path.join(__dirname, 'views');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const outputPath = path.join(outputDir, 'index.html');
    fs.writeFileSync(outputPath, htmlTemplate);
    console.log('HTML file has been created at views/index.html.');
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
