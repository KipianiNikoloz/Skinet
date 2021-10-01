import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  baseUrl: string = environment.baseUrl;

  validationErrors: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get400Error() {
    this.http.get(`${this.baseUrl}error/badrequest`).subscribe( response => {
      console.log(response);
    });
  }

  get404Error() {
    this.http.get(`${this.baseUrl}error/notfound`).subscribe( response => {
      console.log(response);
    });
  }

  get500Error() {
    this.http.get(`${this.baseUrl}error/servererror`).subscribe( response => {
      console.log(response);
    });
  }

  get404ValidationError() {
    this.http.get(`${this.baseUrl}error/notfound/fifty`).subscribe( response => {
      console.log(response);
    }, error => {
      this.validationErrors = error.errors;
    });
  }

}
