const ArticleService = require('../service');
const articleService = new ArticleService();

module.exports = class ArticleController {

/**
 * @swagger
 * tags:
 *   - name: Article
 *     description: Операции со статьями
 * definitions:
 *    articleObject:
 *        type: object
 *        required:
 *           - id
 *           - title
 *           - body
 *           - author
 *           - createdAt
 *           - updatedAt
 *        properties:
 *           title:
 *              type: string
 *              description: Заголовок статьи
 *           body:
 *              type: string
 *              description: Текст статьи
 *           author:
 *              type: string
 *              description: Автор статьи
 */

/**
 * @swagger
 * /articles:
 *   get:
 *     tags:
 *       - Article
 *     summary: Получить список статей
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: sort
 *         description: Поле по которому производится сортировка
 *         in: query
 *         required: false
 *         type: string
 *       - name: order
 *         description: Порядок сортировки
 *         in: query
 *         required: false
 *         type: string
 *       - name: resource
 *         description: Поле по которому производить поиск
 *         in: query
 *         required: false
 *         type: string
 *       - name: pattern
 *         description: Паттерн по которому производить поиск
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Успешное выполнение
 *         schema:
 *            type: array
 *            items:
 *              allOf:
 *                - $ref: '#/definitions/articleObject'
 */
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

/**
 * @swagger
 * /article/{id}:
 *   get:
 *     tags:
 *       - Article
 *     summary: Получить статью по id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id статьи, которую необходимо получить
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: Успешное выполнение
 */

    async getArticleById(req, res) {
        const articleId = req.params.id
        try {
            const article = await articleService.getArticleById(articleId);
            res.send(article)
        } catch (error) {
            res.send('somthing went wrong...')
        }
    }

/**
 * @swagger
 * /article:
 *   post:
 *     tags:
 *       - Article
 *     summary: Создать новую статью
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: data
 *         description: Данные
 *         in: body
 *         required: true
 *         schema:
 *            $ref: '#/definitions/articleObject'
 *     responses:
 *       200:
 *         description: Успешное выполнение
 */

    async createArticle(req, res) {
        const createParams = req.body
        try {
            const article = await articleService.createArticle(createParams);
            res.send(article)
        } catch (error) {
            res.send('somthing went wrong...')
        }
    }

/**
 * @swagger
 * /article/{id}:
 *   put:
 *     tags:
 *       - Article
 *     summary: Изменить существующую статью
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Идентификатор изменяемой статьи
 *         in: path
 *         required: true
 *       - name: data
 *         description: Данные
 *         in: body
 *         required: true
 *         schema:
 *            $ref: '#/definitions/articleObject'
 *     responses:
 *       200:
 *         description: Успешное выполнение
 */

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

/**
 * @swagger
 * /article/{id}:
 *   delete:
 *     tags:
 *       - Article
 *     summary: Удалить существующую статью
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Идентификатор удаляемой статьи
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Успешное выполнение
 */

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