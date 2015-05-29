var express = require('express'),
    router = express.Router()
;

router.route('/')
    .get(function(request, response) {
        response.render('homepage');
    }) // close get
;

module.exports = router;
