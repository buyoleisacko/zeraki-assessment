import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { environment } from 'src/environments/environment';
import { AuthChangeEvent, createClient, Session, SupabaseClient, AuthSession } from '@supabase/supabase-js'


@Injectable({
  providedIn: 'root'
})
export class SupabaseService implements HttpInterceptor {

  private supabaseClient: SupabaseClient;
  _session: AuthSession | null = null

  constructor(
    public loaderService: LoaderService,
    private httpClient: HttpClient,
  ) {
    this.supabaseClient = createClient(environment.superbaseUrl, environment.superbaseKey)
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);

    //check if the request is complete
    return next.handle(request).pipe(
      finalize(() => {
        this.loaderService.isLoading.next(false);
      })
    );

  }

  // Get user
  getUser = (): Promise<any> => {
    return this.supabaseClient.auth.getUser();
  }


  //Get session data
  getSession = (): Promise<any> => {
    return this.supabaseClient.auth.getSession()
  }

  get session() {
    this.supabaseClient.auth.getSession().then(({ data }) => {
      this._session = data.session

      console.log("WE GOT::::::: ", this._session)
    })
    return this._session
  }

  //  get user profile
  getProfile = (): PromiseLike<any> => {
    const user = this.getUser();

    return this.supabaseClient.from('profiles')
      .select('username, website, avatar_url')
      .eq('id', user)
      .single();
  }

  authChanges = (callback: (event: AuthChangeEvent, session: Session | null) => void): any => {
    return this.supabaseClient.auth.onAuthStateChange(callback);
  }

  // Sign in with the email  and password
  signIn = (email: string, password: string): Promise<any> => {
    return this.supabaseClient.auth.signInWithPassword({
      email,
      password
    });
  }


  //  Sign In with Github
  signInWithGithub = (): Promise<any> => {
    return  this.supabaseClient.auth.signInWithOAuth({
      provider: 'github',
    })
  }

  // Sign in with email only
  loginWithEmail(email: string) {
    return this.supabaseClient.auth.signInWithOtp({ email })
  }


  // Sign out user
  signOut = (): Promise<any> => {
    return this.supabaseClient.auth.signOut();
  }

  // get event articles
  getEventArticles = async () => {
    const data  = await this.supabaseClient.from('event_articles').select()
    return data
  }

}
