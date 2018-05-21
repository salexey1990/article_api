const ArticleService = require('../service');
const articleService = new ArticleService();

module.exports = class ArticleController {
    async getArticles(req, res) {
        const sort = req.query.sort || 'id';
        const order = req.query.order || 'desc';
        const resource = req.query.resource || 'title';
        const pattern = req.query.pattern;
        try {
            const articles = await articleService.getArticles(sort, order, resource, pattern);
            res.send(articles)
        } catch (error) {
            res.send('somthing went wrong...')
        }
    }

    async getArticleById(req, res) {
        const articleId = req.params.id
        try {
            const article = await articleService.getArticleById(articleId);
            res.send(article)
        } catch (error) {
            res.send('somthing went wrong...')
        }
    }

    async createArticle(req, res) {
        const createParams = req.body
        try {
            const article = await articleService.createArticle(createParams);
            res.send(article)
        } catch (error) {
            res.send('somthing went wrong...')
        }
    }

    async updateArticle(req, res) {
        const updateParams = req.body;
        const articleId = req.params.id;
        try {
            const result = await articleService.updateArticle(updateParams, articleId);
            res.send(result)
        } catch (error) {
            res.send('somthing went wrong...')
        }
    }

    async deleteArticle(req, res) {
        const articleId = req.params.id
        try {
            const result = await articleService.deleteArticle(articleId)
            if (result == 1) {
                res.send('ok')
            }
        } catch (error) {
            res.send('somthing went wrong...')
        }
    }
}