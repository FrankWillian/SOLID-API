interface IAddress {
    email: string;
    name: string;
}

export interface IMessage{
    to: string;
    from: string;
    subject: string;
    body: string;
}

export interface ImailProvider {
    sendMail(message: IMessage): Promise<void>;
}