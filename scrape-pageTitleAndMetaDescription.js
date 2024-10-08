const axios = require('axios');
const cheerio = require('cheerio');

// List of URLs
const urls = [
    'https://masvidahealth.com/',
    'https://masvidahealth.com/about/',
    // Add more URLs here
];

// Function to fetch title and meta description
const fetchMetaData = async (url) => {
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        const title = $('title').text() || 'No title found';
        const metaDescription = $('meta[name="description"]').attr('content') || 'No meta description found';

        console.log(`URL: ${url}`);
        console.log(`Title: ${title}`);
        console.log(`Meta Description: ${metaDescription}`);
        console.log('----------------------');
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error.message);
    }
};

// Iterate over the URLs and fetch their meta data
urls.forEach(fetchMetaData);
