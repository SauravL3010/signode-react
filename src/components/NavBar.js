import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Box from '@material-ui/core/Box';

function NavBar() {
    const trigger = useScrollTrigger()
    return (

        <div>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar>
                    <Toolbar>
                        <Typography variant='h6'><Box fontWeight="fontWeightBold">SIGNODE</Box></Typography>
                    </Toolbar>
                </AppBar>
            </Slide>
            <Toolbar />
        </div>
    )
}

export default NavBar
