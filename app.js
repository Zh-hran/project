const express=require('express');
const bodyParser=require('body-parser');
//引入用户路由器

var app=express();
app.listen(5050);

app.use(express.static('./public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false
}));

