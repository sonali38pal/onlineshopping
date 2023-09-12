import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
   const [categoriesMap, setCategoriesMap] =  useState({});

   useEffect( ()=> {
    async function categoryMap(){
        const categoryMap = await getCategoriesAndDocuments('categories');
        setCategoriesMap(categoryMap);
    }
    categoryMap();
   },[]);
   
   const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>
        {children}
        </CategoriesContext.Provider>
    )
}