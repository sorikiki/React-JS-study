// ✅ Preparing actions payloads : prepare callback functions 💫
//❓ What if we needed to dispatch the same action from different components, or the logic for preparing the payload is complicated? 
// ✔ The "prepare callback" function can take multiple arguments, generate random values like unique IDs, and run whatever other synchronous logic is needed to decide what values go into the action object.
// ✔ It should then return an object with the payload field inside.
// ✔ The return object may also contain a meta field, which can be used to add extra descriptive values to the action, and an error field, which should be a boolean indicating whether this action represents some kind of an error.
/*
    // write actions creators by hand...
    function postAdded(title, content) {
    const id = nanoid()
    return {
        type: 'posts/postAdded',
        payload: { id, title, content }
    }
    }

    // prepare callback function
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    }
    // other reducers here...
*/
// Note: Reducers should never calculate random values so always generate an unique ID or other random variables and put it in the action object.


// ✅ Extra reducers 
// extraReducers allows createSlice to respond to other action types besides the types it has generated.
// Like reducers, extraReducers can be an object containing Redux case reducer functions. 
// However, the keys should be other Redux string action type constants, and createSlice will not auto-generate action types or action creators for reducers included in this parameter.
// As with reducers, these case reducers will also be passed to createReducer and may "mutate" their state safely.
// If two fields from reducers and extraReducers happen to end up with the same action type string, the function from reducers will be used to handle that action type.


// ✅ createAction
//  It takes an action type and returns an action creator for that type. 
// The action creator can be called either without arguments or with a payload to be attached to the action.
// Also, the action creator overrides toString() so that the action type becomes its string representation.
/*
  const increment = createAction('counter/increment')

  let action = increment()
  // { type: 'counter/increment' }
    
  action = increment(3)
  // returns { type: 'counter/increment', payload: 3 }
    
  console.log(increment.toString())
  // 'counter/increment'
    
  console.log(`The action type is: ${increment}`)
  // 'The action type is: counter/increment'
*/