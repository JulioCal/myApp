import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class characterService   {   
    staff:CharacterData[] = [];
    constructor(private http:HttpClient){   }
    fetchCharacter() {
       return this.http.get<CharacterData[]>('http://hp-api.herokuapp.com/api/characters/staff');
    }
    fetchStudent() {
        return this.http.get<CharacterData[]>('http://hp-api.herokuapp.com/api/characters/students');
    }
    fetchPersona(Hause) {
        return this.http.get<CharacterData[]>('http://hp-api.herokuapp.com/api/characters/house/'+Hause);
    }
}