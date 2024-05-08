const jsdom = require("jsdom");
const puppeteer = require('puppeteer');

const { JSDOM } = jsdom;

const fetchHTMLWithPuppeteer = async (url) => {
    try {
        const browser = await puppeteer.launch();
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



class MyTreeNode {
    tagName;
    children;
    content;
    x;
    y;

    constructor(tagName, children, content, x, y) {
        this.tagName = tagName;
        this.children = children || [];
        this.content = content || "";
        this.x = x || 0;
        this.y = y || 0;
    }

    addNode(node) {
        this.children.push(node);
    }
}

function createTree(root, window, map, x, y) {
    if (root == null) {
        return null;
    }

    if (root.nodeType == window.Node.ELEMENT_NODE) {
        const tagName = root.tagName;

        const directTextContent = Array.from(root.childNodes)
            .filter(node => node.nodeType === window.Node.TEXT_NODE)
            .map(node => node.textContent.trim())
            .join('')
            .slice(0, 1000);

        let node = new MyTreeNode(tagName, [], directTextContent, x, y);
        let children = root.childNodes;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child.nodeType !== window.Node.ELEMENT_NODE) {
                continue;
            }
            if (map.get(y) === undefined) {
                map.set(y, 0)
            }
            let childNode = createTree(children[i], window, map, map.get(y), y + 1);
            map.set(y, map.get(y) + 1);
            if (childNode != null) {
                node.addNode(childNode);
            }
        }
        return node;
    }
}

const fetchHTML = async (url) => {
    try {
        const response = await fetch(url);

        const status = response.status;
        if (status > 399) {
            console.log(`Error with fetching data status code: ${response.status} in page ${url}`);
            return;
        }

        const htmlContent = await response.text();
        return htmlContent;
    } catch (err) {
        console.log("Error with fetching " + err);
        return "";
    }
}

const main = async (url) => {
    const htmlContent = await fetchHTML(url);

    const dom = new JSDOM(htmlContent);

    const map = new Map([[0, 0]]);
    const root = dom.window.document.querySelector('body');
    const rootNode = createTree(root, dom.window, map, 0, 0);
    return rootNode;
}

module.exports = main;