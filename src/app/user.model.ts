export class User {
    fullName: string;
    message?: string;
    imageUrl: string;
    password: any;
    phone: number;
    email: string;
    constructor(fullName: string, message: string, imageUrl: string, password: any, phone: number, email: string) {
        this.message = message;
        this.imageUrl = imageUrl;
        this.fullName = fullName;
        this.password = password;
        this.phone = phone;
        this.email = email;
    }


}