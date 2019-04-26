import React from "react";
import './idCard.css';
export default ({ character }) => {
  const {
    name,
    birth_year,
    skin_color,
    mass,
    height,
    hair_color,
    eye_color,
    gender,
    films,
    starships,
    vehicles,
    homeworld,
    species
  } = character;

  return (

    <div className="characterBox">

      <h2>{name}</h2>

      <section className="characterInfo">

        <div className="characterTraits">

        <h3>Gender </h3> <h4>{gender}</h4> 

        <h3>Height </h3> <h4>{height}</h4>

        <h3>Mass </h3> <h4>{mass}</h4>     

        <h3>Birth Year </h3> <h4>{birth_year}</h4>

        <h3>Eye Color </h3> <h4>{eye_color}</h4>

        <h3>Hair Color </h3> <h4>{hair_color}</h4>

        <h3>Skin Color </h3> <h4>{skin_color}</h4>

        <h3>Homeworld </h3> { homeworld.name ? <h4>{homeworld.name}</h4> : 0}

        <h3>Species </h3> { species.name ? <h4>{species.name}</h4> : 0}        

        <h3>Starships </h3> { starships.length ? <h4>{starships.length}</h4> : 0 }

        <h3>Vehicles </h3> { vehicles.length ? <h4>{vehicles.length}</h4> : 0 }

        </div>

        { films.length && films[0].title ?
            
            <div className="movies">

                <h3>Movies</h3>

                <div className="movies">

                { films.map((film, person) => (
                    <h4>{film.title}</h4>
                )) }

                </div>

            </div>
            
            : null }
        
        
      </section>
    </div>
  );
};