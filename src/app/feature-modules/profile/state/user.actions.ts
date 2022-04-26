import { User } from '../model/user.model';

export class GetUserDetails {
    static readonly type = '[User] Get Details';
    constructor() { }
}

export class UpdateUser {
    static readonly type = '[User] Update';
    constructor(public payload: User, public id: number) { }
}

export class SetSelectedUser {
    static readonly type = '[User] Set';

    constructor(public payload: User) {
    }

}