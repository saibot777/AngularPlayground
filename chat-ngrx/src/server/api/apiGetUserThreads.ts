import { UserData } from '../../shared/models/user-data.model';
import { Message } from './../../shared/models/message.model';

import {Application, Request, Response} from 'express';
import {findDbThreadsPerUser} from "../persistence/findDbThreadsPerUser";
import * as _ from 'lodash';
import {dbMessages, dbParticipants} from "../db-data";

export function apiGetUserThreads(app: Application) {

    app.route('/api/threads').get((req: Request, res: Response) => {

        const participantId = Math.floor(Number(req.headers['userid']));

        const threadsPerUser = findDbThreadsPerUser(participantId);

        let messages: Message[] = [],
            participantIds: string[] = [];

        threadsPerUser.forEach(thread => {

            const threadMessages: Message[] = _.filter(dbMessages, (message: any) => message.threadId === thread.id);

            messages = messages.concat(threadMessages);

            participantIds  = participantIds.concat(_.keys(thread.participants));

        });

        const participants = _.uniq(participantIds.map(participantId => dbParticipants[participantId]));

        const response: UserData = {
          participants,
          messages,
            threads: threadsPerUser
        };

        res.status(200).json(response);

    });


}
