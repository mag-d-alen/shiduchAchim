import { Button } from "../atoms/Button"
import { Input } from "../atoms/Input"

export const LoginPage = () => {
  return (
    <div className=" flex flex-col p-8">
      <Input placeholder={"שם משתמש"} />
      <Input type={"password"} placeholder={"סיסמה"} />
      <Button>{"המשך"}</Button>
    </div>)
}
