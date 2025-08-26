import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { counterReducer } from './counter/counter.reducer';
// import { CommonModule } from '@angular/common'; 
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    // CommonModule,
    // StoreModule.forRoot({ counter: counterReducer }) // register reducer
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
