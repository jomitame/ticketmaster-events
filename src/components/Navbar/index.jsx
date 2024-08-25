import { useState, useEffect, forwardRef } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {

    const [search, setSearch] = useState('');

    useEffect(()=>{
        console.log('onSearch cambio');
    }, [onSearch]);

    useEffect(()=>{
        console.log('Componente Listo');
    }, []);

    useEffect(()=>{
        console.log('search cambio');
    }, [search]);

    const handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        }
    };

    return (
        <div ref={ref}>
            <p>Mi Boletera</p>
            <input
                placeholder="Busca tu evento favorito"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}
            />  
        </div>
    );
});

Navbar.displayName = Navbar;

export default Navbar;