export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  // username: string;

  constructor(user: any) {
      this.id = user.id || 0;
      this.firstName = user.firstName || '';
      this.lastName = user.lastName || '';
      this.email = user.email || '';
      // this.username = user.username || '';
    }
}
