const action = {
  type: ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY,
  payload: "",
};

const actionCreator = (payload) => {
  return {
    type: ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY,
    payload: payload,
  };
};

// dispatch(action);
dispatch(actionCreator(10));

const actionThunk =(url)=> (dispatch) => { 
  fetch(url)
  .then(data=>{
    console.log(data)
    dispatch(actionCreator(data));

  })
  .catch(err => {
    console.log(err)
  })
 
}

actionThunk();