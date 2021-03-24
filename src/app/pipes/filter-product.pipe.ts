import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: Product[], filterText:string): Product[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?products.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):products
  }

}
