import { Message } from "discord.js";
import Command from './command';

const command: Command = {
    name: 'chahaein',
    description: '',
    command: (msg: Message, _args: string[]) => {
        msg.channel.send('waifu');
    }
}

export default command;