import React, {useState} from "react";
import {Table} from './Table';
import User from '../user.json';

export const Home = () => {

    const [query, setQuery] = useState("");
   

    
    const search = (data) => {
        
        return data.filter((users)=>
            users.nama.toLowerCase().includes(query) ||
            users.Posisi.toLowerCase().includes(query) ||
            users.Departemen.toLowerCase().includes(query)
            );   
    };
    
    return (
        
        <div className="form-container">
            <h3>Data Karyawan</h3>
            <input type="text" placeholder="Search" className="search" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <Table data= {search(User)}/>
        </div>
        
      );
    
}