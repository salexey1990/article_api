const articleRouter = require('../modules/article/router')
const authRouter = require('../components/passport/router')
const Router = require('express').Router

const router = Router();
router.use(articleRouter);
router.use(authRouter);

module.exports = router;