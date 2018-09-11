var apiController = require('./apicontroller');

module.exports = [
    {method: 'POST', path: '/test_callback', config: apiController.testCallback}
];