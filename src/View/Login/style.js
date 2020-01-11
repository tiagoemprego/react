import styled from "styled-components"

export const Div = styled.div`
    input{
        background: #202020;
        border: 0;
        border-bottom: 2px solid #ffffff;
        border-radius: 0;
        color: #ffffff;
        padding-left: 8px;
        outline: none;
        width: 100%;
        padding-bottom: 12px;
        
        ::placeholder {
            color: #ffffff;
            opacity: 1; /* Firefox */
        }
        
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #ffffff;
        }
        
        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #ffffff;
        }
        
        &:focus{
            background-color: #202020;
            outline: none;
        }
        
        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus, 
        &:-webkit-autofill:active  {
            -webkit-box-shadow: 0 0 0 30px white inset !important;
        }
    }
    
    
    .form-group{
        position: relative;
        padding-top: 8px;
        
        label{
            position: absolute;
            transition: all .2s ease-in-out;
            left: 5px;
            
            &.active{
                position: absolute;
                font-size: 12px;
                margin-top: -15px;
                transition: all .2s ease-in-out;
            }
        }
    }
    
    .form-label{
        color: #ffffff;
    }
    
    .form-control:focus{
        color: #ffffff;
        border-color: #ffffff;
        outline: 0;
        box-shadow: none;
    }
`;
