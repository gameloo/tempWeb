import { Group } from "./group";
import { User } from "./user";

export class History {
    constructor(
        public id?: number,
        public date?: number,
        public group?: Group,
        public user?: User
    ) { }
}