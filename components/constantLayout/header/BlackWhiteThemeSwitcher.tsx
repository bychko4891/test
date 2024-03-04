'use client'

import React, {useState, useEffect} from 'react';

const BlackWhiteThemeSwitcher = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    if (typeof window === 'undefined') {
        return null;
    }

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        document.cookie = `theme=${newTheme}; max-age=${60 * 60 * 24 * 365}; path=/`;
        setTheme(newTheme);
    };

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [theme, setTheme] = useState(() => {
        const themeCookie = document.cookie.split('; ').find(row => row.startsWith('theme='));
        if (!themeCookie) {
            return prefersDarkMode ? "dark" : (localStorage.getItem("theme") || "light");
        } else {
            return themeCookie ? themeCookie.split('=')[1] : (localStorage.getItem("theme") || "light");
        }
    });
    //
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            {domLoaded && (
                <li>
                    <a href="#" className="form-check form-switch theme-switch btn btn-ghost btn-icon rounded-circle mb-0 ">
                        <input className="form-check-input" type="checkbox" role="switch" checked={theme === "dark"}
                               onChange={switchTheme}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </a>
                </li>
            )}
         </>
    );
}
export default BlackWhiteThemeSwitcher;