import axios from 'axios'
function handleExpandedRows(expandedIndex:number, tabId:number, url:string, method:string){
  return function (dispatch) {
    axios.get(url)
      .then((response) => dispatch({
        type: "FETCH__REQUEST",
        payload: {
          expandedIndex,
          tabId,
          url,
          method,
          response : response.data
        }


      })).catch((response) => dispatch({
        type:"FETCH_FAIL",
        payload: {
          expandedIndex,
          tabId,
          url,
          method,
          response : response.data
        }
      }));
  }
}

export default {
  'FETCH__REQUEST': handleExpandedRows // the action to proxy and the new action to call
};