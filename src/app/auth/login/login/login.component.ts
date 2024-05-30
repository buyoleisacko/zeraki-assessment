import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/User';
import { SupabaseService } from 'src/app/utils/http/supabase.service';
import { LoaderService } from 'src/app/loader/loader.service';
import { ToastaService } from 'src/app/toastr/toasta.service';
import { IsLoggedInServiceService } from 'src/app/services/login/is-logged-in-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usernameFormController = new FormControl('', Validators.required);
  passwordFormController = new FormControl('', Validators.required);
  user: UserModel;

  constructor(
    private router: Router,
     private supabaseService: SupabaseService,
     private loadingService: LoaderService,
     private toastService: ToastaService, 
     private isLoggedInService: IsLoggedInServiceService){
    this.user = {} as UserModel;
  }


  public signIn(): void {
    // this.toastService.showSuccess("Successfully signed in", "Success")
    this.loadingService.isLoading.next(true);
    this.supabaseService.signIn(
      this.user.email,
      this.user.password)
    .then((response) => {
      console.log("DATA:::::::", response);
      this.toastService.showError(`${response.error.message}`, "Error")
      this.loadingService.isLoading.next(false);
    }).catch((error) => {
      this.loadingService.isLoading.next(false);
      
    });
  }


  //Sign in with Github
  signInWithGithub = () => {
    this.loadingService.isLoading.next(true);
    this.supabaseService.signInWithGithub()
    .then((response) => {
      console.log("RESPONSE: " + response);
      
      if(response.error==null) {
        this.router.navigate(['/app-home']);
        this.loadingService.isLoading.next(false);
        this.toastService.showSuccess("Successfully signed in", "Success")

      }
      
      
    }).catch((error) =>{
      console.log("ERRRREEEE",error);
      
    })
  }

  navigate=()=> {
    console.log("clickdeed login");
    
    
  }

  async onSubmit(): Promise<void> {
    try {
      const email = this.user.email
      const { error } = await this.supabaseService.loginWithEmail(email)
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      
      
    }
  }


}
