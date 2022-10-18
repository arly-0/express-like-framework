import App from "./App.js"
import userRouter from "./src/user-router.js"
import parseJSON from "./middleware/parseJSON.js"
import parseURL from "./middleware/parseURL.js"

const PORT = 8080
const app = new App()

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
app.addRouter(userRouter)
app.use(parseJSON)
app.use(parseURL(`http://localhost:${PORT}`))