import Order from "./order"
import OrderItem from "./order_item"


describe("Customer unit tests", () => {

  it('should throw error when id is empty', () => {

    expect(() => {
      let order = new Order("", "123", [])
    }).toThrowError("Id is required")
  })
  
  it('should throw error when customerId is empty', () => {
    
    expect(() => {
      let order = new Order("1230", "", [])
    }).toThrowError("CustomerId is required")
  })
  it('should throw error when items are empty', () => {
    
    expect(() => {
      let order = new Order("12", "123", [])
    }).toThrowError("Items are required")
  })
  it('should calculate total', () => {

    expect(() => {
      let item1 = new OrderItem("1", "item 1", 100)
      let item2 = new OrderItem("2", "item 2", 150)

      let order = new Order("1230", "", [item1, item2])

      expect(order.total).toBe(250)
    })
  })
})