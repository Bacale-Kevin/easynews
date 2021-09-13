import { Injectable } from '@angular/core';
import { AnUser } from '../models/an-user.model';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../models/country';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://127.0.0.1:8000/';
  baseUrlImg = 'https://nothing/to/say';
  anUserSubject$ = new Subject<AnUser[]>();

  // Array of annonym users
  private anUsers: AnUser[] = [
    new AnUser('Cameroun', 'Homme', 21, new Date())
  ];

  constructor(private http: HttpClient) { }

  // informe toutes les parties du projet qu'un nouvel utilisateur s'est t'ajouté
  emitAnUsers() {
    this.anUserSubject$.next(this.anUsers.slice());
  }

  // Ajoute un nouvelle utilisateur au tableau des utilisateurs
  addAnUser(anUser: AnUser) {
    this.anUsers.push(anUser);
    this.emitAnUsers();
    console.log(this.anUsers);
  }

  /* Get countries whose name contains search term */
  searchCountries(term: string): Observable<string[]> {
    if (!term.trim()) {
      // if not search term, return empty country array.
      return of([]);
    }

    const countries: string[] = [];
    const countrySearch: string[] = [];
    const result: string[] = [];

    this.http.get<Country[]>(`https://myapp-29fa0-default-rtdb.firebaseio.com/countries.json/?name=${term}`).subscribe(
      (response) => {
        //response = response.map(el => el.toLowerCase());
        for (const key of Object.keys(response)) {
          countries.push(response[key].name.toLowerCase());
        }
        countrySearch.push(countries.find(data => data.includes(term.toLowerCase())));
        for (const country of countrySearch) {
          result.push(this.capitalize(country));
        }
      }
    );

    return of(result);
  }

  capitalize(input) {
    let capitalizeWords = input.charAt(0).toUpperCase();
    for (let i = 1; i <= input.length - 1; i++) {
        let currentCharacter;
        const previousCharacter = input[i - 1];
        if (previousCharacter && previousCharacter === ' ') {
            currentCharacter = input[i].toUpperCase();
        } else {
            currentCharacter = input[i];
        }
        capitalizeWords = capitalizeWords + currentCharacter;
    }
    return capitalizeWords;
  }

  /***************************************************** */

  getAllsomthing(data){
    return this.http.post('https://nothing/to/say', data);
  }
  getAllNews(){
    return this.http.get<News[]>(this.baseUrl + 'news');
  }
  creersomething(data){
    return this.http.post(this.baseUrl + 'nothing/to/say', data);
  }
}
