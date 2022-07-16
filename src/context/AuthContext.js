import creatDataContext from "./creatDataContext";

const authReducer = (state,action) => {
    switch(action.type){
        default:
            return state;
    }
};

const signup = (disptach) => {
    return ({email,password}) => {
        //make api request to sign up with that email


        //if we signup , modify out state and say that are we authenticated


        //if signup fails we probobably need to reflect an error message somewhere

    };
};

const signin = (disptach) => {
    return ({email,password}) => {
        //somehow signout if possible



    };
};

const signout = (disptach) => {
    return ({email,password}) => {
        //try to signin
        //handle succes by updating state
        //handle failur by showing error message 

        
    };
};

export const {Provider,Context} = creatDataContext(
    authReducer,
    {signin,signout,signup},
    {isSignedIn:false}
);