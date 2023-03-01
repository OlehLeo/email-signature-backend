import app from '../index.js';
import router from '../routes/router.js';

app.use('/api/', router);

export default app;
