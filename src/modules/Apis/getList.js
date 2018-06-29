import axios from 'axios';
import {BaseUrl} from '../../modules/ServiceUrl'

export default (callback) => {

    return dispatch => {
        axios({
            method: 'get',
            url: BaseUrl.RestUrl + '/list',
            crossDomain: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
                'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
                'Content-Type': "application/json",
                "Authorization": "No Auth"

            }

        })
            .then(response => {
                var data = response;
                callback(data);
                dispatch({
                    type: "GET_SUCCESS",
                    getUserSuccess: data
                });
            }).catch(error => {
            dispatch({type: "GET_REJECTED", getUserFailure: error});
        });

    }
}