import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadFormComponent } from './upload-form/upload-form.component';

import { DragDirective } from './dragDrop.directive';

import { UploadService } from './upload.service';


import { DataTableModule } from './data-table';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableForm } from './data-table-form/data-table-form';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    DragDirective,
    DataTableForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DataTableModule
  ],
  providers: [
    UploadService,
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
