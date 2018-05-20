const Router = require('express').Router
const articleRouter = Router();

const Controller = require('./controller')
const controller = new Controller()

articleRouter.get('/articles', controller.getArticles)

articleRouter.get('/article/:id', controller.getArticleById)

articleRouter.post('/article', controller.createArticle)

articleRouter.put('/article/:id', controller.updateArticle)

articleRouter.delete('/article/:id', controller.deleteArticle)

module.exports = articleRouter;