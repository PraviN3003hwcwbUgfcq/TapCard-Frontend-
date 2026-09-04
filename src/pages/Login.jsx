import { useState } from "react";
import api from "../api/axios";


function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function EyeIcon({ hidden }) {
  return hidden ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
      <path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c5 0 8.5 4.5 9.5 7-.4 1-1.3 2.5-2.8 3.8" />
      <path d="M6.2 6.2C4.3 7.5 3.1 9.3 2.5 12c1 2.5 4.5 7 9.5 7 1.2 0 2.3-.2 3.3-.6" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
    >
      <path d="m12 2 1.4 5.1L18 9l-4.6 1.9L12 16l-1.4-5.1L6 9l4.6-1.9L12 2Z" />
      <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
    </svg>
  );
}

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

 
const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    try {
        setLoading(true);

        console.log("Sending login:", {
            email,
            password
        });

        const response = await api.post(
    "/auth/login",
    {
        email: email.trim(),
        password
    }
);

        console.log("LOGIN RESPONSE:", response.data);

        if (response.data.success) {
            const token = response.data.token;

            if (!token) {
                alert("Login successful but token was not received.");
                return;
            }

            localStorage.setItem("token", token);

            window.location.href = "/dashboard";
        } else {
            alert(response.data.message || "Login failed");
        }

    } catch (error) {
        console.error("LOGIN ERROR:", error);

        console.log("Status:", error.response?.status);
        console.log("Response:", error.response?.data);

        alert(
            error.response?.data?.message ||
            "Unable to connect to server"
        );

    } finally {
        setLoading(false);
    }
};

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080914] text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_32%),radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.10),transparent_28%)]" />

        <div className="absolute left-[8%] top-[10%] h-72 w-72 animate-[pulse_5s_ease-in-out_infinite] rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="absolute bottom-[5%] right-[8%] h-80 w-80 animate-[pulse_7s_ease-in-out_infinite] rounded-full bg-purple-600/10 blur-3xl" />

        <div className="absolute left-[50%] top-[45%] h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute left-[15%] top-[25%] h-1 w-1 animate-ping rounded-full bg-indigo-400" />
      <div className="absolute right-[18%] top-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
      <div className="absolute bottom-[28%] left-[22%] h-1 w-1 animate-pulse rounded-full bg-blue-400" />
      <div className="absolute bottom-[18%] right-[25%] h-1 w-1 animate-ping rounded-full bg-indigo-300" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-[430px]">
          {/* Brand */}
          <div className="mb-8 flex flex-col items-center">
            <div className="group relative mb-4">
              <div className="absolute -inset-2 rounded-2xl bg-indigo-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-14 w-14 rotate-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] shadow-2xl backdrop-blur-xl transition duration-500 hover:rotate-3 hover:scale-105">
                <div className="relative h-8 w-9">
                  <span className="absolute left-0 top-0 h-4 w-4 border-l-[4px] border-t-[4px] border-red-400" />
                  <span className="absolute right-0 top-0 h-4 w-4 border-r-[4px] border-t-[4px] border-yellow-400" />
                  <span className="absolute bottom-0 left-0 h-4 w-4 border-b-[4px] border-l-[4px] border-green-400" />
                  <span className="absolute bottom-0 right-0 h-4 w-4 border-b-[4px] border-r-[4px] border-blue-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
                  TapCard
                </span>
              </h1>

              <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-indigo-300">
                CRM
              </span>
            </div>

            <p className="mt-1.5 text-xs text-slate-500">
              Business CRM Platform
            </p>
          </div>

          {/* Card */}
          <div className="relative">
            {/* Card glow */}
            <div className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-b from-indigo-500/30 via-purple-500/10 to-transparent opacity-70 blur-[1px]" />

            <div className="relative rounded-[26px] border border-white/10 bg-white/[0.055] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8">
              {/* Top accent */}
              <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

              {/* Heading */}
              <div className="mb-7">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-400/15 bg-indigo-400/5 px-2.5 py-1 text-[10px] font-medium text-indigo-300">
                  <SparkleIcon />
                  Welcome back
                </div>

                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  Sign in to your account
                </h2>

                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  Enter your credentials to access the internal portal.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] font-medium text-slate-400"
                  >
                    Email address
                  </label>

                  <div className="group relative">
                    <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-purple-500/0 opacity-0 blur-sm transition duration-300 group-focus-within:opacity-100" />

                    <div className="relative flex h-12 items-center rounded-xl border border-white/10 bg-black/20 transition duration-300 group-focus-within:border-indigo-400/40 group-focus-within:bg-black/30">
                      <span className="flex w-11 shrink-0 items-center justify-center text-slate-500 transition-colors group-focus-within:text-indigo-400">
                        <MailIcon />
                      </span>

                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="h-full w-full bg-transparent pr-4 text-sm text-white outline-none placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-[11px] font-medium text-slate-400"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-[11px] font-medium text-indigo-400 transition hover:text-indigo-300"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="group relative">
                    <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-purple-500/0 opacity-0 blur-sm transition duration-300 group-focus-within:opacity-100" />

                    <div className="relative flex h-12 items-center rounded-xl border border-white/10 bg-black/20 transition duration-300 group-focus-within:border-indigo-400/40 group-focus-within:bg-black/30">
                      <span className="flex w-11 shrink-0 items-center justify-center text-slate-500 transition-colors group-focus-within:text-indigo-400">
                        <LockIcon />
                      </span>

                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="mr-1 flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-slate-300"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        <EyeIcon hidden={showPassword} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center justify-between">
                  <label className="group flex cursor-pointer items-center gap-2">
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="peer absolute h-full w-full cursor-pointer opacity-0"
                      />

                      <span className="h-4 w-4 rounded border border-white/15 bg-white/5 transition peer-checked:border-indigo-500 peer-checked:bg-indigo-600" />

                      <svg
                        viewBox="0 0 12 12"
                        className="pointer-events-none absolute h-3 w-3 scale-0 text-white transition-transform peer-checked:scale-100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m2 6 2.5 2.5L10 3" />
                      </svg>
                    </span>

                    <span className="text-[11px] text-slate-500 transition group-hover:text-slate-400">
                      Keep me signed in
                    </span>
                  </label>

                  <span className="flex items-center gap-1.5 text-[10px] text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    Secure login
                  </span>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative mt-2 flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_100%] text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-[0_15px_40px_rgba(99,102,241,0.35)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {loading ? (
                    <span className="relative flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Signing in...
                    </span>
                  ) : (
                    <span className="relative flex items-center gap-2">
                      Sign in
                      <ArrowIcon />
                    </span>
                  )}
                </button>
              </form>

              {/* Footer */}
              <div className="mt-7 border-t border-white/[0.07] pt-5 text-center">
                <p className="text-[11px] text-slate-600">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="font-medium text-indigo-400 transition hover:text-indigo-300"
                  >
                    Contact IT Support
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-700">
            <span>© 2026 TapCard</span>
            <span>•</span>
            <span>Internal Operations Portal</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;