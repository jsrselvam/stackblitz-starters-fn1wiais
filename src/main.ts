import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../src/app-component/app-component';
import { appConfig } from '../src/app.config';

@Component({
  selector: 'app-root',
  template: `
    <p>hai</p>
  `,
})
export class App {
  name = 'Angular';
 
}

bootstrapApplication(AppComponent, appConfig);
