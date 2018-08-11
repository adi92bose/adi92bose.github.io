import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
  public currentCharacter:any

  constructor(private _route:ActivatedRoute,private router:Router, public gotService:GotHttpService) {
    console.log('Character View Constructor called')
   }

  ngOnInit() {
    console.log('Character view component onit called')
    let id = this._route.snapshot.paramMap.get('id');
    this.gotService.singleCharacterInfo(id).subscribe(
      data =>{
        //console.log(data);
        this.currentCharacter = data;
        console.log('CurrentCharacter');
        console.log(this.currentCharacter);
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }

}
