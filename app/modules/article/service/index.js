const Models = require('../../../../models');

module.exports = class ArticleService {
    async getArticles(params) {
        return await Models.User.findAll()
    }
}