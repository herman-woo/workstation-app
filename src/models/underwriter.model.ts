export class Underwriter {

    constructor(
        public id: number = null,
        public firstName: string = '',
        public lastName: string = '',
        public businessUnitId: number = null,
        public businessUnitName: string = '',
        public teamId: number = null,
        public teamName: string = '',
        public role: string = '',
        public createdTime: Date = null,
        public updatedTime: Date = null,
    ){ }

    static mapJson(json: any): Underwriter {
        return new Underwriter(
          json.id,
          json.first_name, // Map `first_name` to `firstName`
          json.last_name,  // Map `last_name` to `lastName`
          json.business_unit,
          json.business_unit_name,
          json.team,
          json.team_name,
          json.role,
          json.created_time,
          json.updated_time
        );
    }

}
