// 'use client';
//
// import React, {createContext} from "react";
//
// const ThemeContext = createContext({})
//
// export default function ThemeProvider({children}){
//     return (
//         <ThemeContext.Provider value="dark">
//             {children}
//         </ThemeContext.Provider>
//     )
// }

import React, { createContext, useState } from "react";

// Створіть контекст
const MyContext = createContext();

// Створіть провайдер контексту
export function MyContextProvider({ children }) {
    const [buttonClicked, setButtonClicked] = useState(false);

    // Функція для обробки кліку по кнопці
    const handleButtonClick = () => {
        setButtonClicked(true);
    };

    return (
        <MyContext.Provider value={{ buttonClicked, handleButtonClick }}>
            {children}
        </MyContext.Provider>
    );
}
