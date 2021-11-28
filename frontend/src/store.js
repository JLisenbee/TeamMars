import { createStore, action } from 'easy-peasy';

const store = createStore({
  userName: '',
  setuserName: action((state, payload) => {
    state.userName = payload
  }),
  
  userEmail: '',
  setuserEmail: action((state, payload) => {
    state.userEmail = payload
  }),

  userPicture:'',
  setuserPicture: action((state, payload) => {
    state.userPicture = payload
  }),

  userId:'',
  setuserId: action((state, payload) => {
    state.userId = payload
  }),
});

export default store