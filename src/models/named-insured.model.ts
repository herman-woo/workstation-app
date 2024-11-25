export class NamedInsured {
    constructor(
        public id: number = null,
        public name: string  = '',
        public address: string = '',
        public postalCode: number = null,
        public province: string = '',
        public createdTime: Date = null,
        public updatedTime: Date = null
    ){ }

    static mapJson(json: any): NamedInsured {
        return new NamedInsured(
          json.id,
          json.name, // Map `first_name` to `firstName`
          json.address,  // Map `last_name` to `lastName`
          json.postal_code,
          json.province,
          json.created_time,
          json.updated_time
        );
    }
}
