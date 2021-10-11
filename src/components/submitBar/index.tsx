import React from 'react';
import styled from 'styled-components'
import { Button } from '../common/Buttons';
import {MdKeyboardBackspace} from 'react-icons/md'

function SubmitBar() {
    return (
        <Container className='submit-bar'>
            <SubmitBarContainer>
                <Button className='cancel'>
                    <MdKeyboardBackspace/>
                    <span>
                        나가기
                    </span>
                </Button>
                <ButtonsContainer>
                    <Button className='temp'>임시저장</Button>
                    <Button className='upload'>업로드</Button>
                </ButtonsContainer>
            </SubmitBarContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    border-top:1px solid ${props => props.theme.lightGray};
    padding: 10px 0;
`

const SubmitBarContainer = styled.div`
    width: 90%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .cancel{
        color:${props => props.theme.darkGray};
        span{
            margin-left: 7px;
        }
    }
`

const ButtonsContainer = styled.div`
    .temp{
        background:${props => props.theme.lightGray}
    }
    .upload{
        background:${props => props.theme.primary};
        color:#ffffff;
        margin-left: 8px;
    }
`

export default SubmitBar;