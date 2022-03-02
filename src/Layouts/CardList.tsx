import { Box } from "@mui/material"

const cards = ['FirstCard', 'SecondCard', 'ThirdCard']

export const CardList = () => {
    return(
        <Box>
            {cards.map((card) => (
                <Box>
                    card
                </Box>
            ))}
        </Box>
    )
}