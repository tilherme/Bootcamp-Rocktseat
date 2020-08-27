import React, { useState, useEffect } from 'react';
import Header from './components/Header';
 
import api from './services/api';
import './App.css';



function App() {
    const [projects, setprojects] =useState([]);
    //  useState retorna um array com 2 posições
    //1. variável com seu valor inicial
    // 2. função para atualizar esse valor
     useEffect(()=>{
         api.get('projects').then(response=>{
      setprojects(response.data)
         });
     },[])

  async function handleAddProject(){
      
       // setprojects([...projects, `Novo projeto ${Date.now()}`]);
     const response =await   api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Guilherme"
        });
        const project = response.data;
        setprojects([...projects,project])
    
    }
    return(
        <>
   
        <Header title ="rojects" />
    <ul>{projects.map(projects=> <li key={projects.id}>{projects.title}</li>)}</ul>
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
      </>
    );
}
export default App;
//yarn webpack-dev-server --mode development