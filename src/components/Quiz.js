import React from 'react'
import '../css/Quiz.css'

export const Quiz = () => {
    const values=['A','B','C','D']
    const[isTestSubmitted,setIsTestSubmitted]=React.useState(false)
    const nameRef=React.useRef()
    const[name,setName]=React.useState('')
    const[total,setTotal]=React.useState(0)
    const    questions=[
        {
                    id:1,
                    que:'Do you know my Name ?',
                    options:['Viharika','Vihinika','Vihanika','Vithika'],
                    type:'S'
                },
                {
                    id:2,
                    que:'Whom i resemble most ',
                    options:['Mom','Dad'],
                    type:'S'

                },
                {
                    id:3,
                    que:' Who loves me more',
                    options:['Mom','Dad','Nani','Thata'],
                    type:'M'
                },
                {
                    id:4,
                    que:'Do you know my Nickname',
                    options:['Sweety','Honeyy','cherry','Cutie'],
                    type:'S',
                },
                {
                    id:5,
                    que:'How many months i am now',
                    options:['5','3','7','4'],
                    type:'S'
                },
                
            ]
            let ans={}
            const keys={1:'C',2:'B',3:'ABCD',4:'B',5:'D'}
            const fnChange=(eve)=>{
                const{name,type,value,checked}=eve.target
                console.log(name+type+value+checked);
                if(type=='checkbox')
             {
             let optionsStr=ans[name]
                        let optionsArr= optionsStr ? optionsStr.split('')  : []
                        if(checked){
                           optionsArr.push(value)
                        }else{
                          let index=optionsArr.indexOf(value)
                          optionsArr.splice(index,1)
                        }
                        ans[name]=optionsArr.sort().join('')
                     }else{
                        ans[name]=value
                       
             }
            }

            const fnSubmit=()=>{
                let nameVal=nameRef.current.value;
                setName(nameVal);
                setIsTestSubmitted(true)
            let marks=0
            Object.keys(ans).forEach((v,i)=>{
                if(ans[v]==keys[v])
                {
                    marks++
                   
                }
            })
             setTotal(marks)  ;
            

            }
  return (
    <div className="quizDiv">
         <p><label> Ur Name </label><input type="text" ref={nameRef} className="userName"/></p>
         <h5 className="quizHeading" hidden={isTestSubmitted}>Hello!!!! Just to check how much you know Meeeeee....</h5> 
       <h3 hidden={!isTestSubmitted} style={{'text-align':'center'}} className="quizHeading">Glad {name}!!!!! You got {total} mark(s). You knows Meeee </h3>
       <div hidden={!isTestSubmitted} >
       <img  style={{'text-align':'center'}} className="d-block w-50"   src="pic4.PNG"   alt="sticker"  />
       </div>
       
       <div className="questionsDiv" hidden={isTestSubmitted}>
        {
            questions.map((obj,index)=>{
                const{id,options,type,que}=obj
                return <div>
                    <h5 class="quizQue">{id}.{que}</h5>
                    {
                        options.map((val,ind)=>{
                            return <p className="quizOptions">
                                {
                                    type=='S'?
                                    <input type="radio" disabled={isTestSubmitted} value={values[ind]} name={id}  onClick={fnChange}/>
                                        :
                                        <input type="checkbox" disabled={isTestSubmitted} value={values[ind]} name={id}  onClick={fnChange}/>
                                }
                                {val}

                            </p>

                        })
                    }
                  
                    
                    </div>
            })
        }
          {!isTestSubmitted && <button type="Submit" onClick={fnSubmit}>Submit</button>}
       </div>
        
         </div>
  )
}
