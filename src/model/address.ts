import { IAddress } from '../interfaces/IAddress'
export default class Address implements IAddress {
    constructor(public country: string,
        public readonly state: string,
        public readonly cep: string) {
    }
}