import React from 'react';
import styled from 'styled-components'
import {MdCancel,MdOutlineAddAPhoto} from 'react-icons/md'

function PhotoInput() {
    const imageLists = Array.from({length:10}).map((_) => {
        return "https://dnvefa72aowie.cloudfront.net/origin/article/202110/8B65A551506A9E9B9412357C3E32BBE6FF09C8BF9FBD132F59AF7DCC85632085.jpg?q=82&s=300x300&t=crop";
    })
    return (
        <ImageForm action='#' method='get'>
            
            <div className="mutiple-container">
                <label htmlFor='input-mutiple-image' className='label box'>
                    <MdOutlineAddAPhoto className='icon'/>
                    <span className='count'>{imageLists.length}/10</span>
                </label>
                <input type="file" id='input-mutiple-image' className='image_input' multiple/>
                {imageLists.map((image,index) => (
                    <div className="image box" key={index}>
                        <img src={image}/>
                        <button className='close'><MdCancel/></button>
                    </div>
                ))}
                
            </div>
        </ImageForm>
    );
}

const ImageForm = styled.form`
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