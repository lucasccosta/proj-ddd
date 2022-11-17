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

  get price(): number {
    return this._price;
  }

  orderItemTotal(): number {
    return this._price * this._quantity;
  }
}
