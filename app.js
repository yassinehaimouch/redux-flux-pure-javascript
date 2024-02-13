const counter = document.getElementById("counter");
const incBTN = document.querySelector("#inc");
const decBTN = document.querySelector("#dec");

let initialState = {
  count: 0,
};

const listeners = [];

const updateview = () => {
  counter.innerText = initialState.count;
};

const reducer = (state, action) => {
  switch (action) {
    case "INC":
      return Object.assign({}, state, { count: state.count + 1 });
    case "DEC":
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      state;
  }
};

const dispatch = (action) => {
  const newState = reducer(initialState, action);
  if (newState !== initialState) {
    initialState = newState;
    listeners.forEach((listener) => listener());
  }
};

const subscribe = (callBackFn) => {
  listeners.push(callBackFn);
};

incBTN.onclick = () => dispatch("INC");
decBTN.onclick = () => dispatch("DEC");

updateview();
subscribe(updateview);
