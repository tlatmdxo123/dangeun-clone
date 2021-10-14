import React,{useState,useEffect,useCallback,CSSProperties} from 'react';
import {useTransition,animated,AnimatedProps,useSpringRef} from '@react-spring/web'
import styled from 'styled-components'

function ImageSlide({imageLists,title}:{imageLists:string[],title:string}) {
    const [index,set] = useState(0)
    const pages:((props:AnimatedProps<{style:CSSProperties}>)=>React.ReactElement)[] = imageLists.map((url,index) => {
        const imgComponent = ({style}:AnimatedProps<{style:CSSProperties}>) => <animated.div className='item' style={{...style}}><img src={url} alt={`${index+1}번째 ${title}이미지`}/></animated.div>
        return imgComponent
    })

    const onClick = useCallback(() => set((state) => (state+1)%imageLists.length),[])
    const transRef = useSpringRef()
    const transitions = useTransition(index,{
        ref:transRef,
        keys:null,
        from:{transform:'translate3d(100%,0,0)'},
        enter:{transform:'translate3d(0%,0,0)'},
        leave:{transform:'translate3d(-100%,0,0)'}
    }) 

    useEffect(() => {
        transRef.start()
    },[index])
    
    return (
        <Frame>
            <Container onClick={onClick}>
                {transitions((style,i) => {
                    const Page = pages[i]
                    return <Page style={style}/>
                })}
            </Container>
            <IndexContainer>
                {Array.from({length:imageLists.length}).map((_,curIndex) => {
                    return <li key={curIndex}><IndexDot className={curIndex==index ? 'active' :''}/></li>
                })}
            </IndexContainer>
        </Frame>
        
    );
}

const Frame = styled.div`
    width: 100%;
    height: 500px;
    overflow: hidden; 
    position: relative;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    float:left;
    .item{
        width: 100%;
        cursor: pointer;
        position: absolute;
        img{
            width: 100%;
        }
    }
`

const IndexContainer = styled.ul`
    display: flex;
    position: absolute;
    bottom:0;
    left: 50%;
    transform: translate(-50%,0);
    li{
        margin-right: 3px;
    }
    li:last-child {
        margin-right:0;
    }
`

const IndexDot = styled.button`
    width: 8px;
    height: 8px;
    padding: 0;
    border-radius: 50%;
    background: rgba(255,255,255,20%);
    &.active{
        background: rgba(255,255,255,60%);
    }
`
export default ImageSlide;