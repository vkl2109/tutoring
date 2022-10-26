import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewApptForm from '../components/appts/NewApptForm';
import { db } from '../components/firebase/firebase-config.js';
import { collection, addDoc } from  'firebase/firestore';

function SchedulePage () {
    const navigate = useNavigate();
    const collectionRef = collection(db, "test");
    function addApptHandler (apptData) {
        const addAppt = async () => {
            await addDoc (collectionRef, apptData);
        };
        addAppt ();
        navigate("/Dashboard", { replace: true });
    }


    return (
        <section>
            <h1>Scheduling</h1>
            <NewApptForm onAddAppt={addApptHandler}/>
        </section>
    );
}

export default SchedulePage;