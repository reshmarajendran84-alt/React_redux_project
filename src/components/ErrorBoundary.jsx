import React from "react";
class ErrorBOundary extends React.Component{
    constructor(props){
        super(props);
        this.state ={hasError:false};
    }
    //this lifecylce method catches errors in children
    static getDerivedStateFromError(error){
        return{hasError:true};
    }
    componentDidCatch(error,info){
        console.log("error caught by ErrorBoundary :",error,info);
    }
    render(){
        if(this.state.hasError){
            return(
                <div><h2>Something went Wrong.</h2>
                <p>We're sorry,but this part of the app failed to load.</p></div>
            );
        }
        return this.props.children;

    }
}
export default ErrorBOundary;