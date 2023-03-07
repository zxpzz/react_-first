import React from "react"
// function Hello(test){
//     return(
//         <div>
//             <div>hello world</div>
                // <h2>{this.name.toLocaleTimeString()}</h2>
//             <button onClick={()=>{alert(test.name.toLocaleTimeString())}}>点击</button>
            
//         </div>
        
//     )
// }

// 将函数组件转换成 class 组件


function Test(username){
    return(
        <div>hello test {username.name.map((users)=>(<li key={users.id}>{users.age}</li>))}</div>
    )
}

function Warn(){
    if(!status){
        return null
    }else{
        return <h2 style={sty}>Warn</h2>
    }
}

const sty={
    color:'red'
}

function Status1(){
    
    if(status){
        return <h2>true</h2>
    }else{
        return <h2>false</h2>
    }
}


let status=false

class Hello extends React.Component{


    constructor(props){
        super(props)
        this.state={
            data:new Date(),
            users:[]
        }
    }

    componentDidMount(){
        this.time=setInterval(
            ()=>this.tick(),1000
        ),
        this.fet()
    }

    fet(){
        fetch("http://www.zxpzz.top:8081/users/")
        .then(u=>u.json())
        .then(u=>{
            console.log(u)
            // this.state.users=u
            this.setState({
               users:u
            },()=>{
                // 调用 setState 时，可能会出现异步更新的情况，
                // 因此不能在调用 setState 后立即读取新的状态值。
                // 如果需要读取新的状态值，可以使用 setState 的回调函数
                console.log(this.state.users);
            })
        })
    }

    componentWillUnmount(){
        clearInterval(this.time)
    }

    tick(){
        this.setState({
            data:new Date()
        })
    }

    del(id,e){
        alert(id)
        alert(e)

    }


    del01(id){
        alert(id)
        
    }

    status1(){
        status=!status
    }




    render(){
     const test01=1
        return(
            <div>

                
                <div>hello world</div>
                <h2>{this.state.data.toLocaleTimeString()}</h2>
                <button onClick={()=>{alert(this.state.data.toLocaleTimeString())}}>点击</button>
                <ul>{this.state.users.map((item,index)=>(<li key={index}>
                    {item.uname}
                    {/* React 的事件对象 e 会被作为第二个参数传递。
                    如果通过箭头函数的方式，事件对象必须显式的进行传递，
                    而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。 */}
                    <button onClick={(e)=>{this.del(item.id,e)}}>test</button>
                    <button onClick={this.del01.bind(this,item.id)}>test01</button>
                </li>))}</ul>

                {/* 条件渲染 */}
                <button onClick={this.status1.bind(this)}>更改</button>
                <Status1/>
                <div>
                    {
                        test01>0&&<h2>test01 world</h2>
                    } 
                    {
                        test01>0?'大于零':'小于零'
                    }
                </div>
                <Warn />
               
                {/* 组件可以选择把它的 state 作为 props 向下传递到它的子组件中 */}
                <Test name={this.state.users} />
            </div>
        )
    }

}
export default Hello 