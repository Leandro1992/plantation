const Rules = require('../Rules/');
const Login = require('../modules/login');

class Router {
    constructor(express) {
       console.log("Router Iniciado, carregando API's...");
       const rules = new Rules(express);
       const login = new Login(express);
    }
}
module.exports = Router;