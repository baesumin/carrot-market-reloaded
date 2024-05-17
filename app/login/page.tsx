"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { login } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function Login() {
  const [state, action] = useFormState(login, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          name="email"
          type="email"
          required
          placeholder="Email"
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          required
          placeholder="Password"
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <Button text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
