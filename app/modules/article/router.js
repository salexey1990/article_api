const Router = require('express').Router
const articleRouter = Router();

const controller = require('./controller')

articleRouter.get('/articles', async (req, res) => {
    const articles = await new controller().getArticles()
    res.send(articles)
})

module.exports = articleRouter;