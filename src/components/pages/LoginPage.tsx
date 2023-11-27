import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"
import { Header } from "../common/Header"

export const LoginPage = () => {
  return (
    <><Header text="login" /><div className=" flex w-1/2 m-auto gap-2 flex-col p-8">
      <Input placeholder={"שם משתמש"} />
      <Input type={"password"} placeholder={"סיסמה"} />
      <Button>{"המשך"}</Button>
    </div></>)
}
