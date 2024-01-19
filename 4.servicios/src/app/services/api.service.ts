import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public baseUrl: string = 'http://localhost:3000';
  public charactersUrl: string = `${this.baseUrl}/characters`;

  constructor(private http: HttpClient) {}

  public getCharacters() {
    return this.http.get(this.charactersUrl);
  }
  public getCharactersById(id: number) {
    return this.http.get(`${this.charactersUrl}/${id}`);
  }
  public postCharacter(character:any){
    return this.http.post(this.charactersUrl, character)
  }
}
