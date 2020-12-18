import React, { useState,useEffect } from 'react';
import './lists.style.scss';

const Lists = (props) => {
    const [pokemonData, setPokemonData] = useState([])
    const {data} = props

    

    useEffect(() => {
        let isSubscribed = true
            fetch(data.url)
            .then(res => res.json())
            .then(data => {
                if (isSubscribed) {
                setPokemonData(data)
                }
            })
        return () => isSubscribed = false
    }, [data.url])

    return(
        <div className='box'>
            <div className='image' style={{backgroundImage: 
                `url(
                    ${
                        pokemonData.sprites ? pokemonData.sprites.front_default : 'https://lh3.googleusercontent.com/proxy/P-CXbDSBWU7HjmcPhkuBy7VfeZ2P7_cle4uoYm92si55yyXxdlTP18TKHcNhxGVNpCcc-x__7-5soub2_8YQKpIXWpl8gvIgMYIsatudvUuGsy_bbKEMo_04YWgvIyIuiw'
                    }
                )`
            }}
            />
            <h4>{pokemonData.name}</h4>
        </div>
    )
}

export default Lists;