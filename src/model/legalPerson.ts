import { IAddress } from '../interfaces/IAddress'
import { IPerson } from '../interfaces/IPerson'
import Person from './person'
import Vendavel from './vendavel'

export default class LegalPerson extends Person {
    constructor(public name: string,
        public readonly email: string,
        public readonly description: string,
        public readonly address: IAddress) {
        super(name,email,description,address)
    }
}