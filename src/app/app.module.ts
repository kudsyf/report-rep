import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomRenderComponent } from './custome-render.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomRenderComponent,
  ],
  imports: [

    Ng2SmartTableModule,
    TabsModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  entryComponents: [
    CustomRenderComponent
  ],

  providers: [CustomRenderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
