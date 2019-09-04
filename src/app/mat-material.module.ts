import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule,MatMenuModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatCardModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  exports:[
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  declarations: []
})
export class MatMaterialModule { }
