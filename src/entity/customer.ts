import Address from './address'

export default class Customer {

  _id: string
  _name: string
  _address!: Address
  
  constructor(id: string, name: string) {
    this._id = id
    this._name = name
    this.validate()
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("Name is required")
    }
    if (this._address != undefined) {
      throw new Error("Address is required")
    }
  }

  get id(): string {
    return this._id
  }
  
  get name(): string {
    return this._name
  }

  set id(id: string) {
    this._id = id
  }
  
  set name(name: string) {
    this._name = name
  }

  // Address não é inicializado mas ele pode ser setado como um Value Object
  // Note que ele não pode ser "alterado", apenas substituído já que agora estamos criando um address do tipo Address
  set Address(address: Address) {
    this._address = address
  }

}