import React from "react";
import { RiMenu5Fill } from "react-icons/ri"
import './Header.scss';

const Header = ({ onClick }: { onClick: () => void }) => {
    return (
        <header className="header">
            <a className="logo" href="#!">Thuc Huynh</a>
            <RiMenu5Fill size={25} onClick={onClick} />
        </header>
    )
}

export default Header;