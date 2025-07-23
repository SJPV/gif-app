import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

    // const onAddCategory = () => {
    //     setCategories( ["Bleach", ...categories] );
    // };

  return (
    <>
    
        {/* title */}
        <h1>GitExpertApp</h1>

        {/* input */}
        <AddCategory setCategories={setCategories} />        

        {/* List Items (Gifs) */} 
        {/* <button onClick={onAddCategory}>Agregar</button> */}
        <ol>
            {
                categories.map( (category) => {
                    {/* Gif Item */}
                    return <li key={category}>{category}</li>
                } )
            }
        </ol>
            
    </>
  )
}

