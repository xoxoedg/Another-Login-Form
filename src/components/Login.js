import {Avatar, Grid, Paper} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


function Login() {

    const paperStyle = {padding:20, height:"70vh", width:300, margin:"20px auto"}
    const avatarStyle = {backgroundColor: "#3bb774d9"}

    return (
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2> Sign In</h2>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default Login;