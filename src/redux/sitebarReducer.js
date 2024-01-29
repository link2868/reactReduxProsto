import user1 from "../img/avatar/girl-ava02.png";
import user2 from "../img/avatar/boy-ava01.png";
import user3 from "../img/avatar/boy-ava03.png";

const initialState = {
  friends: [
    { id: 1, name: "Lina", avatar: user1 },
    { id: 2, name: "Vadik", avatar: user2 },
    { id: 3, name: "Misha", avatar: user3 },
  ],
};

const sitebarReducer = (state = initialState, action) => {
  return state;
};

export default sitebarReducer;
