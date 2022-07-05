import React from 'react';
interface resultProps{
    result:Array<Object>
}
const Result=({result}:resultProps)=>{
    return(
        <div id="Result" className="flex w-100 justify-around">
            {result.map((item,index)=>{
                console.log(item);
                //return /<div className="card" key={"item-"+item+index}>{item[1]['placeName']}</div>
                return (
                    <div key={"item-"+item+index} className="item w-1/4 text-center text-white">
                        <div>
                            <p>{item[1]['placeName']}</p>
                        </div>
                    </div> 
                )   
            })}
        </div>
    )
}
export default Result;