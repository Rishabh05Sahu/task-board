"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

const validatePassword = (password: string) => {
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  return {
    valid: minLength && hasUpper && hasLower && hasNumber && hasSpecial,
    minLength,
    hasUpper,
    hasLower,
    hasNumber,
    hasSpecial,
  };
};

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validation = validatePassword(password);

  const handleSignup = async () => {
    setError("");

    if (!email || !password || !confirm) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validation.valid) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      router.push("/login");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[color:var(--surface)] border border-[color:var(--border)] rounded-2xl p-8 shadow-sm">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create your account
          </h1>
          <p className="text-sm text-[color:var(--text-muted)] mt-2">
            Start organizing your tasks
          </p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e:any) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={password}
                onChange={(e:any) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-xs text-[color:var(--text-muted)]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Live Validation Checklist */}
            <div className="text-xs space-y-1 mt-2">
              <p className={validation.minLength ? "text-green-600" : "text-[color:var(--text-muted)]"}>
                • At least 8 characters
              </p>
              <p className={validation.hasUpper ? "text-green-600" : "text-[color:var(--text-muted)]"}>
                • One uppercase letter
              </p>
              <p className={validation.hasLower ? "text-green-600" : "text-[color:var(--text-muted)]"}>
                • One lowercase letter
              </p>
              <p className={validation.hasNumber ? "text-green-600" : "text-[color:var(--text-muted)]"}>
                • One number
              </p>
              <p className={validation.hasSpecial ? "text-green-600" : "text-[color:var(--text-muted)]"}>
                • One special character
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Confirm password</label>
            <Input
              type="password"
              placeholder="Re-enter your password"
              value={confirm}
              onChange={(e:any) => setConfirm(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
              {error}
            </div>
          )}

          <Button
            onClick={handleSignup}
            disabled={loading}
            className="w-full"
          >
            {loading ? "Creating account..." : "Create account"}
          </Button>

          <p className="text-sm text-center text-[color:var(--text-muted)]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[color:var(--accent)] font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
