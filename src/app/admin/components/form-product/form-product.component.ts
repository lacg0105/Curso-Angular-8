import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../../core/services/products/products.service';
import { MyValidators } from './../../../utils/validators';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) =>{
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  // uploadFile(event){
  //   const file = event.target.files[0];
  //   const storage = getStorage();      
  //     const dir = file.name;
  //     const fileRef = ref(storage, dir);

  //     const task = uploadBytesResumable(fileRef, file);
  //     task.on('state_changed',
  //     (snapshot) => {
  //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log('Upload is' + progress + '% done');
  //       switch(snapshot.state){
  //         case 'paused':
  //           console.log('Upload is paused');
  //           break;
  //           case 'running':
  //             console.log('Upload is running');
  //             break;
  //       }
  //     },
  //     (error) => {

  //     },
  //     () => {
  //       getDownloadURL(task.snapshot.ref)
  //       .then((downloadURL) => {
  //         this.imageUrl = downloadURL;
  //         console.log('File available at', downloadURL)
  //       })
  //     });
  // }

  uploadFile(event){
    const file = event.target.files[0];
    const name = file.name;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$  = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    })
  }

  get priceField(){
    return this.form.get('price');
  }

}
