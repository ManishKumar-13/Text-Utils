import { useReducer } from "react";

const initalState = {
  text: "",
  copied: false,
  wordCount: 0,
  charCount: 0,
  readingTime: 0,
};

const reducerFun = (state, action) => {
  switch (action.type) {
    case "SET_TEXT": {
      // const updateWordCount = action.payload
      //   .split(/\s+/)
      //   .filter((word) => word.length > 0).length;
      // const updateWordCount = state.text.trim()
      //   ? state.text.trim().split(/\s+/).length
      //   : 0;

      const updateWordCount = action.payload
        .split(" ")
        .filter((word) => word.trim().length > 0).length;
      return {
        ...state,
        text: action.payload,
        wordCount: updateWordCount,
        charCount: state.text.length,
        readingTime: 0.008 * updateWordCount,
      };
    }
    // console.log(action);

    case "UPPERCASE":
      return {
        ...state,
        text: state.text.toUpperCase(),
      };

    case "LOWERCASE":
      return {
        ...state,
        text: state.text.toLowerCase(),
      };

    case "CLEAR_TEXT":
      return initalState;

    case "COPY_TO_CLIPBOARD":
      navigator.clipboard.writeText(state.text);
      return {
        ...state,
        text: state.text,
      };

    case "REMOVE_EXTRA_SPACES": {
      return {
        ...state,
        text: state.text.replace(/\s+/g, " "),
      };
    }
    default:
      return state;
  }
};

function MainBody() {
  const [state, dispatch] = useReducer(reducerFun, initalState);

  return (
    <div className="flex flex-col gap-5 justify-center items-center py-16">
      <div>
        <h1 className="text-3xl font-bold pb-5">
          TextUtils - Word Counter, Character Counter, Remove Extra Space{" "}
        </h1>
        <textarea
          name="text"
          cols={120}
          rows={5}
          className="border-2 rounded-lg p-2"
          placeholder="Enter Text"
          value={state.text}
          onChange={(e) => {
            dispatch({ type: "SET_TEXT", payload: e.target.value });
          }}
        ></textarea>

        <div className="flex gap-5 justify-center py-5">
          <button
            className="bg-[#5C9CF9] p-3 rounded-xl font-semibold"
            onClick={() => dispatch({ type: "UPPERCASE" })}
          >
            UPPERCASE
          </button>
          <button
            className="bg-[#5cf969] p-3 rounded-xl font-semibold"
            onClick={() => dispatch({ type: "LOWERCASE" })}
          >
            LOWERCASE
          </button>
          <button
            className="bg-[#f6f95c] p-3 rounded-xl font-semibold"
            onClick={() => dispatch({ type: "CLEAR_TEXT" })}
          >
            CLEAR TEXT
          </button>
          <button
            className="bg-[#f96e5c] p-3 rounded-xl font-semibold"
            onClick={() => dispatch({ type: "COPY_TO_CLIPBOARD" })}
          >
            COPY TO CLIPBOARD
          </button>
          <button
            className="bg-[#7e5cf9] p-3 rounded-xl font-semibold"
            onClick={() => dispatch({ type: "REMOVE_EXTRA_SPACES" })}
          >
            REMOVE EXTRA SPACES
          </button>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold">Summary of your text</h1>
          <div className="flex flex-col justify-start gap-5 py-5">
            <p className="italic text-xl font-semibold">
              Number of words :{" "}
              <span className="font-bold ">{state.wordCount}</span>
            </p>
            <p className="italic text-xl font-semibold">
              Number of Characters :{" "}
              <span className="font-bold ">{state.charCount}</span>
            </p>
            <p className="italic text-xl font-semibold">
              Reading Time :{" "}
              <span className="font-bold ">{state.readingTime}</span>
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-semibold text-center py-5">
            Preview Summary
          </h1>
          <div className="border-2 p-2 h-[200px] rounded-lg  bg-[#fff]">
            <p>{state.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;