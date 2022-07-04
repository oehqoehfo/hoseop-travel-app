import React, { SyntheticEvent,useRef,useState } from "react";
import Result from './Result';
//main application
 const App:React.FC=()=>{
    const [searchResult,setSearchResultState]=useState<Array<Object>>([]);
    const setSearchResultFunc = (value:Array<Object>)=>{
        console.log(value);
        setSearchResultState(value);
    }
    return (
    <section id="App">
        <SearchPanel setResult={setSearchResultFunc}/>
        {
            (searchResult===[])
            ?""
            :<Result result={searchResult}/>}
        <footer>
            
        </footer>
    </section>
    )
}
export default App;

/*type searchProps={
    setResult(value:Object):void
}*/
interface searchProps{
    setResult:(value: Array<Object>) => void
}
const SearchPanel=({setResult}:searchProps)=>{
    const searchElementRef = useRef(null as any);
    const search =(e:SyntheticEvent)=>{
        const searchValue = searchElementRef.current.value;
        if(typeof searchValue!=="string"){
            alert("only text allowed");
        }else{
            //validate user search input
            regexValidate(searchValue)
            ?alert("No special characters are allowed")
            //send request to server if no special character is found
            :fetch("//localhost:3000/city?name="+searchValue,{
                method:'GET',
                credentials:'include',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }).then((data:any)=>{
                return data.json();
            }).then(data=>{
                console.log(data);
                setResult(Object.entries(data));
            })
        }
        e.preventDefault();
    }
    const regexValidate = (value:string)=>{
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(value);
    }
    return(
        <section className="text-center absoluteCenter">
            <h1 className="text-white text-lg uppercase mb-5">Wanna travel somewhere?</h1>
            <form action="/" method="GET" onSubmit={e=>search(e)}>
                <input type="text" placeholder="SEARCH FOR CITY ex:London" ref={searchElementRef}/>
            </form>
        </section>
    )
}