import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProductos: Producto[] = []

  // constructor(private _productoService: ProductoService, private actRoute:ActivatedRoute, private router: Router)
  constructor(private _productoService: ProductoService, 
    private toastr: ToastrService) {
    // this.actRoute.params.subscribe((data)=>{
    //   if(data['id'] !=='nuevo'){
    //     this.getOne(data['id'])
    //   }
    // })
   }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe({
      next: (data)=>{
          console.log(data);
          this.listProductos = data;
           }, error:(error) => {
           console.log(error);
      }})
  }

  deleteProducto(id:any){
    this._productoService.deleteProducto(id).subscribe({
      next:(data)=>{
        this.toastr.error("El producto fue eliminado con exito", "Producto Eliminado")
        this.obtenerProductos();
      }, error: (error)=>{
        console.log(error);
      }
    })
  }

    //  ( 
    //   data =>{
    //   console.log(data);
    // }, error => {
    //   console.log(error);
    // })
  }


