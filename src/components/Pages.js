import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCursourContext } from './CursourContext';
import styled from 'styled-components';
const Wrapper=styled.section`
        
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            row-gap: 2.5rem;
           position: fixed;
           top:40%;
           right:1rem;
           .active{
            background-color: rgb(32, 132, 219);
            border-radius: 50%;
            transition: 0.4s ease-in-out;
            mix-blend-mode: difference;
           }
            div{
               width:0.7rem;
               height: 0.7rem;
               background-color: white;
               border: 0.3rem solid white;
               border-radius: 50%;
               cursor: pointer;
                
             mix-blend-mode:color-burn;
               
            }
          
            
        
`;
const Pages = () => {
  const {MouseEnter,MouseLeave}=useCursourContext();

  return (
    <>
      <Wrapper>
        
            <NavLink className='page-link' to='/'><div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}></div></NavLink>
           <NavLink className='page-link' to='/whatido'><div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}></div></NavLink>
            <NavLink className='page-link' to='/about'><div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}></div></NavLink>
            <NavLink className='page-link' to='/portfolio'><div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}></div></NavLink>
           <NavLink className='page-link' to='/contact'><div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}></div></NavLink>
       
      </Wrapper>
    </>
  )
}

export default Pages
