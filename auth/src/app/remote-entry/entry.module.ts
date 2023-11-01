import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {RemoteEntryComponent} from './entry.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {remoteRoutes} from './entry.routes';
import {LoginComponent} from "../login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), ReactiveFormsModule, NzFormModule, NzInputModule, NzCheckboxModule, NzButtonModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RemoteEntryModule {}
