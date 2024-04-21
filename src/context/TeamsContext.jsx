'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../../firebase';
import { setDoc, doc, getDocs, collection } from 'firebase/firestore';
import { blankNewTeamForm } from '@/constants';

const TeamContext = createContext();

export function TeamsContextProvider({ children }) {
    const [heroes, setHeroes] = useState([]);
    const [values, setValues] = useState(blankNewTeamForm);
    const heroesCollectionRef = collection(db, 'heroes');
    const teamCollectionsRef = collection(db, 'teams');

    const createTeam = async (values) => {
        await addDoc(teamCollectionsRef, values);
        setValues(blankNewTeamForm);
    };

    const handleHeroStatusChange = () => {
        const heroRef = doc(db, 'heroes', hero.id);
        updateDoc(heroRef, { available: !available });
        setAvailable(!available);
    };

    useEffect(() => {
        const getHeroes = async () => {
            try {
                const data = await getDocs(heroesCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setHeroes(filteredData);
            } catch (error) {
                console.error(error);
            }
        };

        getHeroes();
    }, []);

    return (
        <TeamContext.Provider
            value={{
                heroes,
                setHeroes,
                values,
                setValues,
                createTeam,
                handleHeroStatusChange,
            }}
        >
            {children}
        </TeamContext.Provider>
    );
}

export function useTeamsContext() {
    return useContext(TeamContext);
}
