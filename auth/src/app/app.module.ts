import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzFormModule} from "ng-zorro-antd/form";

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    NzMenuModule,
    NzLayoutModule,
    NzFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
