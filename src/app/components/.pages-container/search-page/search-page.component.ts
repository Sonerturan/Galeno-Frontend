import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from 'src/app/models/doctor';
//import { CartService } from 'src/app/services/cart.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  doctors: Doctor[] = [];
  dataLoaded = false; 
  filterText = '';

  //oluşturulan servisi kullanmak için gerekli kod
  constructor(
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    //private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.getDoctors();
    // this.activatedRoute.params.subscribe((params) => {
    //   if (params['cityId']) {
    //     this.getDoctorsByCity(params['cityId']);
    //   } else {
    //     this.getDoctors();
    //   }
    // });
  }

  getDoctors() {
    console.log('Api Request Başladı');
    this.doctorService.getDoctors().subscribe((response) => {
      this.doctors = response.data;
      this.dataLoaded = true;
      console.log('Api Request Bitti');
    });
    console.log('Method Bitti');
  }

  // getDoctorsByCity(cityId: number) {
  //   this.doctorService
  //     .getDoctorsByCity(cityId)
  //     .subscribe((response) => {
  //       this.doctors = response.data;
  //       this.dataLoaded = true;
  //     });
  // }

  // addToCart(product: Product) {
  //   if(product.productId===1){
  //     this.toastrService.error("Ürün sepete eklenemiyor","Hata")
  //   }else{
  //     this.toastrService.success("Sepete eklendi",product.productName)
  //     this.cartService.addToCart(product)
  //   }
  // }
}

