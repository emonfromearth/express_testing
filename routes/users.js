const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User home');
}
);

router.get('/new', (req, res) => {
    res.send('User new');
}
);

router.post('/', (req, res) => {
    res.send('User create');
}
);

router.get('/:id', (req, res) => {
    res.send(`User data ${req.params.id}`);
}
);

module.exports = router;