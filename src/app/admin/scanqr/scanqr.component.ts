import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

declare var Instascan: any;

@Component({
  selector: 'app-scanqr',
  templateUrl: './scanqr.component.html',
  styleUrls: ['./scanqr.component.css']
})
export class ScanqrComponent {
  @ViewChild('scanner') scannerElement!: ElementRef<HTMLVideoElement>;
  qrResult: string | null = null;
  scanner: any;

  ngAfterViewInit(): void {
    this.scanner = new Instascan.Scanner({ video: this.scannerElement.nativeElement });
    this.scanner.addListener('scan', (content: string) => {
      this.qrResult = content;
      console.log('QR content:', content); // You can handle the result here
    });

    Instascan.Camera.getCameras().then((cameras: any[]) => {
      if (cameras.length > 0) {
        this.scanner.start(cameras[0]); // Starts the camera scan, use cameras[1] for front cam if necessary
      } else {
        console.error('No cameras found.');
      }
    }).catch((e: any) => {
      console.error('Error initializing camera:', e);
    });
  }

  ngOnDestroy(): void {
    if (this.scanner) {
      this.scanner.stop(); // Important to turn off the camera
    }
  }
}
