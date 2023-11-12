import { User } from '../models/User';

export class AuthenticationService {
  private users: User[] = [];

  public register(email: string, password: string): User | null {
    // TODO: Implement registration logic
    // Hash password, create user object, add to users array
    return null;
  }

  public login(email: string, password: string): User | null {
    // TODO: Implement login logic
    // Check if user exists and password hash matches
    return null;
  }
}
