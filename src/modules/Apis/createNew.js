import axios from 'axios';
import {BaseUrl} from '../../modules/ServiceUrl'

export default (data, callback) => {

    return dispatch => {
        axios({
            method: 'post',
            url: BaseUrl.RestUrl + '/register',
            headers: {

                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': '*'

            },
            data:data
        })
            .then(response => {
                console.log("success   "+response)
                var data = response;
                callback(data);
                dispatch({
                    type: "GET_USER_SUCCESS",
                    getUserSuccess: data
                });
            }).catch(error => {
            console.log("failed   "+error)
            dispatch({ type: "GET_USER_REJECTED", getUserFailure: error });
        });
    }
}