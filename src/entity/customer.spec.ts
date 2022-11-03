import Address from "./address"
import Customer from "./customer"

describe("Customer unit tests", () => {

  it('should throw error when id is empty', () => {

    expect(() => {
      let customer = new Customer("", "John")
    }).toThrowError("Id is required")
  })

  it('should throw error when name is empty', () => {

    expect(() => {
      let customer = new Customer("123", "")
    }).toThrowError("Name is required")
  })

  it('should change name', () => {

    let customer = new Customer("123", "Lucas")
    customer.changeName("Lauro")

    expect(customer.name).toBe("Lauro")
  })

  it('should activate client', () => {

    let customer = new Customer("123", "Lucas")
    let address = new Address("Rua Lauro Sodré", 144, "22023-020", "RJ")
    customer.Address = address

    customer.activate()

    expect(customer.isActive).toBe(true)

  })

  it('should throw Error when address is undefined', () => {

    expect(() => {
      let customer = new Customer("123", "Lucas")
  
      customer.activate()
    }).toThrowError("Address is mandatory to activate customer")

  })

  it('should activate client', () => {

    let customer = new Customer("123", "Lucas")

    customer.deactivate()

    expect(customer.isActive).toBe(false)

  })
})