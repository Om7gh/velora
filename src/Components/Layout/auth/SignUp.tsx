import { Logo } from "@/Components/shared/Logo";
import { SignUpMethod } from "./LoginForm";

export function LoginForm() {
  return (
    <div className="flex flex-col  justify-center h-full gap-10 w-full">
      <div className="m-auto">
        <Logo />
      </div>
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-semibold">Velora Welcome You !</h2>
        <span className="text-sm ">Sign Up from here</span>
      </div>
      <div className="space-y-4">
        <SignUpMethod method="google" link="/api/auth/google" />
        <SignUpMethod method="github" link="/api/auth/github" />
        <SignUpMethod method="discord" link="/api/auth/discord" />
      </div>
    </div>
  );
}
