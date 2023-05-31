import { LayoutRoutingModule } from './layout-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSelectModule
  ]
})
export class LayoutModule { }
