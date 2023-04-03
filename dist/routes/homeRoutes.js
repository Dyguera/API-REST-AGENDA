"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Estou usando destruction, mas poderia ser normal: import express from 'express'
// const ruter = new express.Router()
var _express = require('express');
var _HomeController = require('../controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController);

const router = new (0, _express.Router)();
router.get('/', _HomeController2.default.index);
exports. default = router;
