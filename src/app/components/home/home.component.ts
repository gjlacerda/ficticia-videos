import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(@Inject('youtube') private youtube) { }

  ngOnInit() {
  }

}
