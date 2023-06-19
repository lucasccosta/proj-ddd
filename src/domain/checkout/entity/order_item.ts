export default class OrderItem {
  _id: string;
  _productId: string;
  _price: number;
  _name: string;
  _quantity: number;

  constructor(
    id: string,
    productId: string,
    price: number,
    name: string,
    quantity: number
  ) {
    this._id = id;
    this._productId = productId;
    this._price = price;
    this._name = name;
    this._quantity = quantity;
  }

  get id() {
    return this._id;
  }
  get productId() {
    return this._productId;
  }
  get price() {
    return this._price;
  }
  get name() {
    return this._name;
  }
  get quantity() {
    return this._quantity;
  }

  orderItemTotal(): number {
    return this._price * this._quantity;
  }
}
