const ArticleService = require('../service');
const articleService = new ArticleService();

module.exports = class ArticleController {
    async getArticles(params) {
        return await articleService.getArticles(params);
    }
}