import {Privilege} from './privilege.model';
import {Role} from './role.mode';
import {Timestamp} from 'rxjs';

export class User {
  public id: string;
  public userRoles: Role[];
  public userPrivileges: Privilege[];
  public email: string;
  public username: string;
  public password: string;
  public active: boolean;
  public admin: boolean;
  public mfaType: string;
  public createdAt?: Timestamp<any>;
  public createdBy: string;

  constructor(id?: string, userRoles?: Role[], userPrivileges?: Privilege[], email?: string, username?: string, password?: string, active?: boolean, admin?: boolean, mfaType?: string, createdAt?: Timestamp<any>, createdBy?: string) {
    this.id = id || '';
    this.userRoles = userRoles || [];
    this.userPrivileges = userPrivileges || [];
    this.email = email || '';
    this.username = username || '';
    this.password = password || '';
    this.active = active || false;
    this.admin = admin || false;
    this.mfaType = mfaType || '';
    this.createdAt = createdAt;
    this.createdBy = createdBy || '';
  }
}
