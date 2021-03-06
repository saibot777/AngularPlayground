import { Thread } from './../../shared/models/thread.model';


import {dbThreads} from "../db-data";
import * as _ from 'lodash';

export function findDbThreadsPerUser(participantId: number) {

    const allThreads: Thread[] = _.values<Thread>(dbThreads);


    return _.filter(allThreads, thread =>
        _.includes( _.keys(thread.participants), participantId.toString() )
    )

}