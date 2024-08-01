import { useReducer } from "react";

const initialState = {
  count1: 0,
  count2: 0,
  count3: 0,
  total: 0,
};

const reducerFun = (state, action) => {
  switch (action.type) {
    case "INCREMENT1": {
      return {
        ...state,
        count1: state.count1 + 1,
        total: state.total + 100,
      };
    }

    case "DECREMENT1": {
      if (state.count1 <= 0) {
        return {
          ...state,
          count1: 0,
        };
      }
      return {
        ...state,
        count1: state.count1 - 1,
        total: state.total - 100,
      };
    }

    case "INCREMENT2": {
      return {
        ...state,
        count2: state.count2 + 1,
        total: state.total + 200,
      };
    }

    case "DECREMENT2": {
      if (state.count2 <= 0) {
        return {
          ...state,
          count2: 0,
        };
      }
      return {
        ...state,
        count2: state.count2 - 1,
        total: state.total - 200,
      };
    }

    case "INCREMENT3": {
      return {
        ...state,
        count3: state.count3 + 1,
        total: state.total + 300,
      };
    }

    case "DECREMENT3": {
      if (state.count3 <= 0) {
        return {
          ...state,
          count3: 0,
        };
      }
      return {
        ...state,
        count3: state.count3 - 1,
        total: state.total - 300,
      };
    }
  }
};

function Home() {
  const [state, dispatch] = useReducer(reducerFun, initialState);

  const decremenVal = () => {
    dispatch({ type: "DECREMENT1" });
  };

  const incrementVal = () => {
    dispatch({ type: "INCREMENT1" });
  };

  return (
    <div className="flex justify-center gap-10 my-10">
      <div className="w-[35%] p-5 rounded-xl shadow-xl bg-[#f5f5f5]">
        <h1 className="text-2xl text-center font-mono font-bold">Products</h1>
        <div className="flex justify-between gap-10 border-2 p-5 m-5">
          <p>Product-1</p>
          <p>$100</p>
          <div className="flex gap-5  text-xl">
            <button onClick={decremenVal}>-</button>
            <button>{state.count1}</button>
            <button onClick={incrementVal}>+</button>
          </div>
        </div>

        <div className="flex justify-between gap-10 border-2 p-5 m-5">
          <p>Product-2</p>
          <p>$200</p>
          <div className="flex gap-5  text-xl">
            <button onClick={() => dispatch({ type: "DECREMENT2" })}>-</button>
            <button>{state.count2}</button>
            <button onClick={() => dispatch({ type: "INCREMENT2" })}>+</button>
          </div>
        </div>

        <div className="flex justify-between gap-10 border-2 p-5 m-5">
          <p>Product-3</p>
          <p>$300</p>
          <div className="flex gap-5  text-xl">
            <button onClick={() => dispatch({ type: "DECREMENT3" })}>-</button>
            <button>{state.count3}</button>
            <button onClick={() => dispatch({ type: "INCREMENT3" })}>+</button>
          </div>
        </div>
      </div>

      <div className="w-[30%] rounded-xl shadow-xl bg-[#f5f5f5] p-10 flex  flex-col justify-center items-center">
        <div>
          {state.count1 > 0 && (
            <div className="flex border-2 w-[300px] justify-around m-3 mt-9 p-4">
              <h1>Product - 1 : </h1>
              <p>
                {" "}
                {state.count1} x {state.count1 * 100}
              </p>
            </div>
          )}
        </div>
        <div>
          {state.count2 > 0 && (
            <div className="flex border-2 w-[300px] justify-around m-3 p-4">
              <h1>Product - 2 : </h1>
              <p>
                {" "}
                {state.count2} x {state.count2 * 200}
              </p>
            </div>
          )}
        </div>

        <div>
          {state.count3 > 0 && (
            <div className="flex border-2 w-[300px] justify-around m-3 p-4">
              <h1>Product - 3 : </h1>
              <p>
                {state.count3} x {state.count3 * 300}
              </p>
            </div>
          )}
        </div>

        <div>
          {state.total > 0 && (
            <p className="text-center text-xl font-bold">
              Total : {state.total}
            </p>
          )}
        </div>

        <div>
          {state.count1 === 0 && state.count2 === 0 && state.count3 === 0 && (
            <p className="text-center font-mono font-extrabold text-xl">
              Cart is Empty
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;