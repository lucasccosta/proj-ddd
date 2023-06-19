import Address from "../value-object/address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John", "12345432111");
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("123", "", "12345432111");
    }).toThrowError("Name is required");
  });

  it("should throw error when cpf do not have exactly 11 characters", () => {
    expect(() => {
      let customer = new Customer("123", "Lucas", "1234");
    }).toThrowError("Cpf must have exactly 11 characters");
  });

  it("should change name", () => {
    let customer = new Customer("123", "Lucas", "12345432111");
    customer.changeName("Lauro");

    expect(customer.name).toBe("Lauro");
  });

  it("should activate client", () => {
    let customer = new Customer("123", "Lucas", "12345432111");
    let address = new Address("Rua Lauro Sodré", 144, "22023-020", "RJ");
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("should deactivate client", () => {
    let customer = new Customer("123", "Lucas", "12345432111");

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should throw Error when address is undefined", () => {
    expect(() => {
      let customer = new Customer("123", "Lucas", "12345432111");

      customer.activate();
    }).toThrowError("Address is mandatory to activate customer");
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "Customer 1", "12345432111");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
