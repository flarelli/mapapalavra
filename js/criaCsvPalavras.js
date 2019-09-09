const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('../csv/dados.csv');

request('https://dicionariocriativo.com.br/amor',(error,response, html) =>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        const palavra = $('h1').text();
        
        $('.tags a').each((i,el) => {
            const sinonimo = $(el).text();
            const link = $(el).attr('href');

            writeStream.write(`${palavra}, ${sinonimo} \n`);

            // request(link,(error,response,html) =>{
            //     if(!error && response.statusCode == 200){
            //         const $ = cheerio.load(html);

            //         const palavra1 = $('h1').text();
                    
            //         $('.tags a').each((i,el) => {
            //         const sinonimo1 = $(el).text();
            //         const link1 = $(el).attr('href');

            //         writeStream.write(`${palavra1}, ${sinonimo1} \n`);

            //         request(link1,(error,response,html) =>{
            //             if(!error && response.statusCode == 200){
            //                 const $ = cheerio.load(html);
        
            //                 const palavra2 = $('h1').text();
                            
            //                 $('.tags a').each((i,el) => {
            //                 const sinonimo2 = $(el).text();
            //                 const link2 = $(el).attr('href');
        
            //                 writeStream.write(`${palavra2}, ${sinonimo2} \n`);

            //                 request(link2,(error,response,html) =>{
            //                     if(!error && response.statusCode == 200){
            //                         const $ = cheerio.load(html);
                
            //                         const palavra3 = $('h1').text();
                                    
            //                         $('.tags a').each((i,el) => {
            //                         const sinonimo3 = $(el).text();
            //                         const link3 = $(el).attr('href');
                
            //                         writeStream.write(`${palavra3}, ${sinonimo3} \n`);

            //                         request(link3,(error,response,html) =>{
            //                             if(!error && response.statusCode == 200){
            //                                 const $ = cheerio.load(html);
                        
            //                                 const palavra4 = $('h1').text();
                                            
            //                                 $('.tags a').each((i,el) => {
            //                                 const sinonimo4 = $(el).text();
                        
            //                                 //Write ROW To CSV
            //                                 writeStream.write(`${palavra4}, ${sinonimo4} \n`);
            //                                 });
                                            
            //                             }
            //                             });
            //                         });
            //                     }
            //                     });
            //                 });
            //             }
            //             });
            //         });
            //     }
            //     });
        }); 
        console.log('Done..');
    }
});