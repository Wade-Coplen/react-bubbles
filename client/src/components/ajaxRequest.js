import { axiosWithAuth } from '../../path/to/axiosAuth.js';
// etc
axiosWithAuth().get('/api/colors')
    .then(data => data/* do something with the data */);