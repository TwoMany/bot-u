const db = require('../postgres.config');

class BlogController {
    async createBlog(req, res) {
        const { title, content, man_id} = req.body;
        const newBlog = await db.query(`INSERT INTO blog (title, content, man_id) values ($1, $2, $3) RETURNING *`, [title, content, man_id]);
        res.json(newBlog.rows[0]);
    }
    async getBlogByUser(req, res) {
        const id = req.params.id;
        const selectedBlog = await db.query(`SELECT * FROM blog WHERE man_id = $1`, [id]);
        res.json(selectedBlog.rows);
    }
}
module.exports = new BlogController();