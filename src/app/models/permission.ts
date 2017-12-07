import {PermissionsUser} from "./permissionsUser";

export class Permission {
    id: string;
    name : string;
    users: Array<PermissionsUser>;
}
