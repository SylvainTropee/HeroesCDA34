import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroApiService} from "../../services/hero-api.service";
import {Hero} from "../../models/hero";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  public id : string | null
  public hero : Hero | undefined | null

  constructor(private route : ActivatedRoute, private heroService : HeroApiService) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  public findHero(){
    if(this.id){
      this.hero = this.heroService.getHeroById(+this.id)
    }
  }




}
