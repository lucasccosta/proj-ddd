import Address from "../value-object/address"
import { CustomerFactory } from "./customer-factory"

describe("Customer factory unit test", () => {
  it("should create a customer", () => {
    let customer = CustomerFactory.create("Lucas", "00022211145")

    expect(customer.id).toBeDefined()
    expect(customer.name).toBe("Lucas")
    expect(customer.cpf).toBe("00022211145")
    expect(customer.Address).toBeDefined()
  })

  it("should create a customer", () => {
    const address = new Address("Rua Pres. Vargas", 1, "2200001", "Cidade")
    let customer = CustomerFactory.createWithAddress("Lucas", "00022211145", address)

    expect(customer.id).toBeDefined()
    expect(customer.name).toBe("Lucas")
    expect(customer.cpf).toBe("00022211145")
    expect(customer.Address).toBe(address)
  })
})