export class BrokerCompany {

    constructor(
        public id: number = null,
        public companyId: number = null,
        public name: string = '',
        public address: string = '',
        public postalCode: string = '',
        public city: string = '',
        public province: string = '',
        public topLevel: string = '',
        public companyLevel: boolean = false,
        public parentCompanyId: number = null,
        public parentCompanyName: string = '',
        public createdTime: Date = null,
        public updatedTime: Date = null,
    ){ }

    static mapJson(json: any): BrokerCompany {
        return new BrokerCompany(
          json.id,
          json.company_id,
          json.name,
          json.address,
          json.postal_code,
          json.city,
          json.province,
          json.is_top_level,
          json.company_level,
          json.parent_company,
          json.parent_company_name,
          json.created_time,
          json.updated_time
        );
    }

}
    