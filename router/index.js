const Rules = require('../Rules/');
const Login = require('../modules/login');
const Horta = require('../modules/hortas');

class Router {
    constructor(express) {
       console.log("Router Iniciado, carregando API's...");
       const rules = new Rules(express);
       const login = new Login(express);
       const horta = new Horta(express);
    }
}
module.exports = Router;