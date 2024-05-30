export interface UserModel {
    email: string;
    password: string;
    age: string
    name: string;
    website: string;
    url: string;
}


export interface Root {
    data: Data
    error: any
  }
  
  export interface Data {
    session: Session
  }
  
  export interface Session {
    provider_token: string
    provider_refresh_token: any
    access_token: string
    expires_in: number
    expires_at: number
    refresh_token: string
    token_type: string
    user: User
  }
  
  export interface User {
    id: string
    aud: string
    role: string
    email: string
    email_confirmed_at: string
    phone: string
    confirmed_at: string
    last_sign_in_at: string
    app_metadata: AppMetadata
    user_metadata: UserMetadata
    identities: Identity[]
    created_at: string
    updated_at: string
  }
  
  export interface AppMetadata {
    provider: string
    providers: string[]
  }
  
  export interface UserMetadata {
    avatar_url: string
    email: string
    email_verified: boolean
    full_name: string
    iss: string
    name: string
    preferred_username: string
    provider_id: string
    sub: string
    user_name: string
  }
  
  export interface Identity {
    id: string
    user_id: string
    identity_data: IdentityData
    provider: string
    last_sign_in_at: string
    created_at: string
    updated_at: string
  }
  
  export interface IdentityData {
    avatar_url: string
    email: string
    email_verified: boolean
    full_name: string
    iss: string
    name: string
    preferred_username: string
    provider_id: string
    sub: string
    user_name: string
  }
  