import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (value) => {
        if(categories.includes(value)) return;
        setCategories( [value, ...categories] );
    };

  return (
    <>
    
        {/* title */}
        <h1>GitExpertApp</h1>

        {/* input */}
        <AddCategory 
            // setCategories={setCategories}
            onNewCategory={(value) => onAddCategory(value)}
        />        

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

