import { Component } from '@angular/core';
import { IProject } from '../../Models/iproject';
import { Router } from '@angular/router'; // شلت RouterLink لأنها مش مستخدمة

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: IProject[];

  constructor(private router: Router) {
    this.projects = [
      {
        id: 1,
        name: 'Game Zone',
        cover: 'GameZone.png',
        GitHub: 'https://github.com/Abdelrahman-Mohamed-7/GameZone-',
        description: 'Developed application using ASP.NET MVC and SQL Server. Enabled users to manage game data, including adding, updating, and deleting game entries. Implemented a user-friendly interface using Bootstrap, ensuring responsive design.',
        images: [
          'GameZone.png',
          'Gamzone1.png',
          'Gamzone2.png',
          'Gamzone3.png',
          'Gamzone4.png',
        ]
      },
      {
        id: 2,
        name: 'Master Market API',
        cover: 'MasterMarket.png',
        GitHub: 'https://github.com/Abdelrahman-Mohamed-7/MasterMarketAPI/tree/master',
        description: 'Master Market is a dual-project solution consisting of a RESTful API and an MVC client application built with ASP.NET Core. The API provides full CRUD operations for managing products and categories, with built-in search and filtering capabilities. The MVC client consumes the API to deliver a user-friendly interface for browsing products by category and performing management tasks. The system uses Entity Framework Core with SQL Server for data persistence and follows a clean service-layer architecture.',
        images: [
          'MasterMarkerAPI1.png',
          'MasterMarkerAPI2.png',
          'MasterMarketConsumer1.png',
          'MasterMarketConsumer2.png',
          'MasterMarketConsumer3.png',
          'MasterMarketConsumer4.png',
          'MasterMarketConsumer5.png',
          'MasterMarketConsumer6.png',
          'MasterMarketConsumer7.png'
        ]
      },
      {
        id: 3,
        name: 'Flight Booking API', // صححت الاسم هنا كمان
        cover: 'flightBooking.png', // شلت الشرطة وصححت الاسم
        GitHub: 'https://github.com/Abdelrahman-Mohamed-7/Flight-Booking',
        description: 'Architected a scalable, multi-tier flight reservation system consisting of a centralized RESTful Web API and two separate MVC client applications (Customer and Employee portals) following the Repository and Service patterns. Engineered secure authentication and role-based authorization using JWT (JSON Web Tokens) and ASP.NET Core Identity, ensuring strict data access control between customers and employees. Designed and optimized a relational database using Entity Framework Core (Code-First). Implemented Fluent API for complex entity configurations, relationships, and data seeding (Roles, Users, Cities, Airports, Airlines). Developed a seamless booking workflow where customers submit flight requests, and employees manage (approve/reject) them via an interactive, statistics-driven Admin Dashboard. Utilized AutoMapper for efficient object-to-object mapping between Data Transfer Objects (DTOs) and Entity models, ensuring clean separation of concerns.',
        images: [
          'FlightBookingAPI1.png',
          'FlightBookingAPI2.png',
          'FlightBookingAPI3.png',
          'FlightBookingAPI4.png',
          'FlightBookingControlPanal2.png',
          'FlightBookingControlPanal3.png',
          'FlightBookingControlPanal4.png',
          'FlightBookingCustomer1.png',
          'FlightBookingCustomer2.png',
          'FlightBookingCustomer3.png',
          'FlightBookingCustomer4.png',
          'FlightBookingCustomer5.png'
        ]
      },
    ];
  }

  navigateToDetails(id: number) {
    this.router.navigateByUrl(`/Details/${id}`);
  }
}