const express = require('express')
const app = express()
const cors = require('cors')
const ytdl = require('ytdl-core')

app.use(cors())

app.get('/download', async (req, res) => {
    let URL = req.query.URL

    if (ytdl.validateURL(URL)) {
        let info = await ytdl.getInfo(URL)
        res.header('Content-Disposition', `attachment;filename="${info.videoDetails.title}.mp4"`)
        ytdl(URL, {quality: 'highest'}).pipe(res);
    } 

})

let PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
