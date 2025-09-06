const querystring=require('querystring');
const categorias=[
    {id: 1, nombre: 'Categoria 1'},
    {id: 2, nombre: 'Categoria 2'},
    {id: 3, nombre: 'Categoria 3'}
]
const index=(req,res) => {
    res.render('categorias/index', {categorias});
}
const show=(req,res)=>{
    const{id}=req.params;
    const categoria=categorias.find(categorias=>categorias.id==id);
    res.render('categorias/show',{categoria});
}
module.exports = {
    index,
    show
}