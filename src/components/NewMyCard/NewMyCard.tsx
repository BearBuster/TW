import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    IconButton,
    Input,
    TextareaAutosize, TextField,
    Typography
} from "@mui/material";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import {blueGrey, orange, red} from "@mui/material/colors";
import {useState} from "react";
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux";
import {cardReducer} from "../../redux/CardSlice";


const NewMyCard = ({title, id, description}: { title: string, id: number, description: string }) => {
    const card = useSelector((state: RootState) => state.card)
    const dispatch = useDispatch()

    return(
        <Card sx={{
            width: "300px",
            paddingTop: "20px",
            margin: "10px",
            boxShadow: `0px 5px 10px 1px;`,
        }}>
            <CardContent >
                <Typography sx={{marginBottom: "10px" }} textAlign="center" color={"secondary"}>
                    <TextField value={card.title} sx={{width: "80%"}} label={"Title"} focused  />
                </Typography>
                <Typography color={"primary.light"} textAlign="center">
                    <TextareaAutosize onChange={ e => dispatch(cardReducer({type: "CHANGE_TITLE", payload: e.target.value}))} value={card.description} style={{ width: "80%", height: "250px", padding: "0px" }} />
                </Typography>

            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <AddCircleOutlineSharpIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default NewMyCard;