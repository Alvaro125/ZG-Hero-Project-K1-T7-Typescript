import { IAddress } from '../interfaces/IAddress'
import { IPerson } from '../interfaces/IPerson'
import Address from './address'
import Vendavel from './vendavel'

export default class Person implements IPerson {
    constructor(public name: string,
        public readonly email: string,
        public readonly description: string,
        public readonly address: IAddress) {
    }
}