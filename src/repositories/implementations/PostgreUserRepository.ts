import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class PostgresUserRepository implements IUserRepository {
    private users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        const user = this.findByEmail(user => user.email === email);
    }
    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}