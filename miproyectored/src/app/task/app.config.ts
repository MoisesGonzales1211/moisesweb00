import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({
    projectId:"moisesred-6d082",appId:"1:141341343252:web:a7dacdc9c094b9ef897101",storageBucket: "moisesred-6d082.firebasestorage.app",apiKey:"AIzaSyBxom2ma9PETCJh4Ao0gHBp71QMdqcPUKI",authDomain:"moisesred-6d082.firebaseapp.com",messagingSenderId:"141341343252",measurementId:"G-6E18YSFC6L"
  })
), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
