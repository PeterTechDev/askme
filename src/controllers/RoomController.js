const Database = require("../database/config")

module.exports = {
    async create(req, res){
        const db = await Database()

        let roomId = ''

        for(let i = 0; i < 6; i++){
           roomId += Math.floor(Math.random() * 10).toString()
        }

        await db.run(``)

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}