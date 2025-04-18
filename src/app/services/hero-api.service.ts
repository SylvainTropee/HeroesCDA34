import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {

  public heroes: Array<Hero>

  constructor() {
    this.heroes = []
    this.heroes.push({
      id: 1,
      name: "Hulk",
      image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg"
    })
    this.heroes.push({
      id: 2,
      name: "Thor",
      image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/659-thor.jpg"
    })
    this.heroes.push({
      id: 3,
      name: "Joker",
      image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/370-joker.jpg"
    })
  }

  public getHeroes(): Hero[] {
    return this.heroes
  }

  public getHeroById(id: number) : Hero | undefined {
    return this.heroes.find(
      (hero : Hero) : boolean => hero.id == id)
  }


}
