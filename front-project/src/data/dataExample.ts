import { UserType } from "../types/redux";
import { v4 as uuidv4 } from 'uuid';

export const userExample: UserType = {
    id: uuidv4(),
    email: "ejemplo@gmail.com",
    name: "Pepe"
}