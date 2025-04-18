import {Component} from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";
import {Hero} from "../../models/hero";
import {RouterLink} from "@angular/router";
import {HeroApiService} from "../../services/hero-api.service";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes: Array<Hero> //any[]

  constructor(private heroService : HeroApiService) {
    this.heroes = []
  }

  addHeroes() {
    this.heroes = this.heroService.getHeroes()
  }


}
