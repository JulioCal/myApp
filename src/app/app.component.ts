import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {characterService} from './character.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  character$;
  SelectedHouse$;
  Display$ = false;
  BadgeDisplay = false;
  showEntry =false;
  DisplayedHouse;
  Error = false;

    houses = [
        { id: 1, name: 'Gryffindor',color: '#D3A625'},
        { id: 2, name: 'Ravenclaw', color: '#5D5D5D'},
        { id: 3, name: 'Slytherin', color: '#2A623D'},
        { id: 4, name: 'Hufflepuff', color: '#FFDB00'},
    ];
    localStudent = [] as any;
    KeepStudent = [] as any;
  constructor(private characterService: characterService){}

  entryForm = new FormGroup({
    name: new FormControl('',Validators.required),
    patronus: new FormControl(''),
    age: new FormControl('')
  });
  title = 'Hogwarts School of wizardry';
  ngOnInit() {
  }
  getStaff(){
    this.localStudent = [];
    this.character$ = null;
    this.BadgeDisplay = this.DisplayedHouse = this.Error = this.showEntry = false;
    this.character$ = this.characterService.fetchCharacter().subscribe(result => this.character$ = result);
    this.Display$ = true;
    }
  getStudents(){
    this.character$ = null;
    this.BadgeDisplay = this.DisplayedHouse = this.Error = this.showEntry = false;
    this.character$ = this.characterService.fetchStudent().subscribe(result => this.character$ = result);
    this.localStudent = this.KeepStudent;
    this.Display$ = true;
  }
  getPersona(SelectedHouse$){
    if(SelectedHouse$ == null) {
      this.Error = true
      this.Display$ = this.BadgeDisplay = this.showEntry = false;
      return;
    }
    this.Error = false;
    this.localStudent = [];
    this.character$ = null;
    this.character$ = this.characterService.fetchPersona(SelectedHouse$).subscribe(result => this.character$ = result);   
    this.Display$ = this.BadgeDisplay = true;
    this.DisplayedHouse = SelectedHouse$;
  }
  NewEntry(){
    this.character$ = null;
    this.showEntry =true;
    this.Display$ = this.DisplayedHouse = this.BadgeDisplay = this.Error = false;
  }
  SetNewStudent(value){

    this.KeepStudent.push(value);
  }
}
