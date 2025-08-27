"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, User, Mail, Lock, Shield } from "lucide-react";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        router.push("/auth/signin?message=Account created successfully");
      } else {
        const error = await response.json();
        alert(error.message || "Sign up failed");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      alert("Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="pl-10 bg-background border-border focus:border-primary transition-colors"
            placeholder="Enter your full name"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="pl-10 bg-background border-border focus:border-primary transition-colors"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-foreground">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="pl-10 bg-background border-border focus:border-primary transition-colors"
            placeholder="Create a strong password"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
          Confirm Password
        </Label>
        <div className="relative">
          <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            className="pl-10 bg-background border-border focus:border-primary transition-colors"
            placeholder="Confirm your password"
            required
          />
        </div>
      </div>
      
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 transition-all duration-200"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
}
