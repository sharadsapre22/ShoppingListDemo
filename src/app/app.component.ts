import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShoppingProject';
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCtZwo75a3TH4c1Qvjz2J4kwPw0rLrN3Go",
      authDomain: "ng-recipe-book-123456.firebaseapp.com"
    });

  }
  onNavigate(feature) {
    console.log(feature);
    this.loadedFeature = feature;
  }
}
