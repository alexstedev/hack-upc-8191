import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	private url = 'http://127.0.0.1:8000/';
	constructor(private http: HttpClient) { }

	getTest() {
		return this.http.get(this.url);
	}

}