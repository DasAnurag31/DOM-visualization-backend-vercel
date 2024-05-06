const express = require('express');
const geturl = require('./geturl');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'This is the subroute api/v1/....',
  });
});

router.use('/geturl', geturl);

module.exports = router;
