import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.css']
})
export class AddMachineComponent {
  appareilForm!: FormGroup;
  groups: any[] = [];

  constructor(
    private fb: FormBuilder,
    private  ads:AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.appareilForm = this.fb.group({
      number: ['', Validators.required],
    
      groupe: ['']
    });

    this.fetchGroups();
  }

  fetchGroups() {
    this.ads.getGroups().subscribe((data: any) => {
      this.groups = data;
    });
  }

  onSubmit() {
    if (this.appareilForm.invalid) {
      return;
    }

    this.ads.createAppareil(this.appareilForm.value).subscribe(
      (response: any) => {
        console.log('Appareil created successfully!', response);
        this.router.navigate(['/appareils']);
      },
      (error:any) => {
        console.error('Error creating appareil', error);
      }
    );
  }
}
