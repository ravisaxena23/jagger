import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { apiData } from '../../mocks/data';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  apiData: any = apiData;
  isFavorite: boolean = false;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.isFavorite = this.apiData && this.apiData.user && this.apiData.user.favorite_articles
      ? this.apiData.user.favorite_articles.includes(this.apiData.article.id)
      : false;
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.apiData.user.favorite_articles.push(this.apiData.article.id);
    } else {
      const index = this.apiData.user.favorite_articles.indexOf(this.apiData.article.id);
      if (index !== -1) {
        this.apiData.user.favorite_articles.splice(index, 1);
      }
    }
  }

  openFacts(): void {
  }

  openCart(): void {
  }
}
