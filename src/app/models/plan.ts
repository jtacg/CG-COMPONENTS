export class Plan {
    planId:number;
    name:string;
    type:string;
    experience:string;
    advisor:string;
    address: Address;
}

export class Address {
  street: string;
  city: string;
  state: string;
}
