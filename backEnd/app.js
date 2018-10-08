require('./config/db');
require('./config/passportConfig');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const app = express();
const users = require('./routes/users');
const members = require('./routes/members');
const contacts = require('./routes/contacts');
const files = require('./routes/common');
const videos = require('./routes/videos');
const events = require('./routes/events');
const tasks = require('./routes/tasks');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport.js')(passport);

app.use('/users', users);
app.use('/members', members);
app.use('/files', files);
app.use('/videos', videos);
app.use('/events', events);
app.use('/tasks', tasks);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
});


