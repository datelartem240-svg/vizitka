import {useState} from 'react';

export default function ThemeSwitcher() {
    
    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    };

    const [theme, setTheme] = useState(() => getCookie('theme') || 'light');

    if (theme) document.documentElement.dataset.theme = theme;

    const toggleTheme = () => {

        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme == 'dark' ? 'light' : 'dark'
        setTheme(newTheme);
        
        htmlElement.setAttribute("data-theme", newTheme);
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');

        if(themeColorMeta){
            themeColorMeta.setAttribute(
                "content",
                newTheme === "light" ? "#fff5fa" : "#12000d"
            );
        };

        document.cookie = `theme=${newTheme}; path=/; max-age=31536000; samesite=lax`;
    };

    return<>
        <button onClick={toggleTheme}>
            {theme == 'light' ? '☾' : '☀︎'}
        </button>
    </>
};