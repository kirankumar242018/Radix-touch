import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule,MatMenuModule,MatToolbarModule,MatIconModule,MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
  ],
  exports:[
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule, 
    MatToolbarModule,
    MatCardModule,
  ],
  declarations: []
})
export class MatMaterialModule { }
