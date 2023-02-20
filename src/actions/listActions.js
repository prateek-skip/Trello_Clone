
import { CONSTANTS } from './index';

export const addList =(title) => {
    return {
        type:CONSTANTS.ad,
        payload: title
    }
};