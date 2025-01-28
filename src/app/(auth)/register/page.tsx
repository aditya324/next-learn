"use client";

import { register } from "@/app/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function Register() {
  const [state, action, ispending] = useActionState(register, undefined);
  console.log(state);
  return (
    <div className="container w-1/2">
      <h1 className="title">Register</h1>
      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="email">Email</label>
        <input type="text" name="email" defaultValue={state?.email} />
          {state?.error?.email && (
            <p className="text-red-500">{state.error.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          {state?.error?.password?.map((err) => {
            return (
              <ul>
                <p className="text-red-500">{err}</p>
              </ul>
            );
          })}
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" name="confirm-password" />
          {state?.error?.confirmPassword && (
            <p className="text-red-500">{state.error.confirmPassword}</p>
          )}
        </div>

        <div className=" flex items-end gap-4">
          <button disabled={ispending} className="btn-primary">
            {ispending ? "loading" : "register"}
          </button>
          <Link className="text-link" href="/login">
            login
          </Link>
        </div>
      </form>
    </div>
  );
}
