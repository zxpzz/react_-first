
function Hello(test){
    return(
        <div>
            <div>hello world</div>
            <button onClick={()=>{alert(test.name)}}>点击</button>
            
        </div>
        
    )
}
export default Hello