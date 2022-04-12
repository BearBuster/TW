import {Box, colors} from "@mui/material";
import {Label, Spa} from "@mui/icons-material";

const Footer = () => {
    return(
        <Box sx={{
            backgroundColor: "primary.dark",
            width: "100%",
            color: "white",
            position: "relative",
            bottom: "0",
            height: "30px"
        }}
        >
            <Box sx={{textAlign: "center"}}>
                <Spa sx={{width: "33%,"}} />
                <span>Powered By Dimas</span>
            </Box>
        </Box>
    );
}

export default Footer;