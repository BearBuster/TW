import {Box, Button} from "@mui/material"
import {Card} from "./Card";
import {cards} from "../Variables/Cards";
import React, {useState} from "react";


export const CardList = () => {
    let [count_of_click, set_count_of_click] = useState(cards)
    let [c, w] = useState(2)
    return(
        <Box>
            <Button onClick={() => {set_count_of_click([...count_of_click, `12312312312x`])}}>Add</Button>
            <Box sx={{display:'flex',flexWrap: 'wrap'}}>
                <Card  name={''}/>
                {count_of_click.map((card) => (
                    <Card name={card}/>
                ))}
            </Box>
            <Button onClick={() => {w(c+=1)}}>qwe</Button>
        </Box>
    )
}