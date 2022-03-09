import {Box, TextField} from "@mui/material";
import {Component} from "react";

export class Card extends Component<{ name: any }> {
    render() {
        let {name} = this.props;
        return (
            <Box sx={{width: 300, height:400, border: 2, margin: 2, display: 'flex'}}>
                <Box sx={{padding: 5, flexWrap: 'wrap'}}>
                    <img
                        src={'![](../../../../Desktop/107903581_276384840371459_3569789996061854001_n.jpg)'}
                        alt='szc'
                        loading="lazy"
                    />
                    <TextField sx={{marginTop: 5}} variant="outlined" value={name}/>
                </Box>
            </Box>
        )
    }
}