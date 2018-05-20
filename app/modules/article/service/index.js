const Models = require('../../../../models');
const op = Models.Sequelize.Op;

module.exports = class ArticleService {

    async getArticles(sort, order, resource, pattern) {
        const findParam = {
            where: {},
            order: [
                [sort, order]
            ]
        }
        if (pattern) {
            findParam.where[resource] = {
                [op.like]: `%${pattern}%`
            }
        }
        return await Models.Article.findAll(findParam)
    }

    async getArticleById(id) {
        return await Models.Article.findById(id)
    }

    async createArticle(params) {
        return await Models.Article.create(params);
    }

    async updateArticle(params, id) {
        return await Models.Article.update(params, {
            where: {
                id: id
            }
        })
    }

    async deleteArticle(id) {
        return await Models.Article.destroy({
            where: {
                id: id
            }
        })
    }
}