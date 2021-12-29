export class CurrencyModel {
    name: string;
    code: string;
    symbol: string;

    constructor(_params?: any) {
        if (!_params) _params = {};
        Object.assign(this, _params);
    }
}
