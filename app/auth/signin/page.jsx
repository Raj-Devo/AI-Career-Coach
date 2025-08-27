import SignInForm from "@/components/auth/SignInForm";
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="AI Career Coach Logo"
              width={200}
              height={60}
              className="h-16 w-auto object-contain"
            />
          </div>
          <h2 className="text-4xl font-bold gradient-title">
            Welcome Back
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Sign in to continue your career journey
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-8 shadow-2xl">
          <SignInForm />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Create one now
              </Link>
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
