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
        console.log(searchElementRef.current.value);
        e.preventDefault();
    }
    return(
        <section className="text-center absoluteCenter">
            <h1>Wanna travel somewhere?</h1>
            <form action="/" method="GET" onSubmit={e=>search(e)}>
                <input type="text" placeholder="SEARCH" ref={searchElementRef}/>
            </form>
        </section>
    )
}