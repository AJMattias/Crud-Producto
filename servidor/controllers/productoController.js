const  Producto = require ("../models/Producto");

exports.crearProducto= async (req, res)=> {

    try {
        //creo producto
        let producto;
        //obtengo el producto de la req.body
        producto = new Producto(req.body);
        //guardo el producto en la bd
        await producto.save()
        //devuelvo el producto al cliente
        res.send(producto);
        //Cambio para realizar merge
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

exports.obtenerProductos = async(req, res)=> {
    try {

        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.actualizarProductos = async(req, res)=> {
try {
    
    const{nombre, categoria, ubicacion, precio} = req.body;
    let producto = await Producto.findById(req.params.id);

    if(!producto){
        res.status(404).json({msg: 'No existe el producto'});
    }

    producto.nombre = nombre;
    producto.categoria = categoria;
    producto.ubicacion = ubicacion;
    producto.precio = precio;

    producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, {new: true})
    res.json(producto);

} catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
}
}

exports.obtenerProducto = async(req, res)=> {
    try {
        
        let producto = await Producto.findById(req.params.id);
    
        if(!producto){
            res.status(404).json({msg: 'No existe el producto'});
        }
    
        res.json(producto);
    
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.eliminarProducto = async(req, res)=> {
    try {
        
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'No existe el producto'});
        }

        await Producto.findOneAndRemove({_id: req.params.id}); 
        res.json({msg: 'Producto elimindado correctamente'});

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}