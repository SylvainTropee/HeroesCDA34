import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {

  private readonly BASE_URL: string = "https://akabab.github.io/superhero-api/api"

  constructor(private http: HttpClient) {
  }

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.BASE_URL}/all.json`)
  }

  public getHeroById(id: number): Observable<Hero> | undefined {
    return this.http.get<Hero>(`${this.BASE_URL}/id/${id}.json`)
    // return this.http.get<{appearance : {gender : string, race : string}}>(`${this.BASE_URL}/id/${id}.json`).pipe(
    //   map(response => response.appearance)
    // )
  }


}
