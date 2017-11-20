export default function loading(state = false, action){
  switch(action.type) {
    case 'LOADING':
      return true;
    case 'FINISH_LOADING':
      return false;
    default:
      return state;
  }
}