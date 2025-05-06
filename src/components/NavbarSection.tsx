'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { ReviewSection } from './ReviewSection';
import { PricingSection } from './PricingSection';
import { GlowingEffects } from './GlowingEffects';
import { Reviewcards } from './ReviewCard';
import { FooterSection } from './FooterSection';
import Link from 'next/link';

export function NavbarSection() {
  const router = useRouter();
  const navItems = [
    {
      name: 'Feed',
      link: '/feed',
    },
    {
      name: 'Pricing',
      link: '#pricing',
    },
    {
      name: 'Admin',
      link: '/admin',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Link href="/login">
              <NavbarButton variant="secondary">Login</NavbarButton>
            </Link>
            <Link href="/signup">
              <NavbarButton variant="primary">Sign Up</NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push('/login');
                }}
                variant="primary"
                className="w-full">
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push('/signup');
                }}
                variant="primary"
                className="w-full">
                Sign Up
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <HeroSection />
      <FeaturesSection />
      <ReviewSection />
      <PricingSection />
      <GlowingEffects />
      <Reviewcards />
      <FooterSection />
    </div>
  );
}
