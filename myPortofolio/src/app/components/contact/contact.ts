import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  socials = [
    {
      name: 'Email',
      url: 'mailto:abdelrahmanedrees51@gmail.com',
      icon: 'email',
      color: '#EA4335',
      bg: 'rgba(234, 67, 53, 0.15)'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/', // تقدر تغيرها لبروفايلك
      icon: 'github',
      color: '#ffffff',
      bg: 'rgba(255, 255, 255, 0.1)'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdelrahman-mohamed-abdelrahman7',
      icon: 'linkedin',
      color: '#0A66C2',
      bg: 'rgba(10, 102, 194, 0.15)'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/abdelrahman_mohamed74_',
      icon: 'instagram',
      color: '#E1306C',
      bg: 'rgba(225, 48, 108, 0.15)'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1DWxGuP612/',
      icon: 'facebook',
      color: '#1877F2',
      bg: 'rgba(24, 119, 242, 0.15)'
    }
  ];
}