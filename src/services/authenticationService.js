export const login = (username, password) => {
    if(!username || !password){
        return { status: 404, errorString: 'Vui lòng thêm tài khoản hay mật khẩu'}
    }
    if(username.toLowerCase() === 'admin'){
        if(password ==='123456'){
            return { status: 200, errorString: "Đăng nhập thành công"}
        }else{
            return { status: 404, errorString: "Tài khoản hoặc mật khẩu không đúng"};
        }
    }
    return { status: 404, errorString: 'Tài khoản hoặc mật khẩu không đúng'}
};