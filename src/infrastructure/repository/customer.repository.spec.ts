import { Sequelize } from "sequelize-typescript";
import Address from "../../domain/entity/address";
import Customer from "../../domain/entity/customer";
import CustomerModel from "../db/sequelize/model/customer.model";
import CustomerRepository from "./customer.repository";

describe("Customer repository unit tests", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });
  afterEach(async () => {
    await sequelize.close();
  });
  it("should create a new customer", async () => {
    const customerRepository = new CustomerRepository();

    const customer = new Customer("1", "Customer 1", "12345675643");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer.Address = address;

    await customerRepository.create(customer);

    const customerModel = await CustomerModel.findOne({ where: { id: "1" } });

    expect(customerModel.toJSON()).toStrictEqual({
      id: "1",
      name: customer.name,
      cpf: customer.cpf,
      active: customer.isActive(),
      rewardPoints: customer.rewardPoints,
      street: address.street,
      number: address.number,
      zipcode: address.zipcode,
      city: address.city,
    });
  });

  it("should update a customer", async () => {
    const customerRepository = new CustomerRepository();

    const customer = new Customer("1", "Customer 1", "12345675643");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer.Address = address;

    await customerRepository.create(customer);

    customer.changeName("Customer 2");
    await customerRepository.update(customer);
    const customerModel = await CustomerModel.findOne({ where: { id: "1" } });

    expect(customerModel.toJSON()).toStrictEqual({
      id: "1",
      name: customer.name,
      cpf: customer.cpf,
      active: customer.isActive(),
      rewardPoints: customer.rewardPoints,
      street: address.street,
      number: address.number,
      zipcode: address.zipcode,
      city: address.city,
    });
  });

  it("should find a customer by its id", async () => {
    const customerRepository = new CustomerRepository();

    const customer = new Customer("1", "Customer 1", "12345675643");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer.Address = address;
    customer.activate();

    await customerRepository.create(customer);

    const customerResult = await customerRepository.getById(customer.id);

    expect(customer).toStrictEqual(customerResult);
  });

  it("should throw error Customer not found", async () => {
    const customerRepository = new CustomerRepository();

    expect(async () => {
      await customerRepository.getById("448292");
    }).rejects.toThrow("Customer not found");
  });
  it("should find a customer by its id", async () => {
    const customerRepository = new CustomerRepository();

    const customer1 = new Customer("1", "Customer 1", "12345675643");
    const address1 = new Address("Street 1", 1, "Zipcode 1", "City 1");
    customer1.Address = address1;
    customer1.activate();
    const customer2 = new Customer("2", "Customer 2", "00045675643");
    const address2 = new Address("Street 2", 1, "Zipcode 2", "City 2");
    customer2.Address = address2;
    customer2.activate();

    await customerRepository.create(customer1);
    await customerRepository.create(customer2);

    const customerResult = await customerRepository.getAll();

    expect(customerResult).toContainEqual(customer1);
    expect(customerResult).toContainEqual(customer2);
    expect(customerResult).toHaveLength(2);
  });
});
