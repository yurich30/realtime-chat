import { Box, Button, Container, Grid } from '@material-ui/core'
import React, {useContext} from 'react'
import {Context} from '../index.js'
import firebase from "firebase/app";

const Login = () => {
    const {auth} = useContext(Context)
    const login = async () => {
         const provider = new firebase.auth.GoogleAuthProvider()
         const { user } = await auth.signInWithPopup(provider)
        console.log(user);
    }
    return(
        <Container>
            <Grid container
                style={{height: window.innerHeight -50}}
                alignItems={'center'}
                justify={'center'}
            >
                <Grid style={{width: 400, background: 'lightgray', borderRadius: 10}}
                    container
                    alignItems={'center'}
                    direction={'column'}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'}>Sign in with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login