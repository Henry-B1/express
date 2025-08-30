const querystring=require("querystring");
const index=(req, response)=>{
    const query=querystring.stringify(req.query);

    const limit=req.query.limit;

    fetch('https://fakestoreapi.com/products?'+query)
        .then(response => response.json())
        .then(productos=>{
            response.render('productos',{productos})
        });
}


module.exports = {
    index
}