const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const https = require('https');
const path = require('path')

app.set('view engine','ejs')
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
const url = 'https://api.wazirx.com/api/v2/tickers';

app.get("/",(req,res)=>{
    
    https.get(url,(respose)=>{
        var body ="";
        respose.on('data',(data)=>{
            body+= data;
            
        })
        respose.on('end',()=>{
            const websiteData = JSON.parse(body)
            const array = Object.values(websiteData)
            res.render('index',{webData: array, pageTitle: 'Quadbilal'})
         })
        })
    })

const PORT = process.env.PORT || 3000 || 5000
app.listen(PORT,console.log('server running on port 3000'))
   
