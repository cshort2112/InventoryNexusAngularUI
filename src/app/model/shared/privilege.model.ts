import {Role} from './role.mode';
import {User} from './user.model';

export class Privilege {
  public id: string;
  public name: string;
  public resourceName: string;
  public readPrivilege: boolean;
  public writePrivilege: boolean;
  public deletePrivilege: boolean;
  public updatePrivilege: boolean;
  public roles: Role[];
  public users: User[];

  constructor(id: string, name: string, resourceName: string, readPrivilege: boolean, writePrivilege: boolean, deletePrivilege: boolean, updatePrivilege: boolean, roles: Role[], users: User[])  {
    this.id = id;
    this.name = name;
    this.resourceName = resourceName;
    this.readPrivilege = readPrivilege;
    this.writePrivilege = writePrivilege;
    this.deletePrivilege = deletePrivilege;
    this.updatePrivilege = updatePrivilege;
    this.roles = roles;
    this.users = users;
  }
}
