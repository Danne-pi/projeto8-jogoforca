import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./myWrapper";

export default function Tips() {

  let wordShow = localStorage.getItem('palavra')
  let wordActual = wordShow.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let wordActArr = []
  let wordShowArr = []
  let wordGetter = []
  let maxPoints = []

  function WordTransform(){
    wordShow = localStorage.getItem('palavra')
    wordActual = wordShow.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (let i = 0; i < wordActual.length; i++) {
      wordActArr.push(wordActual[i])
      wordShowArr.push(wordShow[i])
      const thisObject = {word: wordActual[i], obscure: true}
      wordGetter.push(thisObject)
    }
    maxPoints = [...new Set(wordActual)];
    setMaxpoint(maxPoints.length)
    return wordGetter
  }
  const {clicked, hooked, setHooked, point, setPoint, setMaxpoint} = useContext(UserContext);
  const [wordget, setWordget] = useState(WordTransform() )
  
  function WriteInOclusion(){
    return wordget.map((item, index)=> (<div
    key={index}
    >{item.obscure ? '_' : wordShowArr[index]}</div>))
  }
  useEffect(() => {
    let arrCopy = []
    for (let i = 0; i < wordget.length; i++) {
      let thisWord
      if (wordget[i].word.includes(clicked[clicked.length-1])) {
          thisWord = {word: wordget[i].word, obscure: false}
          arrCopy.push(thisWord)
      } else {
        if(wordget[i].obscure === false){
          thisWord = {word: wordget[i].word, obscure: false}
          arrCopy.push(thisWord)

        }
        else{
          thisWord = {word: wordget[i].word, obscure: true}
          arrCopy.push(thisWord)
        }
      }
    }
    console.log(wordActArr.includes(clicked[clicked.length-1]))
    if(wordActArr.includes(clicked[clicked.length-1])){
      setPoint(point+1)
    }
    else{
      setHooked(hooked+1)
    }
    setWordget([...arrCopy])
    console.log(arrCopy)
  }, [clicked]);

  return (
    <ThisTips>
      <div className="word">
        <WriteInOclusion />
      </div>
    </ThisTips>
    );
  }
  
  const ThisTips = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 39vw;
    height: 60vh;
    background-color: aqua;
    position: absolute;
    top: 5vh;
    right: 5vw;

    .word{
      font-size: 28px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }


  `