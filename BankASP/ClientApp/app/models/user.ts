import { Group } from "./group";

export class User {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public dob?: number,
        public group?: Group
    ) { }
}