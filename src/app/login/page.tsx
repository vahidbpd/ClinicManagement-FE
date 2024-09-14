import LoginForm from "./loginForm";
import { ScanEye } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <LoginForm />
      <div className="bg-black w-1/2 h-full flex justify-center items-center">
        <ScanEye size={350} color="white"/>
      </div>
    </div>
  );
};

export default LoginPage;
