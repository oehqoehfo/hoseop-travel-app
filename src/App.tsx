import React, { SyntheticEvent,useRef } from "react";
//main application
 const App=()=>{
    return (
    <section id="App">
        <SearchPanel/>
        <footer>

        </footer>
    </section>
    )
}
export default App;

const SearchPanel=()=>{
    const searchElementRef = useRef(null as any);
    const search =(e:SyntheticEvent)=>{
        const searchValue = searchElementRef.current.value;
        if(typeof searchValue!=="string"){
            alert("only text allowed");
        }else{
            regexValidate(searchValue)
            ?alert("No special characters are allowed")
            :fetch("//localhost:3000/test",{
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
                <input type="text" placeholder="SEARCH" ref={searchElementRef}/>
            </form>
        </section>
    )
}