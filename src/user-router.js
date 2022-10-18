import Router from "../Router.js"
import UserController from "./user-controller.js"

const userRouter = new Router()

userRouter.get('/users', UserController.getUsers)

userRouter.post('/users', UserController.createUser)

export default userRouter