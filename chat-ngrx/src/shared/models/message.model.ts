export interface Message {
    id: number | string;
    threadId: number;
    participantId: number;
    text: string;
    timestamp: number;
}