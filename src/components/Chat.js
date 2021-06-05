import { Avatar, Button, Container, Grid, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import firebase from 'firebase/app'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '../index.js'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Loader from './Loader.js'

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messageText, setMessageText] = useState("")
    const [messages, loading] = useCollectionData(
        firestore.collection("messages").orderBy('createdAt')
    )
    debugger

    if(loading){ 
        return <Loader/> 
    }

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: messageText,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessageText("")
    }

    return <Container>
            <Grid container
                style={{height: window.innerHeight -150, marginTop: '40px', marginBottom: '40px'}}
                justify={'center'}
            >
                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
                    {messages.map(message => (
                    <div key={message.uid} 
                        style={{margin: 10, 
                            border: user.uid === message.uid ? "2px solid green" : "2 px dashed red", 
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5
                            }}>
                        <Grid container>
                            <Avatar src={message.photoURL}/>
                            <div>{message.displayName}</div>
                        </Grid>
                        <div>{message.text}</div>
                    </div>))}
                </div>
                <Grid container direction={'column'} alignItems={'flex-end'} style={{width: '80%'}}>
                    <TextField value={messageText} onChange={e => setMessageText(e.target.value)} fullWidth rowsMax={2} style={{marginTop: '10px'}} variant={'outlined'} />
                    <Button onClick={sendMessage} variant={'outlined'} style={{marginTop: '10px'}}>Send</Button>
                </Grid>
            </Grid>
        </Container>
}

export default Chat