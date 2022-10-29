import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute,Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private produitService: ProduitService){ }

    ngOnInit():void {
  this.produitService.consulterProdui(this.activatedRoute.snapshot.params['id']).subscribe( prod =>
    { this.currentProduit = prod; } ) ;
      }
      sweet(){
Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire('Saved!', '', 'success')
    this.updateProduit();
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
      }
   updateProduit() {
        this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
        this.router.navigate(['produits']);
        },(error) => { alert("Problème lors de la modification !"); }
        );
        }}



