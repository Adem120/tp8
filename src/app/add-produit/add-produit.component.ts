import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  erreur=0;
 
  constructor(private produitService: ProduitService,private router:Router) { }

  addProduit(){
    
this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
console.log(prod);
});
this.router.navigate(['produits']).then(() => {
  window.location.reload();
  });
   
  }
  ngOnInit(): void {
  }

}

