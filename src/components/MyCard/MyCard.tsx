import {Box, Button, Card, CardActions, CardContent, Checkbox, IconButton, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import {blueGrey, orange, red} from "@mui/material/colors";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux";


const MyCard = ({title = '', id = 0, description = '', status = 0}: { title: string, id: number, description: string, status: number }) => {
    const card = useSelector((state: RootState) => state.card)
    const dispatch = useDispatch()

    return(
        <Card sx={{
            width: "300px",
            padding: "0 4px",
            margin: "10px",
            boxShadow: `0px 5px 10px 1px;`,
        }}
        >
            <CardActions disableSpacing sx={{display: "none" }}>
                <IconButton>
                    <CloseIcon color={"secondary"} />
                </IconButton>
            </CardActions>
            <CardContent>
                <Typography sx={{textDecoration: 'underline', fontWeight: "bold" }} variant={"h6"} textAlign="center" color={"secondary"}>
                    {card.title}
                </Typography>
                <Typography variant={"subtitle1"}  color={"primary.light"} textAlign="center">
                    {card.description}
                </Typography>

            </CardContent>
            <CardActions disableSpacing>

                <Box sx={{flexGrow: 1}}>
                    <IconButton aria-label="Remove from List" >
                        <EditIcon color={"secondary"}></EditIcon>
                    </IconButton>
                </Box>
                <Box>
                    <Checkbox sx={{
                        color: orange[500],
                        '&.Mui-checked': {
                            color: orange[500],
                        },
                    }} aria-label="Hello" />
                </Box>
            </CardActions>
        </Card>
    )
 }

 export default MyCard;