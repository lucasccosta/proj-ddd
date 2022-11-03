import Address from './address'

export default class Customer {

  private _id: string
  private _name: string
  private _address!: Address
  private _active: boolean = false
  
  constructor(id: string, name: string) {
    this._id = id
    this._name = name
    this.validate()
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required")
    }
    if (this._name.length === 0) {
      throw new Error("Name is required")
    }
  }

  get id(): string {
    return this._id
  }
  
  get name(): string {
    return this._name
  }

  get isActive(): boolean {
    return this._active
  }

  set id(id: string) {
    this._id = id
  }
  
  changeName(name: string) {
    this._name = name
    this.validate()
  }

  // Address não é inicializado mas ele pode ser setado como um Value Object
  // Note que ele não pode ser "alterado", apenas substituído já que agora estamos criando um address do tipo Address
  set Address(address: Address) {
    this._address = address
  }

  activate() {
    if (this._address === undefined) {
      throw Error("Address is mandatory to activate customer")
    }
    this._active = true
  }

  deactivate() {
    this._active = false
  }

}