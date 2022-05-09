const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use (express.urlencoded({ extended: false}));
appluse(express.json());

// last route
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});