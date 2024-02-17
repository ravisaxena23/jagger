import { Component, Input } from '@angular/core';
import { apiData } from '../../mocks/data';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent {

  constructor(public productService:ProductService){

  }
  @Input() product: any = {
    name:apiData.article.title,
    description:apiData.article.description_short,
    images: apiData.article.images,
    supplierName:apiData.article.supplier_name,
    supplierLink:apiData.article.supplier_link,
    rating:apiData.article.stars,
    price:apiData.article.price,
    currency:apiData.article.currency,
    transport:apiData.article.transport_costs,
    vat:apiData.article.vat_percent,
    piece:apiData.article.unit
  };
  currentImageIndex = 0;
  zoomLevel = 1;
  quantity: number = apiData.article.minimum_order_quantity;
  // product :any = {}
  get currentImage() {
    return this.product.images[this.currentImageIndex];
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  changeImage(image: any) {
    this.currentImageIndex = this.product.images.findIndex( (img:any) => img === image);
  }

  zoomIn() {
    this.zoomLevel += 0.1;
  }

  zoomOut() {
    if (this.zoomLevel > 0.1) {
      this.zoomLevel -= 0.1;
    }
  }

  get imageTransform() {
    return `scale(${this.zoomLevel})`;
  }

  addToCart() {
    this.productService.quantity = this.quantity
  }

}
