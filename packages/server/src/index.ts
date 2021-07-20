import express from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
// todo: プロダクション環境のみ静的ファイルを提供
app.use(express.static(path.join(__dirname, '../../client/dist')))

app.get('/api', (req, res) => {
  const response = [{ message: 'Hello world from server!' }]
  res.json(response)
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
