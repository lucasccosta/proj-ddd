import Address from "../value-object/address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _cpf: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string, cpf: string) {
    this._id = id;
    this._name = name;
    this._cpf = cpf;
    this.validate();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._cpf.length !== 11) {
      throw new Error("Cpf must have exactly 11 characters");
    }
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get cpf(): string {
    return this._cpf;
  }

  // get address(): Address {
  //   return this._address;
  // }

  isActive(): boolean {
    return this._active;
  }

  get Address(): Address {
    return this._address;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  set id(id: string) {
    this._id = id;
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  changeAddress(address: Address) {
    this._address = address;
  }

  // Address não é inicializado mas ele pode ser setado como um Value Object
  // Note que ele não pode ser "alterado", apenas substituído já que agora estamos criando um address do tipo Address
  set Address(address: Address) {
    this._address = address;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  activate() {
    if (this._address === undefined) {
      throw Error("Address is mandatory to activate customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}
