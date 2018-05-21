const articleRouter = require('../modules/article/router')
const authRouter = require('../components/passport/router')
const swaggerRouter = require('../components/swagger')
const Router = require('express').Router

const router = Router();
router.use(articleRouter);
router.use(authRouter);
router.use(swaggerRouter);

module.exports = router;