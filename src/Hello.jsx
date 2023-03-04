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


    render(){
     
        return(
            <div>
            <div>hello world</div>
            <h2>{this.state.data.toLocaleTimeString()}</h2>
            <button onClick={()=>{alert(this.state.data.toLocaleTimeString())}}>点击</button>
            <ul>{this.state.users.map((item,index)=>(<li key={index}>{item.uname}</li>))}</ul>
        </div>
        )
    }

}
export default Hello