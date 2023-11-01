import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {RemoteEntryComponent} from './entry.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {remoteRoutes} from './entry.routes';
import {LoginComponent} from "../login/login.component";

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RemoteEntryModule {}
