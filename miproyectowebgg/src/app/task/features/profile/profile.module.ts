import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent }  from './profile.component';
import { PrivacySettingsComponent } from './privacy-settings/privacy-settings.component';

@NgModule({
  declarations: [ProfileComponent,  PrivacySettingsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
  exports: [ProfileComponent ]
})
export class ProfileModule {}
