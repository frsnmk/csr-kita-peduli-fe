"use client";
import React from "react";
import { AuthProvider } from "./lib/context/auth-context";

export default function ContextWrapper({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}