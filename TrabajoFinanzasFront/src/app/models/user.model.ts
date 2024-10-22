export class User {
  id : string;
  user: string;
  email: string;
  phone: string;
  password: string;
  photo: string;


  constructor(id: string, user: string, email: string, phone: string, password: string, photo: string) {
    this.id = id;
    this.user = user;
    this.email = email;
    this.photo = photo;
    this.phone = phone;
    this.password = password;
  }
}
