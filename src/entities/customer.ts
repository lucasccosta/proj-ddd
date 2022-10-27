class Customer {

  _id: string
  _name: string
  _addres: string
  
  constructor(id: string, name: string, address: string) {
    this._id = id
    this._name = name
    this._addres = address
  }

  get id(): string {
    return this._id
  }
  
  get name(): string {
    return this._name
  }
  get addres(): string {
    return this._addres
  }
  set id(id: string) {
    this._id = id
  }
  
  set name(name: string) {
    this._name = name
  }
  set addres(address: string) {
    this._addres = address
  }

}