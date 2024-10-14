import styles from'./Login.module.css'

const Login = () => {
  return (
    <div className={styles.main}>
        <div className={styles.login_container}>
            <h1>Login</h1>
            <form>
              <input type="text" placeholder='Username . . '/>
              <input type="text" placeholder='Phone . . '/>
              <input type="password" placeholder='Password . . '/>
             
              <button>SIGN IN</button>
            </form>
        </div>
    </div>
  )
}

export default Login
