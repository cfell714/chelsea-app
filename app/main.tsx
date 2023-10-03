'use client';
import { Navbar } from "@/components/Navbar"
import { MainContent, MainLayoutContainer } from "./layout.style"

export const Main = ({children}: {children?: React.ReactNode}) => {
    return (
        <MainLayoutContainer>
            <Navbar />
            <MainContent>{children}</MainContent>
        </MainLayoutContainer>
    )
}