import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allCharacters;
  public allBooks;
  public allHouses; 
  public allItems:any;
  constructor(public gotHttpService:GotHttpService) { }

  ngOnInit() {
    this.allCharacters=this.gotHttpService.getAllCharacters().subscribe(
      data =>{
        this.allCharacters = data;
        console.log('From Characters--->');
        console.log(this.allCharacters);

      this.allBooks=this.gotHttpService.getAllBooks().subscribe(
        data1 =>{
        this.allBooks = data1;
        console.log('From Books---->');
        console.log(this.allBooks);
        //console.log(error.errorMessage);
      // }
    
      this.allHouses=this.gotHttpService.getAllHouses().subscribe(
        data2 =>{
        this.allHouses = data2;
        console.log('From Houses---->');
        console.log(this.allHouses);
         this.allItems=[...this.allBooks,...this.allCharacters,...this.allHouses]; 
         
          // console.log('All Items...........>')
          // console.log(this.allItems);
          for(let i=0;i<this.allItems.length;i++){
            if(this.allItems[i].name==''){
            this.allItems[i].name='N/A';
            }
            if(this.allItems[i].coatOfArms==""){
              this.allItems[i].coatOfArms='N/A';
            }
          }
          this.allItems.sort((a, b) => a.name.localeCompare(b.name));
          console.log(this.allItems);
        
      },
      
      error2 => {
        console.log('house service terminated');
      }
    );
    

  },
  error1 => {
    console.log('book service terminated');

  }
);
    
      },
      error =>{
        console.log(error.errorMessage);
      }
      
    )


    
  }

  } 
