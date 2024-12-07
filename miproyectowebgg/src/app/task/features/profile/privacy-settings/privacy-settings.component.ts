import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-privacy-settings',
  templateUrl: './privacy-settings.component.html',
  
})
export class PrivacySettingsComponent {
  isPublic: boolean = true;

  constructor(private profileService: ProfileService) {
    this.profileService.getProfile().subscribe(profile => {
      this.isPublic = profile.isPublic;
    });
  }

  togglePrivacy(): void {
    this.profileService.togglePrivacy();
  }
}
