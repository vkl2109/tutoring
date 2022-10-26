import React from 'react';
import Card from '../ui/Card';
import { useNavigate } from 'react-router-dom';
import classes from './ApptItem.module.css';
import { db } from '../firebase/firebase-config.js';
import { doc, deleteDoc } from  'firebase/firestore';

function ApptItem (props) {
    const navigate = useNavigate();
    const deleteAppt = async (id) => {
        const currentAppt = doc(db, "test", id);
        await deleteDoc (currentAppt);
        navigate("/", { replace: true });
    };
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <h3>{props.name}</h3>
                    <h3>{props.subject}</h3>
                    <email>{props.email}</email>
                    <p>{props.number}</p>
                    <date>{props.date}</date>
                    <br></br>
                    <time>{props.time}</time>
                </div>
                <div className={classes.actions}>
                    <button onClick = {() => deleteAppt(props.id)}>CANCEL</button>
                </div>
            </Card>
            
        </li>
    );
}
export default ApptItem;