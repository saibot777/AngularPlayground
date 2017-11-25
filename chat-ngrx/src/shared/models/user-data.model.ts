import { Thread } from './thread.model';
import { Participant } from './participant.model';
import { Message } from './message.model';

export interface UserData {
    participants: Participant[];
    threads: Thread[];
    messages: Message[];
}