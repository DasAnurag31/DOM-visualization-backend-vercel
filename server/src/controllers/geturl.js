const main = require('../services/treeService.js');

const geturlfn = async (req, res) => {
    const { url } = req.body;

    if (!url) return res.status(400).json({ message: 'URL is required' });

    console.log('Received URL:', url);

    try {
        const root = await main(url);
        if (!root) {
            return res.status(400).json({ message: 'Error fetching URL' });
        }
        res.status(200).json({ message: 'Received URL', body: root });
    } catch (error) {
        next(error);
    }
};

module.exports = geturlfn;