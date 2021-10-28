import React from 'react';
import styled from 'styled-components'

type UserInfo = {
    name:string,
    address:string,
    image:string
}

function UserInfo({name,address,image}:UserInfo) {
    return (
        <UserInfoContainer>
            <Profile>
                <img src={image} alt={`${name}유저 프로필 이미지`} />
            </Profile>
            <Info>
                <span className='name'>{name}</span>
                <span className='address'>{address}</span>
            </Info>
        </UserInfoContainer>
    );
}

const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 27px 0;
    border-bottom: 1px solid ${props => props.theme.lightGray};
`

const Profile = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
    img{
        width: 100%;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color:${props => props.theme.textColorDarkGray};
    .name{
        font-weight: bold;
        margin-bottom: 2px;
    }
`
export default UserInfo;