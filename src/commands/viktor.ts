import { Message } from "discord.js";
import Command from './command';

const command: Command = {
    name: 'viktor',
    description: '',
    command: (msg: Message, _args: string[]) => {
        msg.channel.send('Praise my godfather Viktor!');
    }
}

export default command;