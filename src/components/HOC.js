import React,{useState} from 'react'

export default function HOC({content, reverse, from}) {

    const [searchValue, setSearchValue] = useState("");
    const [data, setdata] = useState(content);
    const [newdata, setNewdata] = useState([]);
    
    const searchHandle = (e) =>{
        let temp = e.target.value;
        let array=[];

        if(from === 'books'){
            content.map((data,index) => {
                let str = data.volumeInfo.title;
                str = str.toLowerCase();
                temp = temp.toLowerCase();
                var flag = str.match(temp);
                if(flag!==null){
                    array.push(data);
                }
            })
        }
        else if(from === "cars"){
            content.map((data,index) => {
                let str = data.Make;
                str = str.toLowerCase();
                temp = temp.toLowerCase();
                var flag = str.match(temp);
                if(flag!==null){
                    array.push(data);
                }
            })
        }
        reverse(array);
        setNewdata(array);
        setSearchValue(temp);
    }


    return (
        <div>
            <input type="text" className="searchInput" name="search" value={searchValue} onChange={searchHandle} placeholder="Search Here"/>
            
        </div>
    )
}
