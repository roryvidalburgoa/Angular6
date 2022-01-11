import { Component } from '@angular/core';
import config from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = config.name + ' ' + config.version;
}
