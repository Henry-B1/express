const inventario = [
    { id: 1, descripcion: 'silla' },
    { id: 2, descripcion: 'escritorio' },
    { id: 3, descripcion: 'impresora' }
]

const index = (req, res) => {
    res.render('inventario/index', { inventario });
}

const show = (req, res) => {
    const { id } = req.params;
    const item = inventario.find(item => item.id === parseInt(id));

    if (!item) {
        res.status(404).send('Item de inventario no encontrado');
    } else {
        res.render('inventario/show', { item });
    }
}

const create = (req, res) => {
    res.render('inventario/create');
}

const store = (req, res) => {
    const { descripcion } = req.body;
    const nuevoItem = {
        id: inventario.length + 1,
        descripcion
    };
    
    inventario.push(nuevoItem);
    res.redirect('/inventario');
}

module.exports = {
    index,
    show,
    create,
    store
}