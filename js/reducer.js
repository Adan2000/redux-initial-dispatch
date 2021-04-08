let state; 

function changeState(state = { count: 0 }, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

dispatch({ type: '@@INIT' }) 

//at the top we declare but do not assign our state, so it starts off undefined

//at the bottom we dispatch our innit action,
//this calls our dispatch and passes an initial action 

//dispatch calls changeState reducer

//changeState executes, passing in state and action 

//action is defined but state isn't, so really we are
//passing undefined as state into our changeState reducer

//changeState(undefined, { type: '@@INIT' }) 

//and inside the changeState, it will set the state to 0 

// in the next line render is called and displays the 0 in the HTML 

