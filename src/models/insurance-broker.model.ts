export class Broker {

    constructor(
        public id: number = null,
        public firstName: string = '',
        public lastName: string = '',
        public title: string = '',
        public phoneNumber: string = '',
        public email: string = '',
        public brokerComapnyId: string = '',
        public brokerCompanyName: string = '',
        public createdTime: Date = null,
        public updatedTime: Date = null,
    ) { }

    static mapJson(json: any): Broker {
        return new Broker(
            json.id,
            json.first_name,
            json.last_name,
            json.title,
            json.phone_number,
            json.email,
            json.broker_company,
            json.broker_company_name,
            json.created_time,
            json.updated_time
        );
    }

}
