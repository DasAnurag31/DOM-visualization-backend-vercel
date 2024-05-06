const express = require('express');
const geturlfn = require('../controllers/geturl.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'This is the subroute api/v1/geturl' });
});

router.post('/', geturlfn);

module.exports = router;
