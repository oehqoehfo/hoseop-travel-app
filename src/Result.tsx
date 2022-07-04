import React from 'react';
interface resultProps{
    result:Array<Object>
}
const Result=({result}:resultProps)=>{
    return(
        <div>
            {result.map((item,index)=>{
                console.log(item);
                return <div key={"item-"+item+index}>{item[1]['placeName']}</div>
            })}
        </div>
    )
}
export default Result;