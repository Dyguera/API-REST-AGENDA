"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

//router.get('/', userController.index); // Nao deveia ter
// router.get('/:id', userController.show); // Nao deveria ter

router.post('/',_loginRequired2.default, _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update); // Usuario não deve escolher o id
router.delete('/', _loginRequired2.default, _UserController2.default.delete); // Usuario não deve escolher o id
exports. default = router;
