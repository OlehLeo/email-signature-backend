const app = require('../index.js');
const router = require('../routes/router.js');

app.use('/api/', router);

module.exports = app;
