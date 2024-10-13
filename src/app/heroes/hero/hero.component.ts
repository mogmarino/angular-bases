import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Capitan America'
  public edad: number = 28

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.edad}`
  }

  changeHero(): void {
    this.name = 'Birdman'
  }

  changeEdad(): void {
    this.edad = 58
  }

  reset() {
    this.name = 'Capitan America'
    this.edad = 28
  }
}
