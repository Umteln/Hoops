'use client'
import { JERSEYS } from '@/constants';
import React from 'react'




const TeamSelect = () => {
const { heroes } = useTeamsContext();
  return (
      <div>
         < div>
                            <label>Select a Team</label>
                            <select
                                id='jerseyStyle'
                                name='jerseyStyle'
                                required
                                handleChange={handleChange}
                            >
                                {heroes.map((hero) => (
                                    <option key={hero.id}>
                                        Team {hero.hero}
                                    </option>
                                ))}
                            </select>
                        </div>
          <div>
            {JERSEYS.filter((jersey)=> jersey.style === )}
          </div>
      </div>
  );
}

export default TeamSelect