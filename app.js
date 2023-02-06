const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = 3000;
const versionAPI = 1;
const urlAPI = `/api/v${versionAPI}`;

const informationsRouter = require('./src/routes/informations.route');
const techniqueRouter = require('./src/routes/technique.route');
const campaignsRouter = require('./src/routes/campaigns.route');

app
  .use(`${urlAPI}/informations`, informationsRouter)
  .use(`${urlAPI}/technique`, techniqueRouter)
  .use(`${urlAPI}/campaigns`, campaignsRouter)
  .use(express.json())
  .use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",  "*");
    next(); 
  });

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}${urlAPI}/`)
  });