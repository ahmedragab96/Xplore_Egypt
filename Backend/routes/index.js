var express = require('express');
var router = express.Router();
const  validationResult  = require('express-validator');
const db = require('../app/config/db');
const bcrypt = require('bcrypt');
var passport = require ('passport');
var LocalStrategy = require('passport-local').Strategy;
const saltRounds = 10;
