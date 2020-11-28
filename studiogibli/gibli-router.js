const axios = require('axios');

const router = require('express').Router();
const restricted = require('../auth/authenticate-middleware')

router.get('/', restricted, (req, res) => {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://ghibliapi.herokuapp.com/films', requestOptions)
    .then(response => {
      console.log(response.data[0].title);
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
});

module.exports = router;
