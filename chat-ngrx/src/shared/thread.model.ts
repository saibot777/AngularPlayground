export interface Thread {
    id: number | string;
    messageIds: number[];
    participants: {[key: number]: number};
}