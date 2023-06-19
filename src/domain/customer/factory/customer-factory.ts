import { v4 as uuid } from "uuid"
import Customer from "../entity/customer";
import Address from "../value-object/address";

export class CustomerFactory {
  public static create(name: string, cpf: string): Customer {
    return new Customer(uuid(), name, cpf);
  }

  public static createWithAddress(name: string, cpf:string, address: Address): Customer {
    const customer = new Customer(uuid(), name, cpf);
    customer.changeAddress(address);
    return customer;
  }
}