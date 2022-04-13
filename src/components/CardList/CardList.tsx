import {Box} from "@mui/material";
import MyCard from "../MyCard/MyCard";
import NewMyCard from "../NewMyCard/NewMyCard";
import {Card} from "../Content/Content";


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
            <MyCard key={1}  id={0} title={"qwe"} description={"qwe"} status={0} />
        </Box>
    )
}

export default CardList;