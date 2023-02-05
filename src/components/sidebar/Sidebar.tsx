import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai"
import './Sidebar.scss';

const Sidebar = ({ categories, onClick, defaultValue, className }: { categories: string[], onClick: any, defaultValue: string, className?: string }) => {
    const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.checked ? event.target.value : "";
        onClick(value);
    }
    return (
        <aside className={`sidebar ${className ?? ""}`}>
            <div className="title">
                <AiOutlineAppstore size={25} />
                <h3>Thể loại</h3>
            </div>
            <hr />
            <div className='categories'>
                {
                    categories.map((item, index) => (
                        <label className='categories-item' key={index}>
                            <input type="checkbox" checked={defaultValue === item} value={item} onChange={onChangeHandle} />
                            <p>{item}</p>
                        </label>
                    ))
                }
            </div>
        </aside>
    )
}

export default Sidebar;