export interface User {
  id: number;
  firstname:string;
  lastname:string;
  username: string;
  password: string;
  email: string;
  role: string;
  created: Date;
  lastActive: Date;
  province: string;
  country: string;
  zip: string;
}

