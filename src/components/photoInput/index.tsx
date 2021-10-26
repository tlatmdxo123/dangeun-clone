import React from 'react';
import styled from 'styled-components'
import {MdCancel,MdOutlineAddAPhoto} from 'react-icons/md'

function PhotoInput({imageLists,onChange,removeFile,name}:{imageLists:string[],onChange:(e:React.ChangeEvent<HTMLInputElement>) => void,removeFile:(target:number) => void,name:string}) {
    return (
        <ImageFormContainer>
            <div className="mutiple-container">
                <label htmlFor='input-mutiple-image' className='label box'>
                    <MdOutlineAddAPhoto className='icon'/>
                    <span className='count'>{imageLists.length}/10</span>
                </label>
                <input name={name} type="file" id='input-mutiple-image' className='image_input' onChange={(e) => onChange(e)} multiple/>
                {imageLists.map((image,index) => (
                    <div className="image box" key={index}>
                        <img src={image}/>
                        <button className='close' onClick={()=>removeFile(index)}><MdCancel/></button>
                    </div>
                ))}
                
            </div>
        </ImageFormContainer>
    );
}

const ImageFormContainer = styled.div`
    .mutiple-container{
        display: flex;
        flex-wrap: wrap;
    }
    .image_input{
        position: absolute; 
        width: 1px; 
        height: 1px; 
        padding: 0; 
        margin: -1px; 
        overflow: hidden; 
        clip:rect(0,0,0,0); 
        border: 0;
    }
    .label{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 60px;
        height: 60px;
        box-shadow:0 0 0 2px ${props => props.theme.lightMdGray} inset;
        border-radius: 5px;
        color:${props => props.theme.textColorLight};
        font-weight: bold;
        cursor: pointer;
    }
    .icon{
        font-size: 26px;
        margin-bottom: 4px;
    }
    .image{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 60px;
        height: 60px;
        overflow: hidden;
        border-radius: 5px;
        img{
            width: 100%;
        }
    }
    .close{
        position: absolute;
        right: 0;
        top: 0;
        z-index: 999;
        font-size: 11px;
        padding:0;
        cursor: pointer;
    }
    .box{
        margin-right: 8px;
        margin-bottom: 4px;
    }
`

export default PhotoInput;