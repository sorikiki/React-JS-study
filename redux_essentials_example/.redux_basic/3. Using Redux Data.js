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