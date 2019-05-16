import React from 'react';
import doors from '../utils/door';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            doors:doors,
            result:"",
            key:this.getKey(doors),
            err:"",
            win:0,
            lose:0,
            disabled:0
                    }
        this.tryKey = this.tryKey.bind(this);
    }
    
    getKey(){
        return doors[Math.floor(Math.random()*Math.floor(doors.length))].key;
    }

    tryKey(item){        
      item.unlock(this.getKey())
      .then(data=>this.setState({result:data+" Unlocked",win:this.state.win+1}))
      .catch(err=>this.setState({err:err,lose:this.state.lose+1}));
      this.setState({
          disabled:1
      })
    }

    render(){
        return(
            <div>
                <div></div>
                {this.state.disabled?<button onClick={()=>{this.setState({err:"",result:"",disabled:0})}}>Play Again</button>:""}
                <div className="door_container">
                {this.state.doors.map((item)=>{
                   return ( 
                    <div className="door" key={item.name}
                    style={this.state.disabled?{cursor:"not-allowed"}:{}}
                     onClick={this.state.disabled?null:()=>{this.tryKey(item)}}
                     >
                        <img  alt="door" src={process.env.PUBLIC_URL+"/static/images/door.jpg"} width="300px" height="350px"/>
                        <div >{item.name}</div>
                    </div>
                   )
                })}
                </div>
                {this.state.result?(<div className="result">{this.state.result}</div>):""}
                {this.state.err?(<div className="error">{this.state.err}</div>):""}
                
               
                <div className="">
                    <span>Win :{this.state.win}</span>
                    <span> Lost : {this.state.lose}</span>
                </div>
            </div>
        )
    }
}

export default Home;