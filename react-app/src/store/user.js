// const GET_USERS = "GET /users";
// const GET_USER = "GET /users/:userId";

// export function loadUsers(users) {
//   return {
//     type: GET_USERS,
//     users,
//   };
// }

// export function loadSingleUser(user) {
//   return {
//     type: GET_USER,
//     user,
//   };
// }


// export const thunkGetUsers = () => async (dispatch) => {
//   const response = await fetch("/api/users");

//   if (response.ok) {
//     const users = await response.json();
//     dispatch(loadUsers(users));
//   }
// };

// export const thunkGetSingleUser = (id) => async (dispatch) => {
//   const response = await fetch(`/api/users/${id}`);

//   if (response.ok) {
//     const user = await response.json();
//     dispatch(loadSingleUser(user));
//   }
// };

// const initialState = {
//   users: {},
//   singleUser: {},
// };

// const usersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_USERS: {
//       const users = action.users.users;
//       let newState = { ...state };
//       users.forEach((user) => (newState.users[user.id] = user));
//       return newState;
//     }
//     case GET_USER: {
//       const newState = { ...state };
//       newState.singleUser = action.user;
//       return newState;
//     }
//     default:
//       return state;
//   }
// };

// export default usersReducer;
