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

//switch returns whatever state was passed into the changeState
//we call dispatch at the bottom and pass it any type that way 
//it will render 0 on the page 

//we set our initial state in our reducer

