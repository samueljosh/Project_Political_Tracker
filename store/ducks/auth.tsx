// Action Types
export const Types = {
  LOGIN: "auth/LOGIN",
  LOGOUT: "auth/LOGOUT",
};

// Reducer
const initialState = {
  isLogged: false,
  token: null,
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return null;
    case Types.LOGOUT:
      return null;
    default:
      return state;
  }
}

// Action Creators

export function login(userName, password) {
  return {
    type: Types.LOGIN,
    payload: {
      userName,
      password,
    },
  };
}

export function logout() {
  return {
    type: Types.LOGOUT,
  };
}
