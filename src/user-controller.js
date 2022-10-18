export default class UserController {
   static users = [
        {id: 1, name: 'Hobbit'},
        {id: 2, name: 'Ork'}
    ]

    static getUsers = (req, res) => {
        if (req.params.id) {
            return res.send(this.users.find(user => user.id === +req.params.id))
        }
        res.send(this.users)
    }

    static createUser = (req, res) => {
        const user = req.body
        this.users.push(user)
        res.send(user)
    }
}