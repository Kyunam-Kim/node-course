const app = require("../src/app")
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a Word document"));
//     }

//     cb(undefined, true);
//   },
// });

// app.post("/upload", upload.single("upload"), (req, res) => {
//   res.send()},
//   (error, req, res, next) => {
//       res.status(400).send({ error: error.message })
//   });



// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     next()
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')

// })



// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123'}, 'thisiscode')
//     console.log(token)
// }

// myFunction()

// const main = async () => {
// const task = await Task.findById("62d10aad3a50a747ef4a3018")
// await task.populate('owner')
// console.log(task.owner)

// const user = await User.findById("62cfc510148809e5ba9acb8d")
// await user.populate('tasks')
// console.log(user.tasks)
// }

// main()
