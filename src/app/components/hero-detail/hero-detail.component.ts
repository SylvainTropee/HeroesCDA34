import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroApiService} from "../../services/hero-api.service";
import {Hero} from "../../models/hero";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    HttpClientModule
  ],
  providers : [HeroApiService],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  public id : string | null
  public hero$ : Observable<Hero> | undefined

  constructor(private route : ActivatedRoute, private heroService : HeroApiService) {
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.hero$ = this.heroService.getHeroById(+this.id)
    }
  }

}
