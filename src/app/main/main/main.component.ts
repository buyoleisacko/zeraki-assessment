import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { SupabaseService } from 'src/app/utils/http/supabase.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  user: User[] = []
  constructor(private  supabaseService: SupabaseService){
    
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
    this.getSessionData()
  }
  ngOnInit(): void {
    
  }

  //Get session data here
  getSessionData = (): void =>{
    this.supabaseService.getSession()
  .then((sessionData) => {
    console.log(sessionData)
    this.user = sessionData.data.session.user
    // console.log(this.user);
    
  }).catch((error) => {
    console.log(error);
    
  });


  }
  

}
