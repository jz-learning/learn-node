const app = require('express')();
const PORT = 8080;

// Start our API, listen on port
app.listen(PORT, () => console.log(`API is live on http://localhost:${PORT}`));
