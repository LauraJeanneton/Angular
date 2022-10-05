import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  isSnapped: boolean;
  buttonText: string;

  ngOnInit(): void {
    this.isSnapped = false;
    this.buttonText = "J'aime";
  }
  onSnap() {
    if (this.isSnapped == false) {
      this.faceSnap.snaps++;
      this.isSnapped = true;
      this.buttonText = "Je n'aime plus";
    } else {
      this.faceSnap.snaps--;
      this.isSnapped = false;
      this.buttonText = "J'aime";
    }
  }
}
