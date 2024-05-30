import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { User } from 'src/app/models/User';
import { IsLoggedInServiceService } from 'src/app/services/login/is-logged-in-service.service';
import { SupabaseService } from 'src/app/utils/http/supabase.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  implements OnInit {
  user: User []
  constructor(public loadeService: LoaderService,
    private isLoggedInService: IsLoggedInServiceService,
    private supabaseService: SupabaseService,
    private router: Router){

  }
  ngOnInit(): void {
    this.getSessionData()
  }


  //Get session data here
  getSessionData = (): void =>{
    this.supabaseService.getSession()
  .then((sessionData) => {
    console.log(sessionData)
    this.user = sessionData.data.session.user.email;
    
    
  }).catch((error) => {
    console.log(error);
    
  });


  }

  //Logout  user
  logoutUser = ()=> {
    this.supabaseService.signOut()
    .then((data)=>{
      // console.log("DATA", data);
     
      
      
    })
    this.router.navigate(['/login']);
  }


}
