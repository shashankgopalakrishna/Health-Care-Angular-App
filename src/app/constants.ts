export enum Sex {
    Male = 'Male',
    Female = 'Female'
}
export enum TabsOptions {
    Patient = 'Patient',
    Search = 'Search'
}

export interface Patient {
    imgPath: string;
    firstName: string;
    lastName: string;
    appointmentDate: string;
    dob: string;
    sex: Sex;
    residence: string;
    MRN: string;
    id: string;
    lastDigitssn: number;
    phoneNumber: string;
    emailAddress: string;
    hospital: string;
    dept: string;
    physician: string;
    conditions: string;
}

export const PATIENTS_DATA: Array<Patient> = [
    {
      imgPath: './../assets/images/profile_1.jpeg', 
      firstName: 'Ashley',
      lastName: 'Citeria',
      appointmentDate: '04/18/2024',
      dob: '01/02/1990',
      sex: Sex.Male,
      residence: 'Boston, MA',
      MRN: 'YK082139482',
      id: 'NH23444',
      lastDigitssn: 1234,
      phoneNumber: '1234567890',
      emailAddress: 'ashley@gmail.com',
      hospital: 'Medical Group',
      dept: 'Department of Cardiology',
      physician: 'Dr. Smith',
      conditions: 'COPD, Diabetes'
    },
    {
      imgPath: './../assets/images/profile_2.png', 
      firstName: 'John',
      lastName: 'Doe',
      appointmentDate: '04/20/2024',
      dob: '05/15/1975',
      sex: Sex.Male,
      residence: 'New York, NY',
      MRN: 'XZ1122334455',
      id: 'JD67890',
      lastDigitssn: 5678,
      phoneNumber: '9876543210',
      emailAddress: 'johndoe@gmail.com',
      hospital: 'General Hospital',
      dept: 'Emergency Medicine',
      physician: 'Dr. Johnson',
      conditions: 'Hypertension'
    },
    {
        imgPath: './../assets/images/profile_3.jpeg',
      firstName: 'Alice',
      lastName: 'Smith',
      appointmentDate: '04/21/2024',
      dob: '09/28/1988',
      sex: Sex.Female,
      residence: 'Los Angeles, CA',
      MRN: 'AB0987654321',
      id: 'AS54321',
      lastDigitssn: 2468,
      phoneNumber: '5551234567',
      emailAddress: 'alice.smith@example.com',
      hospital: 'Community Hospital',
      dept: 'Orthopedics',
      physician: 'Dr. Martinez',
      conditions: 'Arthritis'
    },
    {
        imgPath: './../assets/images/profile_1.jpeg',
      firstName: 'Michael',
      lastName: 'Johnson',
      appointmentDate: '04/22/2024',
      dob: '03/12/1980',
      sex: Sex.Male,
      residence: 'Chicago, IL',
      MRN: 'MJ777777777',
      id: 'MJ98765',
      lastDigitssn: 1357,
      phoneNumber: '3334445555',
      emailAddress: 'michael.johnson@example.com',
      hospital: 'University Medical Center',
      dept: 'Oncology',
      physician: 'Dr. Lee',
      conditions: 'Cancer'
    },
    {
        imgPath: './../assets/images/profile_2.png',
      firstName: 'Emily',
      lastName: 'Brown',
      appointmentDate: '04/23/2024',
      dob: '11/20/1995',
      sex: Sex.Female,
      residence: 'Houston, TX',
      MRN: 'EB123456789',
      id: 'EB54321',
      lastDigitssn: 8642,
      phoneNumber: '9998887777',
      emailAddress: 'emily.brown@example.com',
      hospital: 'Children\'s Hospital',
      dept: 'Pediatrics',
      physician: 'Dr. Rodriguez',
      conditions: 'Asthma'
    },
    {
        imgPath: './../assets/images/profile_3.jpeg',
      firstName: 'William',
      lastName: 'Wilson',
      appointmentDate: '04/24/2024',
      dob: '07/04/1972',
      sex: Sex.Male,
      residence: 'Philadelphia, PA',
      MRN: 'WW654321098',
      id: 'WW78901',
      lastDigitssn: 9753,
      phoneNumber: '2223334444',
      emailAddress: 'william.wilson@example.com',
      hospital: 'Memorial Hospital',
      dept: 'Neurology',
      physician: 'Dr. Patel',
      conditions: 'Epilepsy'
    },
    {
        imgPath: './../assets/images/profile_1.jpeg', 
      firstName: 'Olivia',
      lastName: 'Taylor',
      appointmentDate: '04/25/2024',
      dob: '02/14/1986',
      sex: Sex.Female,
      residence: 'Phoenix, AZ',
      MRN: 'OT999999999',
      id: 'OT12345',
      lastDigitssn: 3579,
      phoneNumber: '7776665555',
      emailAddress: 'olivia.taylor@example.com',
      hospital: 'Veterans Hospital',
      dept: 'Psychiatry',
      physician: 'Dr. Ramirez',
      conditions: 'Depression'
    },
    {
        imgPath: './../assets/images/profile_2.png', 
      firstName: 'Daniel',
      lastName: 'Davis',
      appointmentDate: '04/26/2024',
      dob: '06/30/1992',
      sex: Sex.Male,
      residence: 'San Diego, CA',
      MRN: 'DD444444444',
      id: 'DD67890',
      lastDigitssn: 2468,
      phoneNumber: '1112223333',
      emailAddress: 'daniel.davis@example.com',
      hospital: 'Psychiatric Center',
      dept: 'Behavioral Health',
      physician: 'Dr. Williams',
      conditions: 'Bipolar Disorder'
    },
    {
        imgPath: './../assets/images/profile_1.jpeg',
      firstName: 'Sophia',
      lastName: 'Martinez',
      appointmentDate: '04/27/2024',
      dob: '08/08/1978',
      sex: Sex.Female,
      residence: 'Dallas, TX',
      MRN: 'SM123456789',
      id: 'SM54321',
      lastDigitssn: 1357,
      phoneNumber: '6667778888',
      emailAddress: 'sophia.martinez@example.com',
      hospital: 'Regional Medical Center',
      dept: 'Dermatology',
      physician: 'Dr. Brown',
      conditions: 'Psoriasis'
    },
    {
        imgPath: './../assets/images/profile_1.jpeg', 
      firstName: 'Liam',
      lastName: 'Anderson',
      appointmentDate: '04/28/2024',
      dob: '12/03/1983',
      sex: Sex.Male,
      residence: 'Seattle, WA',
      MRN: 'LA543210987',
      id: 'LA09876',
      lastDigitssn: 8642,
      phoneNumber: '4445556666',
      emailAddress: 'liam.anderson@example.com',
      hospital: 'Urgent Care Clinic',
      dept: 'Family Medicine',
      physician: 'Dr. Wilson',
      conditions: 'High Blood Pressure'
    },
    {
        imgPath: './../assets/images/profile_2.png', 
      firstName: 'Emma',
      lastName: 'White',
      appointmentDate: '04/29/2024',
      dob: '10/25/1998',
      sex: Sex.Female,
      residence: 'Miami, FL',
      MRN: 'EW777777777',
      id: 'EW54321',
      lastDigitssn: 9753,
      phoneNumber: '8889990000',
      emailAddress: 'emma.white@example.com',
      hospital: 'Rehabilitation Hospital',
      dept: 'Physical Therapy',
      physician: 'Dr. Wilson',
      conditions: 'High Blood Pressure'
    }
];