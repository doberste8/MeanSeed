// server/app/routes/index.ts
var path = require('path');
var router = require('express').Router();
router.use(function (req, res, next) {
    next();
});
// server routes ============================================================
var api = require('./api');
router.use('/api', api);
// frontend routes ==========================================================
// route to handle all angular requests
router.get('*', function (req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, '../../../../client')
    });
});
console.log(path.join(__dirname, '../../../../client'));
module.exports = router;
