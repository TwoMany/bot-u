const db = require('../postgres.config');

class UserController {
    async createUser(req, res) {
        const {name, secondname} = req.body;
        const newPerson = await db.query(`INSERT INTO man (name, secondname) values ($1, $2) RETURNING *`, [name, secondname]);

        res.json(newPerson.rows[0]);
    }
    async getAllUsers(req, res){
        const allUsers = await db.query(`SELECT * FROM man`);
        res.json(allUsers.rows);
    }
    async getOne(req, res){
        const id = req.params.id;
        const selectedUser = await db.query(`SELECT * FROM man WHERE id = $1`, [id]);
        res.json(selectedUser.rows[0]);
    }
    async deleteUser(req, res){
        const id = req.params.id;
        const deletedUser = await db.query(`DELETE * FROM man WHERE id = $1`, [id]);
        res.json(deletedUser.rows[0]);
    }
}
module.exports = new UserController();