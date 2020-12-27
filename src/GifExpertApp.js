import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Pubch']);
//    const headleAdd = () =>  setCategories(['HunterXHunter',...categories]);
    // const headleAdd = () =>  setCategories( cats => [...cats, 'HunterXHunter'] );
    
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr /> 
            {/* <button onClick={ headleAdd }>Agregar</button> */}
            {
                <ol>
                    { 
                        categories.map( category => (
                            <GifGrid 
                                key = { category }
                                category= { category } 
                            />
                        )) 
                    }
                </ol>                
            }

        </>
    )
}

export default GifExpertApp;