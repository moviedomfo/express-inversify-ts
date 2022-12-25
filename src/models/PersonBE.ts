export interface Person {
  Id: number;

  Email: string;
  Name: string;
  LastName: string;

  Status?: "Happy" | "Sad";
  PhoneNumber: string;
}
