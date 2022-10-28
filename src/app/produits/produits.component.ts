import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits!: Produit[];
  constructor(private produitService: ProduitService,private router:Router ) {
    //this.produits = produitService.listeProduits();
    }

    ngOnInit(): void {
      this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
      }
      SuprimerProduitDuTableau(prod : Produit) {
        this.produits.forEach((cur, index) => {
        if(prod.idProduit=== cur.idProduit) {
        this.produits.splice(index, 1);
        }
        });
        }
      supprimerProduit(p: Produit)
      {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
      console.log("produit supprimé");
      this.SuprimerProduitDuTableau(p);
      });
      
    
      }}
