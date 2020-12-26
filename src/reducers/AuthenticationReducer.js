export const reducer = (preState, action) => {
    switch (action.type){
        case "LOGIN_SUCCESSED":
            return { ...preState, isAuthenticated: true, token: action.data.token, 
                        userInfo: action.data.userInfo, message: action.data.message 
                }
        case "LOGIN_FAILED":
            return { ...preState, isAuthenticated: false, message: action.data.message}
        default: 
            throw new Error("abc");        
    }
}