import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadFormComponent } from './upload-form/upload-form.component';

import { DragDirective } from './dragDrop.directive';

import { UploadService } from './upload.service';


@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    DragDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
