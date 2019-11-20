import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MisHistoriasService {

    constructor(private http: HttpClient) {}

    getMisHistorias(){
        return this.http.get('http://localhost:3000/mis-historias');
    }
}