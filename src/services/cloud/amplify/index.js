import { Amplify, Auth, Hub, Storage } from 'aws-amplify';
import * as CONFIG from '../../../config';

Amplify.configure({
    ...CONFIG.APP_CONFIG.AWS_AMPLIFY,
    Storage: {
        AWSS3: CONFIG.APP_CONFIG.AWS_AMPLIFY_EXTRA.AWSS3
    }
});

export {
    Amplify,
    Auth, 
    Hub,
    Storage
}