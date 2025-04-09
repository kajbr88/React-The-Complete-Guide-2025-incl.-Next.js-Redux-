const bodyParser = require('body-parser');
const express = require('express');

const eventRoutes = require('./routes/events');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

app.use(authRoutes);

app.use('/events', eventRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

app.listen(8080);


// {"events":[{"title":"A new event","image":"https://cdn.muenchen-p.de/fl_progressive,q_65/.imaging/stk/responsive/teaser300/dms/va-2016/muenchner-christkindlmarkt/christkindlmarkt-marienplat-logo-hp/document/christkindlmarkt-marienplat-logo-hp.jpg","date":"2022-10-01","description":"Some awesome event!","id":"2a42fcc4-ea21-4bdd-abf6-c40006dc66a9"}],"users":[{"email":"test@test.com","password":"$2a$12$pyHImGMgWaWOhyu9VId8j.0ITxoLhfL/v81u7/NDnOhLIVsxi/Pje","id":"cdcd1f89-703e-4fdd-a1c1-1c9e50f4a5b3"},{"email":"sdfas12@gmail.com","password":"$2a$12$kllaQeS05jPv1cddTmCOW.izOZN1SOk8t/5.DyVPTacG5IorG7moK","id":"11a2de6b-39e6-4990-8733-97d7b3d9678c"},{"email":"dsfs45@fd.com","password":"$2a$12$i0EwPwqZPfMN13kC1wFQtOsCABmMzDDSgxsq3VrOH92UmdgZtkFVu","id":"e56b60a3-b616-4338-a42f-2f0ef0586f9e"},{"email":"test2@test.com","password":"$2a$12$Rp4zqTcj2h6cSH12adId3u07AmE3E7zHCRqBUmZSkH7SgORrcWke2","id":"549cda7d-4f0b-4313-879c-267b13663922"},{"email":"test3@test.com","password":"$2a$12$EIdTMBrEFRQwd1nDYrplq.DBUm8lHNlabDpIh2qJutDuRRp6EGqg.","id":"3da35591-36ac-4feb-aa3f-fb04e36ea3b9"}]}