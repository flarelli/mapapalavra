const fs = require('fs')
const csv = require('fast-csv')
const stream = fs.createReadStream('../csv/dados.csv')
const streamCsv = csv({
    headers: true,
    delimiter:","
}
).on('data', data => console.log(data))
stream.pipe(streamCsv)
