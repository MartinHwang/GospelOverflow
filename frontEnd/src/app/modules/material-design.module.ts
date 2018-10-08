import { NgModule } from '@angular/core';

import {
  MatChipsModule, MatButtonModule, MatIconModule, MatInputModule,
  MatSelectModule, MatSliderModule, MatToolbarModule, MatSlideToggleModule,
  MatCardModule, MatGridListModule, MatMenuModule, MatSidenavModule,
  MatExpansionModule, MatTabsModule, MatLineModule, MatListModule, MatTableModule,
  MatProgressSpinnerModule, MatSnackBarModule, MatAutocompleteModule,
  MatDialogModule, MatCheckboxModule, MatTooltipModule, MatDatepickerModule,
  MatNativeDateModule, MatRadioModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatDividerModule
} from "@angular/material";
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    MatButtonModule, MatIconModule, MatInputModule,
    MatSelectModule, MatSliderModule, MatToolbarModule,
    MatCardModule, MatSlideToggleModule, MatGridListModule,
    MatMenuModule, MatSidenavModule, MatExpansionModule,
    MatTabsModule, MatLineModule, MatListModule, MatTableModule,
    MatProgressSpinnerModule, MatSnackBarModule, MatDividerModule,
    MatAutocompleteModule, MatDialogModule, MatCheckboxModule,
    MatTooltipModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule,
    MatRadioModule, CdkTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule
  ],
  exports: [
    MatButtonModule, MatIconModule, MatInputModule,
    MatSelectModule, MatSliderModule, MatToolbarModule,
    MatCardModule, MatSlideToggleModule, MatGridListModule,
    MatMenuModule, MatSidenavModule, MatExpansionModule,
    MatTabsModule, MatLineModule, MatListModule, MatTableModule,
    MatProgressSpinnerModule, MatSnackBarModule, MatDividerModule,
    MatAutocompleteModule, MatDialogModule, MatCheckboxModule,
    MatTooltipModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule,
    MatRadioModule, CdkTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule
  ],
  declarations: []
})
export class MaterialDesignModule {}