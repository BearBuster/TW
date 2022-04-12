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


const NewMyCard = ({title, id, description}: { title: string, id: number, description: string }) => {
    return(
        <Card sx={{
            width: "300px",
            paddingTop: "20px",
            margin: "10px",
            boxShadow: `0px 5px 10px 1px;`,
        }}
        >
            <CardContent >
                <Typography sx={{marginBottom: "10px" }} textAlign="center" color={"secondary"}>
                    <TextField value={""} sx={{width: "80%"}} label={"Title"} focused  />
                </Typography>
                <Typography color={"primary.light"} textAlign="center">
                    <TextareaAutosize style={{ width: "80%", height: "250px", padding: "0px" }} />
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