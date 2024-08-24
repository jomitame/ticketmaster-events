import { useState } from "react";

const Navbar = ({ onSearch }) => {

    const [search, setSearch] = useState('');

    const handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        }
    };

    return (
        <div>
            <p>Mi Boletera</p>
            <input
                placeholder="Busca tu evento favorito"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}
            />  
        </div>
    );
};

export default Navbar;