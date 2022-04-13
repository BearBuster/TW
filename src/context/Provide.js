import React, {createContext, useReducer} from "react";
import authInitialStates from "./initialsStates/authInitialStates";
import TrackNumberStates from "./initialsStates/TrackNumberStates";
import auth from "./reducers/auth";
import trackNumber from "./reducers/track.js";

export const GlobalContext = createContext({});

const GlobalProvide = ({children}) => {

    const [authState, authDispatch] = useReducer(auth , authInitialStates)
    const [trackNumbersState, trackNumbersDispatch] = useReducer(trackNumber, TrackNumberStates);
    return (
        <GlobalContext.Provider value={{authState, trackNumbersState, authDispatch, trackNumbersDispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvide;