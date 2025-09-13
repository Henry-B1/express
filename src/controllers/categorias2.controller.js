const categorias=[
    {id:1, nombre: 'Categoria 1' },
    {id:2, nombre: 'Categoria 2' },
    {id:3, nombre: 'Categoria 3' }
]

const index = (req, res)=> {
    res.render('categorias2/index', { categorias});
}

const show = (req, res) => {
    const {id} = req.params;
    const categoria = categorias.find(categoria => categoria.id === parseInt(id));

    if (!categoria) {
        res.status(404).send('categoría no encontrada');
    }else{
        res.render('categorias2/show', { categoria});
    }
}

const create= (req, res) =>{
    res.render('categorias2/create');
}

const store = (req, res) => {
    const { nombre } = req.body;
    const nuevaCategoria = {
        id: categorias.length + 1,
        nombre
    };
    
    categorias.push(nuevaCategoria);
    res.redirect('/categorias2');
}

module.exports ={
    index,
    show,
    create,
    store
}