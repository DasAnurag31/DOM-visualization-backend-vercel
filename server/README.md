# DOM Tree Visualizer

Welcome to the DOM Tree Visualizer! 🌳

Have you ever wanted to peek under the hood of a website and see how its structure is laid out? With our tool, you can do just that! Whether it's a simple static webpage or a complex dynamic site, we've got you covered.

Simply input the URL of the webpage you're curious about, and our visualizer will do the rest. Behind the scenes, we use the powerful Puppeteer library to render the webpage in a headless browser, fetch its Document Object Model (DOM), and display it in an easy-to-understand tree format.

Imagine being able to explore the hierarchy of elements, from the root `<html>` tag down to the smallest `<div>` or `<span>`. You'll see how each element is nested within others, giving you insights into how the webpage is structured and how different components interact.

Whether you're a web developer looking to debug your own site, a student learning about HTML and CSS, or just someone curious about how websites are built, our DOM Tree Visualizer is here to help you explore the fascinating world of web development. So go ahead, enter a URL, and let's dive into the DOM together! 🚀

## DOM Tree Visualizer Backend

Welcome to the DOM Tree Visualizer Backend repository! 🌐

This repository contains the backend code for our DOM Tree Visualizer project. It's responsible for fetching webpages, rendering them using Puppeteer, and providing the DOM tree data.

### Technologies Used:

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Puppeteer](https://www.npmjs.com/package/puppeteer)

### Getting Started:

To get started with the backend development, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the server using `npm start`.

### Frontend Repository:

If you're looking for the frontend code of our DOM Tree Visualizer project, you can find it in the [DOM Tree Visualizer Frontend repository](https://github.com/your-username/frontend-repo). The frontend is responsible for providing the user interface to input URLs and displaying the DOM tree visualization.

Feel free to explore both repositories and contribute to my project!

### About Hosting:

Hosting the DOM Tree Visualizer backend posed some challenges due to our use of Puppeteer. As Puppeteer requires a full browser environment, it couldn't be easily deployed on serverless platforms like Vercel, which utilize AWS Lambda functions in the background.

Additionally, attempts to host on services like Render resulted in issues with locating cache files for Chrome that Puppeteer relies on.

I have included the ```vercel.json``` for config related to hosting on vercel. 

#### Possible Solutions:

1. **AWS EC2 Instance**: Hosting the backend on an AWS EC2 instance provides full control over the environment and allows for the installation of dependencies like chromium reqquired by puppeteer

2. **Browserless Services**: Services like Browserless offer solutions tailored for running headless browsers in a hosted environment. However, some services may come with limitations or trial periods. In there case for the time being it is 7days of free trial for all tiers of services. 

#### Seeking Suggestions:

If you have expertise or suggestions on alternative hosting solutions for our DOM Tree Visualizer backend, we're open to hearing them! Feel free to reach out and contribute to the project.

### Application Development Utilities:

- [puppeteer](https://www.npmjs.com/package/puppeteer)

  - Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can be used to automate tasks such as web scraping, taking screenshots, generating PDFs, and more.

- [jsdom](https://www.npmjs.com/package/jsdom)
  - JSDOM is a JavaScript implementation of the WHATWG DOM and HTML standards. It's designed to simulate a browser environment within Node.js, allowing you to parse and manipulate HTML and XML documents using familiar APIs such as those provided by browsers. This is particularly useful for testing and web scraping tasks where a full browser environment isn't required.

### Includes API Server utilities:

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### Development utilities:

- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Development

```
npm run dev
```
