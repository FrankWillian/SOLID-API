import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProviders";
import { PostgresUserRepository } from "../../repositories/implementations/PostgreUserRepository";
import { CreateUseCase } from "./CreateUseCase";
import { CreateUseController } from "./CreateUseController";

const mailTrapMailProvider = new MailtrapMailProvider()
const postgresUserRepository = new PostgresUserRepository()

const createUserUseCase = new CreateUseCase(
    postgresUserRepository,
    mailTrapMailProvider
)

const createUserUseCase = new CreateUseController{
    createUseCase
}

export { createUserUseCase, CreateUseController}