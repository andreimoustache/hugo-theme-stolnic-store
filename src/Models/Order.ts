import {CartLine} from './CartLine';

export class Order {
  constructor(
    public name: string,
    public email: string,
    public telephone: string,
    public items: Map<string, CartLine>
  ) {}

  submit(): Promise<unknown> {
    return Promise.reject();
  }
}
