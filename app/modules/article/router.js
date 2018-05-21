const Router = require('express').Router
const articleRouter = Router();
const auth = require('../../components/passport/authMiddleware')

const Controller = require('./controller')
const controller = new Controller()

articleRouter.get('/articles', controller.getArticles)

articleRouter.get('/article/:id', auth, controller.getArticleById)

articleRouter.post('/article', auth, controller.createArticle)

articleRouter.put('/article/:id', auth, controller.updateArticle)

articleRouter.delete('/article/:id', auth, controller.deleteArticle)

module.exports = articleRouter;