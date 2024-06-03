import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { ScrollTopModule } from 'primeng/scrolltop';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
  ],
  imports: [
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    SelectButtonModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    ToastModule,
    MessagesModule,
    InputMaskModule,
    RadioButtonModule,
    TabViewModule,
    FileUploadModule,
    ScrollTopModule,
    DialogModule,
    InputTextareaModule,
    NoopAnimationsModule
  ],
  exports: [
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    SelectButtonModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    ToastModule,
    MessagesModule,
    TableModule,
    DividerModule,
    InputMaskModule,
    RadioButtonModule,
    TabViewModule,
    FileUploadModule,
    ScrollTopModule,
    DialogModule,
    InputTextareaModule,
  ],
  providers: [MessageService]

})
export class PrimengModule { }