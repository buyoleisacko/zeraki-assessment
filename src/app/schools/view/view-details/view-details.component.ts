import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { School } from 'src/app/models/School';
import { SchoolService } from 'src/app/services/school/school.service';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
})
export class ViewDetailsComponent {
  school: any;

  selected = 'IGCSE';
  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.schoolService.getSchools().subscribe((schools) => {
     
      this.school = schools.find(s => s.id === id);
      console.log("DATAT", this.school)
      
    });
  }

}
function provideNativeDateAdapter(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

