import {Box} from "@mui/material";
import MyCard from "../MyCard/MyCard";
import {number, string} from "mobx-state-tree/dist/types/primitives";
import NewMyCard from "../NewMyCard/NewMyCard";

interface Card {
    title: string,
    id: number,
    description: string
}

const CardList = ({cards}: { cards: Card[] }) => {

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            maxHeight: "990px",
            rowGap: "10px",
            columnGap: "30px",
            alignContent: "flex-start"
        }}>
            <NewMyCard key={0}  id={0} title={""} description={""} />
            {cards.map((card) => (
                <MyCard key={card.id}  id={card.id} title={card.title} description={card.description} />
            ))}
        </Box>
    )
}

export default CardList;