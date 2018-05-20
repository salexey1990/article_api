const ArticleService = require('../service');
const articleService = new ArticleService();

module.exports = class ArticleController {
    async getArticles(req, res) {
        const sort = req.query.sort || 'id';
        const order = req.query.order || 'desc';
        const resource = req.query.resource || 'title';
        const pattern = req.query.pattern;
        const articles = await articleService.getArticles(sort, order, resource, pattern);
        res.send(articles)
    }

    async getArticleById(req, res) {
        const articleId = req.params.id
        const article = await articleService.getArticleById(articleId);
        res.send(article)
    }

    async createArticle(req, res) {
        const createParams = req.body
        const article = await articleService.createArticle(createParams);
        res.send(article)
    }

    async updateArticle(req, res) {
        const updateParams = req.body;
        const articleId = req.params.id;
        const result = await articleService.updateArticle(updateParams, articleId);
        res.send(result)
    }

    async deleteArticle(req, res) {
        const articleId = req.params.id
        const result = await articleService.deleteArticle(id)
        if (result == 1) {
            res.send('ok')
        }
    }
}