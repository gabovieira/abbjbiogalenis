import { type ReactNode } from 'react';
import { BiogalenisHeader } from '@/components/biogalenis/biogalenis-header';
import { BiogalenisFooter } from '@/components/biogalenis/biogalenis-footer';

interface BiogalenisLayoutProps {
    children: ReactNode;
}

export default function BiogalenisLayout({ children }: BiogalenisLayoutProps) {
    return (
        <div className="min-h-screen bg-white font-poppins">
            <BiogalenisHeader />
            <main className="flex-1">
                {children}
            </main>
            <BiogalenisFooter />
        </div>
    );
}
