import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  isSelected: boolean = true;

  candidates: object[] = [
    { name: "Sally Ride", mass: 77.1, photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg' },
    { name: "Mae Jemison", mass: 71.2, photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg' },
    { name: "Ellen Ochoa", mass: 73.4, photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg' },
    { name: "Frederick Gregory", mass: 89.2, photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg' },
    { name: "Guion Bluford", mass: 83.5, photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg' },
    { name: "Kjell Lindgren", mass: 84.6, photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg' },
    { name: "Jeanette Epps", mass: 72.6, photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg' }
  ];

  constructor() { }

  ngOnInit() { }

  addCrewMember(candidate: object) {
    if (this.crew.length < 3 && !this.crew.includes(candidate)) {
      this.crew.push(candidate)
    } else if (this.crew.includes(candidate)) {
      this.crew.splice(this.crew.indexOf(candidate), 1)
    }
  }

  // Code the 'addCrewMember' function here:

}
