import { Injectable } from '@angular/core';
import { IProject } from '../Models/iproject';

@Injectable({
  providedIn: 'root',
})
export class StaticProjects {
  private projects: IProject[] = [
    {
      id: 1,
      name: 'Game Zone',
      cover: 'assets/GameZone.png',
      GitHub: 'https://github.com/Abdelrahman-Mohamed-7/GameZone-',
      description:
        'Developed application using ASP.NET MVC and SQL Server. Enabled users to manage game data, including adding, updating, and deleting game entries. Implemented a user-friendly interface using Bootstrap, ensuring responsive design.',
      images: [
        'assets/GameZone.png',
        'assets/Gamzone1.png',
        'assets/Gamzone2.png',
        'assets/Gamzone3.png',
        'assets/Gamzone4.png',
      ],
    },
    {
      id: 2,
      name: 'Master Market API',
      cover: 'assets/MasterMarket.png',
      GitHub:
        'https://github.com/Abdelrahman-Mohamed-7/MasterMarketAPI/tree/master',
      description:
        'Master Market is a dual-project solution consisting of a RESTful API and an MVC client application built with ASP.NET Core. The API provides full CRUD operations for managing products and categories, with built-in search and filtering capabilities. The MVC client consumes the API to deliver a user-friendly interface for browsing products by category and performing management tasks. The system uses Entity Framework Core with SQL Server for data persistence and follows a clean service-layer architecture.',
      images: [
        'assets/MasterMarkerAPI1.png',
        'assets/MasterMarkerAPI2.png',
        'assets/MasterMarketConsumer1.png',
        'assets/MasterMarketConsumer2.png',
        'assets/MasterMarketConsumer3.png',
        'assets/MasterMarketConsumer4.png',
        'assets/MasterMarketConsumer5.png',
        'assets/MasterMarketConsumer6.png',
        'assets/MasterMarketConsumer7.png',
      ],
    },
    {
      id: 3,
      name: 'Flight Booking API',
      cover: 'assets/flightBooking.png',
      GitHub: 'https://github.com/Abdelrahman-Mohamed-7/Flight-Booking',
      description:
        'Architected a scalable, multi-tier flight reservation system consisting of a centralized RESTful Web API and two separate MVC client applications (Customer and Employee portals) following the Repository and Service patterns. Engineered secure authentication and role-based authorization using JWT (JSON Web Tokens) and ASP.NET Core Identity, ensuring strict data access control between customers and employees. Designed and optimized a relational database using Entity Framework Core (Code-First). Implemented Fluent API for complex entity configurations, relationships, and data seeding (Roles, Users, Cities, Airports, Airlines). Developed a seamless booking workflow where customers submit flight requests, and employees manage (approve/reject) them via an interactive, statistics-driven Admin Dashboard. Utilized AutoMapper for efficient object-to-object mapping between Data Transfer Objects (DTOs) and Entity models, ensuring clean separation of concerns.',
      images: [
        'assets/FlightBookingAPI1.png',
        'assets/FlightBookingAPI2.png',
        'assets/FlightBookingAPI3.png',
        'assets/FlightBookingAPI4.png',
        'assets/FlightBookingControlPanal2.png',
        'assets/FlightBookingControlPanal3.png',
        'assets/FlightBookingControlPanal4.png',
        'assets/FlightBookingCustomer1.png',
        'assets/FlightBookingCustomer2.png',
        'assets/FlightBookingCustomer3.png',
        'assets/FlightBookingCustomer4.png',
        'assets/FlightBookingCustomer5.png',
      ],
    },
  ];

  getAllProjects(): IProject[] {
    return this.projects;
  }

  getProjectById(id: number): IProject | null {
    let foundProject =  this.projects.find((p) => p.id === id);
    return foundProject ? foundProject : null
  }
}