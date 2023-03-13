import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
  }

  handleLanding(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle has landed.';
    this.takeOffEnabled = true;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
 }

 handleAbortMission(rocketImage) {
  let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
  if (result) {
     this.color = 'red';
     this.height = 0;
     this.width = 0;
     this.message = 'Mission aborted.';
     rocketImage.style.bottom = '0px';
     this.takeOffEnabled = true;
    }
  }

  checkFlight(rocketImage) {
    if (parseInt(rocketImage.style.left) < 5) {
      this.color = 'orange';
    } else if (parseInt(rocketImage.style.left) > 235) {
      this.color = 'orange';
    } else if (parseInt(rocketImage.style.bottom) > 240) {
      this.color = 'orange';
    } else if (parseInt(rocketImage.style.bottom) < 0) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

  moveRocket(rocketImage, direction: string) {
    if (direction === 'right') {
      this.checkFlight(rocketImage);
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === 'left') {
      this.checkFlight(rocketImage);
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    if (direction === 'up') {
      this.checkFlight(rocketImage);
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (direction === 'down') {
      this.checkFlight(rocketImage);
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }

}
