import './Navegation.css'
import {  Link } from "react-router-dom"
import React from 'react'


const Navegation =()=>{
   return(
        
                <nav className=' navegation'>
                         <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Alunos">Cadastro de Alunos</Link></li>
                            <li><Link to="/Docentes">Cadastro de Docentes</Link></li>
                            <li><Link to="/Cursos">Cadastro de Cursos</Link></li>
                            <li><Link to="/Disciplinas">Cadastro de Disciplinas</Link></li>
                         </ul>
                 </nav>
   
   )
}
export default Navegation