
const proxy = require("http-proxy-middleware");
// import { proxy } from "http-proxy-middleware";

module.exports = (app) => {
    app.use(
        proxy('/insert.php', {
            target: 'http://localhost/fullContact',
            changeOrigin: true
        })
    )
}
