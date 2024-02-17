import { Component } from '@angular/core';
import { apiData } from '../../mocks/data';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent {
  apiData=apiData
  features : any[] = []
  priceBreaks: any[]=[]
  constructor(){

    let featureObj:any = apiData.article.features
    Object.keys(featureObj).forEach((id:any) => {
      this.features.push({key:id,value:featureObj[id]})
    });

    let priceBreak:any = apiData.article.price_breaks
    Object.keys(priceBreak).forEach((id:any) => {
      this.priceBreaks.push({key:id,value:priceBreak[id]})
    });
    
  }
}
