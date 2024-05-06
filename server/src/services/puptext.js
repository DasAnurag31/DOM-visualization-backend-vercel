const puppeteer = require('puppeteer');

const fetchHTMLWithPuppeteer = async (url) => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto(url, { waitUntil: 'networkidle2' });
        const htmlContent = await page.content();

        await browser.close();

        return htmlContent;
    } catch (err) {
        console.error("Error with fetching " + err);
        return "";
    }
};

module.exports = fetchHTMLWithPuppeteer;
