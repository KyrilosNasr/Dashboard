import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '../model/user.model';
import { ProfileService } from '../model/profile.service';
import { GetUserDetails, UpdateUser } from './user.actions';
import { tap } from 'rxjs/operators';

export class UserStateModel {
    public users!: User[];
    public selectedUser!: User;

}

@Injectable()
@State<UserStateModel>({
    name: 'dashboard_user',
    defaults: {
        users: [],
        selectedUser: null
    }
})

export class UserState {
    constructor(
        private _profileService: ProfileService
    ) { }


    @Selector()
    static getSelectedUser(state: UserStateModel): User {
        return state.selectedUser;
    }

    @Action(GetUserDetails)
    public GetUserDetails({ getState, setState }: StateContext<UserStateModel>) {
        return this._profileService.getUserDetails().pipe(
            tap((userProfile: any) => {
                const state = getState();
                setState({
                    ...state,
                    users: userProfile
                })
            }))
    }

    @Action(UpdateUser)
    UpdateUser({ getState, setState }: StateContext<UserStateModel>, { payload, id }: UpdateUser) {
        return this._profileService.updateUserDetails(payload, id).pipe(
            tap((data => {
                const state = getState();
                const usersList = [...state.users];
                const userIndex = usersList.findIndex(user => user.userId == id);
                usersList[userIndex] = data;
                setState({
                    ...state,
                    users: usersList
                })
            }))
        )
    }
}