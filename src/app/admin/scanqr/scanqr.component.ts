import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

declare var Instascan: any;

@Component({
  selector: 'app-scanqr',
  templateUrl: './scanqr.component.html',
  styleUrls: ['./scanqr.component.css']
})
export class ScanqrComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scanner') scannerElement!: ElementRef<HTMLVideoElement>;
  qrResult: string | null = null;
  scanner: any;
  camerasAvailable: any[] = [];

  ngAfterViewInit(): void {
    this.scanner = new Instascan.Scanner({ video: this.scannerElement.nativeElement });
    this.scanner.addListener('scan', (content: string) => {
      this.qrResult = content;
      console.log('QR content:', content); // Handle the result here
    });

    Instascan.Camera.getCameras().then((cameras: any[]) => {
      this.camerasAvailable = cameras;
    }).catch((e: any) => {
      console.error('Error initializing cameras:', e);
    });
  }

  startScanning(): void {
    if (this.camerasAvailable.length > 0) {
      this.scanner.start(this.camerasAvailable[0]); // Starts the camera scan
    } else {
      console.error('No cameras found.');
    }
  }

  ngOnDestroy(): void {
    if (this.scanner) {
      this.scanner.stop(); // Turn off the camera
    }
  }
}
