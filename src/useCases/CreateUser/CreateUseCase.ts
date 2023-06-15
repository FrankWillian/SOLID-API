import { IUserRepository } from "../../repositories/IUserRepository";
import {ICreateUserRequestDTO} from "./CreateUseDTO"
import { User } from "../../entities/User"
import { ImailProvider } from "../../providers/IMailProviders";

export class CreateUseCase {

    constructor(
        private usersRepository: IUserRepository,
        private mailProvider: ImailProvider,
    )  {}
    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExits = await this.usersRepository.findByEmail(data.email);

        if(userAlreadyExits) {
            throw new Error('User already exists');
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe do meu App',
                email: 'equipe@meuapp.com',
            },
            subject: 'Seja bem-vindo à plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        })

    }
}