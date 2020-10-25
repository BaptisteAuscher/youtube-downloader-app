const express = require('express')
const app = express()
const cors = require('cors')
const ytdl = require('ytdl-core')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Not supposed to be there')
})

app.get('/download', async (req, res) => {
    let format = req.query.format
    let URL = req.query.URL
    console.log(format)
    if (!URL || !format) {
        res.send('No url there')
    }

    if (ytdl.validateURL(URL)) {
        let info = await ytdl.getInfo(URL)
        switch (format) {
            case 'audio':
                res.header('Content-Disposition', `attachment;filename="${info.videoDetails.title}.mp3"`)
                ytdl(URL, {quality: 'highest', filter: 'audioonly'}).pipe(res);
                break;
            case 'video':
                res.header('Content-Disposition', `attachment;filename="${info.videoDetails.title}.mp4"`)
                ytdl(URL, {quality: 'highest'}).pipe(res);
                break;
        }
    } else {
        res.send('Not valid url')
    }

})

let PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
