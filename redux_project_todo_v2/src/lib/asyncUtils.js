export const createThunkPromise = (type, promiseCreators) => dispatch  => {
    const [ SUCCESS, ERROR ] = [`${type}_SUCCESS`, `${type}_ERROR`];
    
    // getPost에서 id를 받기에 param이 한 개 필요한 상황이다. 
    return (param) => async dispatch =>
    {
        dispatch({ type, param });
        try {
            const payload = promiseCreators(param);
            dispatch({ type: SUCCESS, payload });
        } catch(e) {
            dispatch({ type: ERROR, payload: e, error: true });
        }
    }
}

export const reducerUtils = {
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null,
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null,
    }),
    success: (payload) => ({
        loading: false,
        data: payload,
        error:null,
    }),
    error: (error) => ({
        loading: false,
        data: null,
        error: error,
    })
}

export const handleAsyncActions = (type, key) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
      switch (action.type) {
        case type:
          return {
            ...state,
            [key]: reducerUtils.loading()
          };
        case SUCCESS:
          return {
            ...state,
            [key]: reducerUtils.success(action.payload)
          };
        case ERROR:
          return {
            ...state,
            [key]: reducerUtils.error(action.payload)
          };
        default:
          return state;
      }
    };
  };