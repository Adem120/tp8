import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits!: Produit[];
  constructor(private produitService: ProduitService,private router:Router,public authService: AuthService)  {
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
        supprimerProduit(p:Produit){
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
                console.log("produit supprimé");
                this.SuprimerProduitDuTableau(p);
                });
              Swal.fire(
                'Deleted!',
                'Your produit has been deleted.',
                'success'
              )
            }
          })
        }
      }
