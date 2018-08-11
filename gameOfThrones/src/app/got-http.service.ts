import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
// import "rxjs/Rx";


@Injectable({
  providedIn: 'root'
})
export class GotHttpService {

  private characters_url = 'https://www.anapioficeandfire.com/api/characters';
  private books_url = 'https://www.anapioficeandfire.com/api/books';
  private houses_url = 'https://anapioficeandfire.com/api/houses';

  constructor(private _http:HttpClient) { }

  public handleError(err:HttpErrorResponse){
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllCharacters(): any{
    let myResponse = this._http.get(this.characters_url);
    console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is',myResponse);
    return myResponse;
  }

  public getAllBooks(): any{
    let myResponse = this._http.get(this.books_url);
    console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is',myResponse);
    return myResponse;
  }

  public singleHouseInfo(id):any{
    let myResponse = this._http.get(this.houses_url+'/'+id);
    console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is',myResponse);
    return myResponse;

  }

  public singleCharacterInfo(id):any{
    let myResponse = this._http.get(this.characters_url+'/'+id);
    console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is',myResponse);
    return myResponse;
  }

  public singleBookInfo(id):any{
    let myResponse = this._http.get(this.books_url+'/'+id);
    console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is',myResponse);
    return myResponse;
  }



  public getAllHouses(): any{
    let myResponse = this._http.get(this.houses_url);
    console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is',myResponse);
    return myResponse;
  }


  
}
 

