import { createGlobalStyle } from "styled-components";

 export const  GlobalStyle=createGlobalStyle`
 
*{
    padding: none;
    margin: 0 auto;
    list-style-type: none;
    text-decoration: none;
    color:white;
    box-sizing:border-box;
}

body{
    
    background-color: black;
}

html{
  cursor: none;
   
}


/* medial Queries */

@media only screen and (max-width: 600px){
  /* header */
 
 .header{
  .nav-mobile{
    width: 100%;
  }
       .contact-details{
        display: none;
       }
      }
     /* what i do */

     .my-expertise{
      display: flex;
      flex-direction: column;
     
     }

     /* contact */
     .contact-page{
        .contact-form{
          form{
           
          .name{
            input{
              width:170px;
            }

            
          }
         
          
        }
        }
     }

     /* footer */
    
}

/* ipad view */

@media only screen and (max-width: 762px){
   .header{
       .contact-details{
        display: none;
       }
   }
}

`

