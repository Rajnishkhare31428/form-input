import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  print(...args) {
    console.log(args[0].value + '\n' + args[1].value);
  }
}
