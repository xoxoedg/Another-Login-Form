import {Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


function Login() {

    const paperStyle = {padding: 20, height: "70vh", width: 300, margin: "20px auto"};
    const avatarStyle = {backgroundColor: "#3bb774d9"};
    const buttonStyle = {margin: "8px 0"};

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <Typography><h2> Sign In</h2></Typography>
                </Grid>
                <TextField variant="standard" label="Username" placeholder="Enter Username" fullWidth required/>
                <TextField variant="standard" label="Password" placeholder="Enter Password" fullWidth required
                           type="password"/>
                <FormControlLabel control={<Checkbox
                    name="checkB"
                    color="primary"/>
                } label="Remember me"
                />
                <Button style={buttonStyle} variant="contained" type="submit" color="primary" fullWidth>Sign In</Button>
              <Typography>
                  <Link sx={{
                      '&:hover' : {
                          cursor: "pointer"
                      }
                  }}>Forgot Password</Link>
              </Typography>
                <Typography>
                    Do you have any account?
                    <Link sx={{
                        '&:hover' : {
                            cursor: "pointer"
                        }
                    }} >Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;