import {Box} from "@mui/material";
import CardList from "../CardList/CardList";
import {number, string} from "mobx-state-tree/dist/types/primitives";
import {blueGrey} from "@mui/material/colors";

export interface State {
    cards: Card[]
}

export interface Card {
    title: string,
    id: number,
    description: string
}


const Content = ({state}: { state: State }) =>{
    return(
        <Box sx={{padding: "10px", backgroundColor: blueGrey[700]}}>
            <CardList cards={state.cards} />
        </Box>
    )
}

export default  Content;
