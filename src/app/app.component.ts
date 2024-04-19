import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PATIENTS_DATA, Patient, TabsOptions } from './constants';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgbModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'health-care';
  patientsData = PATIENTS_DATA;
  tabOptions = TabsOptions;
  selectedTabItem = TabsOptions.Patient;
  // Using '!' to assert that the property will be assigned later
  searchForm!: FormGroup;
  searchPatientsResults: Array<Patient> = [];

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      startDate: [''],
      endDate: ['']
    });
    this.filterPatientsByToday();
  }

  filterPatientsByToday(): void {
    this.patientsData = PATIENTS_DATA;
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    this.patientsData = this.patientsData.filter(patient => patient.appointmentDate === today);
  }


  /** 
   * convert input date format:yyyy-mm-dd' to 'mm/dd/yyyy' format
  */
  formatDate(dateString: string): string {
    return this.datePipe.transform(this.convertStringToDate(dateString), 'MM/dd/yyyy') || '';
  }

  convertStringToDate(dateString: string): Date {
    const [year, month, day] = dateString.includes('-') ? dateString.split('-').map(Number) : dateString.split('/').map(Number);
    return new Date(Date.UTC(year, month - 1, day + 1))
  }

  searchPatients(): void {
    console.log(this.searchForm.value);
    this.selectedTabItem = TabsOptions.Search;
    const formValue = {...this.searchForm.value}; 
    formValue['dob'] = formValue['dob'] ? this.formatDate(formValue['dob']) : formValue.dob;
    formValue['startDate'] = formValue['startDate'] ? this.formatDate(formValue['startDate']) : formValue['startDate'];
    formValue['endDate'] = formValue['endDate'] ? this.formatDate(formValue['endDate']) : formValue['endDate'];
  
    this.patientsData = PATIENTS_DATA.filter(patient => {
      // Filter by first name
      if (formValue.firstName && !patient.firstName.toLowerCase().includes(formValue.firstName.toLowerCase())) {
        return false;
      }
      // Filter by last name
      if (formValue.lastName && !patient.lastName.toLowerCase().includes(formValue.lastName.toLowerCase())) {
        return false;
      }
      // Filter by date of birth
      if (formValue.dob && patient.dob !== formValue.dob) {
        return false;
      }
      // Filter by appointment date range
      if (formValue.startDate && this.convertStringToDate(patient.appointmentDate) < this.convertStringToDate(formValue.startDate)) {
        return false;
      }
      if (formValue.endDate && this.convertStringToDate(patient.appointmentDate) > this.convertStringToDate(formValue.endDate)) {
        return false;
      }
      return true;
    });
  }

  toggleItemsTab(selectedTab: TabsOptions): void {
    if (selectedTab !== this.selectedTabItem) {
      this.selectedTabItem = selectedTab;
      if (selectedTab === TabsOptions.Patient) {
        this.filterPatientsByToday();
      } else {
        this.searchPatients();
      }
    }
  }
}
