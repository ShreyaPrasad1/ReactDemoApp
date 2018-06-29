import axios from 'axios';
import {BaseUrl} from '../../modules/ServiceUrl'

export default (file , callback) => {
    const formData = new FormData();
    formData.append('fileUpload', file);

    return dispatch => {
        axios.put(BaseUrl.RestUrl + "/fileUpload", formData)
            .then(response => {
                callback(response.data);
            }).catch(error => {
             console.log("*****  "+error)
        });
    }
}