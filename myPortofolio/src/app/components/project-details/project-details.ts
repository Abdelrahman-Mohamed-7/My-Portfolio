import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProject } from '../../Models/iproject';
import { Projects } from '../projects/projects';
import { StaticProjects } from '../../Services/static-projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails implements OnInit {
  currentId:number=0;
  project : IProject | null = null
  constructor(private _activatedRoute:ActivatedRoute,private _staticProjects:StaticProjects){

  }
  ngOnInit(): void {
    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get(`id`)),
    this.project= this._staticProjects.getProjectById(this.currentId)
  }
  
}