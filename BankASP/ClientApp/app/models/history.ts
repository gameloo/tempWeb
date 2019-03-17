import { Group } from "./group";

export class User {
    constructor(
        public id?: number,
        public date?: number,
        public group?: Group
    ) { }
}