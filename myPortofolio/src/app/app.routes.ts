import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Projects } from './components/projects/projects';
import { AbdelrahmanCv } from './components/abdelrahman-cv/abdelrahman-cv';
import { ProjectDetails } from './components/project-details/project-details';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: AbdelrahmanCv },
  { path: 'about', component: AbdelrahmanCv },
  { path: 'Projects', component: Projects },
  { path: 'Details/:id', component: ProjectDetails },
  { path: 'Contact', component: Contact },
  
];
