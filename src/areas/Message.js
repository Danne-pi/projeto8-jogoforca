import styled from "styled-components";


export default function MyMessage(props){

    if(props.myType === true){
        return <ThisWinMessage>
                    <div className="box">
                        Parabéns! você acertou!<br/><br/><br/><br/>
                        <button onClick={()=>document.location.reload()}>Novamente</button>                          
                    </div>                    
               </ThisWinMessage>
    }
    else{
        return <ThisLoseMessage>
                    <div className="box">
                        Que pena! você errou!<br/><br/><br/><br/>
                        <button onClick={()=>document.location.reload()}>Novamente</button>                           
                    </div>                           
               </ThisLoseMessage>
    }
}

const ThisWinMessage = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(25,25,25,0.6);
    z-index: 99;

    .box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 18px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #5EFF33;
        width: 300px;
        height: 250px;
        z-index: 100;
        text-align: center;

        button{
            padding: 12px;
            border-radius: 12px;
            border: none;
            color: #5EFF33;
        }
    }
`
const ThisLoseMessage = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(25,25,25,0.6);
    z-index: 99;

    .box{
        padding: 20px;
        word-wrap: wrap;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 18px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #FF3333;
        width: 300px;
        height: 250px;
        z-index: 100;
        text-align: center;
        color: white;

        button{
            padding: 12px;
            border-radius: 12px;
            border: none;
            color: #FF3333;
        }
    }
`