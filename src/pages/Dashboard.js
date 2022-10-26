import React from 'react';
import { useState, useEffect } from 'react';
import ApptList from '../components/appts/ApptList';
import { db } from '../components/firebase/firebase-config.js';
import { collection, getDocs } from  'firebase/firestore';

function DashboardPage () {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedAppts, setLoadedAppts] = useState([]);
    const collectionRef = collection(db, "test");
    useEffect(() => {
       setIsLoading(true);
        const getUsers = async () => {
            const data = await getDocs(collectionRef);
            setLoadedAppts(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        }
            getUsers();
            setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
        
    return (
    <section>
        <h1>Appointments</h1>
        <ApptList appts={loadedAppts}/>
    </section>
    );
}

export default DashboardPage;