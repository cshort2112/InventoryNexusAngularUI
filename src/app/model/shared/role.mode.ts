import {Privilege} from './privilege.model';
import {User} from './user.model';

export class Role {
  public id: string;
  public name: string;
  public privileges: Privilege[];
  public users: User[];

  constructor(id: string, name: string, privileges: Privilege[], users: User[]) {
    this.id = id;
    this.name = name;
    this.privileges = privileges;
    this.users = users;
  }
}
