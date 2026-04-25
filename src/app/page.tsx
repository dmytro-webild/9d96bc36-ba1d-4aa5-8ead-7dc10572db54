"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="outline"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="ELITE WASH"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      title="Elite Care for Your Pristine Sanctuary"
      description="Experience professional home care with meticulous attention to detail. We transform spaces into spotless havens of comfort."
      testimonials={[
        {
          name: "Alice M.",
          handle: "@alicem",
          testimonial: "The best cleaning service I've ever hired. Meticulous!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-woman-smiling-medium-shot_23-2148329361.jpg",
        },
        {
          name: "Bob R.",
          handle: "@bobr",
          testimonial: "Elite Wash made our home feel brand new.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
        },
        {
          name: "Carol D.",
          handle: "@carold",
          testimonial: "Reliable, thorough, and highly professional.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/family-kitchen_1157-18405.jpg",
        },
        {
          name: "David W.",
          handle: "@davidw",
          testimonial: "Impressive attention to hidden spots.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe-with-laptop_273609-12687.jpg",
        },
        {
          name: "Eve K.",
          handle: "@evek",
          testimonial: "Everything sparkles. Truly elite quality.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mature-blonde-business-woman-work_23-2149100291.jpg",
        },
      ]}
      buttons={[
        {
          text: "Schedule Today",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-with-vacuum-cleaning_23-2148514830.jpg?_wi=1"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/vertical-shot-young-musician-woman-learns-how-play-ukulele-sits-sofa-with-crossed-legs_1258-204931.jpg",
          alt: "client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/women-relaxing-sofa-looking-clipboard_23-2148352830.jpg",
          alt: "client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/laughing-women-high-fiving-table_23-2147769994.jpg",
          alt: "client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-white-shirt-black-pants-sitting-chair-smiling-cherfully-pointing-with-index-finger-light-living-room_141793-101824.jpg",
          alt: "client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-businessman-imagines-great-career_1163-5478.jpg",
          alt: "client 5",
        },
      ]}
      avatarText="Trusted by 500+ happy homes"
      marqueeItems={[
        {
          type: "text",
          text: "Eco-Friendly Cleaning",
        },
        {
          type: "text",
          text: "Deep Sanitation",
        },
        {
          type: "text",
          text: "Professional Staff",
        },
        {
          type: "text",
          text: "Guaranteed Satisfaction",
        },
        {
          type: "text",
          text: "Affordable Pricing",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Homes Transformed",
          value: "1,500+",
          items: [
            "Deep cleaning",
            "Standard maintenance",
            "Custom care",
          ],
        },
        {
          id: "m2",
          title: "Client Satisfaction",
          value: "99.8%",
          items: [
            "Rated excellence",
            "Client retention",
            "High referrals",
          ],
        },
        {
          id: "m3",
          title: "Expert Team Hours",
          value: "25,000+",
          items: [
            "Ongoing training",
            "Expert techniques",
            "Reliable staff",
          ],
        },
      ]}
      title="Proven Quality Metrics"
      description="We stand by our results and dedication to excellence."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          tag: "Eco-Safe",
          title: "Green Cleaning Solutions",
          subtitle: "Gentle on Earth, Tough on Dirt",
          description: "We utilize non-toxic, eco-friendly supplies to protect your family, pets, and the environment while maintaining exceptional standards.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-office-cleaning-process_23-2149343073.jpg?_wi=1",
        },
        {
          tag: "Expert",
          title: "Highly Trained Staff",
          subtitle: "Vetted Specialists",
          description: "Our team undergoes rigorous background checks and comprehensive training, ensuring only the most trusted individuals enter your sanctuary.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-man-apron-standing-blue-wall_140725-143513.jpg?_wi=1",
        },
        {
          tag: "Convenience",
          title: "Seamless Booking",
          subtitle: "Flexible Scheduling",
          description: "Easily schedule, reschedule, or manage your cleaning appointments through our streamlined online booking platform whenever needed.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-care-cleaning-dirty-house_23-2149248483.jpg?_wi=1",
        },
      ]}
      title="Why Elite Wash Stands Out"
      description="Our commitment goes beyond cleaning; we provide lifestyle solutions."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Kitchen Deep Clean",
          price: "From $120",
          imageSrc: "http://img.b2bpic.net/free-photo/man-cleaning-chair-with-rag_23-2148456987.jpg?_wi=1",
        },
        {
          id: "p2",
          name: "Hardwood Floor Restoration",
          price: "From $150",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-cleaning-table_23-2148464983.jpg",
        },
        {
          id: "p3",
          name: "Window & Glass Detailing",
          price: "From $90",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-wiping-window-with-rag_23-2148464993.jpg",
        },
        {
          id: "p4",
          name: "Upholstery & Carpet Steam",
          price: "From $200",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-cleaning-chair_23-2148465015.jpg",
        },
        {
          id: "p5",
          name: "Full Bathroom Sanctuary",
          price: "From $100",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-bathroom-cleaning-products_23-2150829699.jpg",
        },
        {
          id: "p6",
          name: "Move-In / Move-Out Deep Clean",
          price: "From $350",
          imageSrc: "http://img.b2bpic.net/free-photo/crop-man-carrying-things-box_23-2147782375.jpg",
        },
      ]}
      title="Comprehensive Home Care Services"
      description="Tailored packages designed to handle everything from routine care to deep restoration."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "starter",
          badge: "Essential",
          price: "$120",
          name: "Maintenance Wash",
          buttons: [
            {
              text: "Select",
              href: "#contact",
            },
          ],
          features: [
            "Standard dusting",
            "Surface wipe-down",
            "Vacuuming",
            "Floor mopping",
          ],
        },
        {
          id: "pro",
          badge: "Popular",
          price: "$280",
          name: "Deep Care Package",
          buttons: [
            {
              text: "Select",
              href: "#contact",
            },
          ],
          features: [
            "Everything in Maintenance",
            "Deep kitchen cleaning",
            "Window cleaning",
            "Baseboard scrubbing",
          ],
        },
        {
          id: "elite",
          badge: "Premium",
          price: "$450",
          name: "Elite Full Restoration",
          buttons: [
            {
              text: "Select",
              href: "#contact",
            },
          ],
          features: [
            "Everything in Deep Care",
            "Carpet steam cleaning",
            "Upholstery cleaning",
            "Organizational services",
          ],
        },
      ]}
      title="Transparent Pricing Options"
      description="Simple, straightforward plans created to fit your lifestyle needs perfectly."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          date: "Oct 2023",
          title: "Busy professional",
          quote: "Elite Wash gave me my weekends back. Incredible work.",
          tag: "Regular",
          avatarSrc: "http://img.b2bpic.net/free-photo/person-paying-bill-restaurant-using-nfc-technology_23-2150039415.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-vacuum-cleaning_23-2148514830.jpg?_wi=2",
          imageAlt: "happy client home interior",
        },
        {
          id: "t2",
          name: "James Gordon",
          date: "Sep 2023",
          title: "Homeowner",
          quote: "The move-in clean was absolutely perfect. Highly recommended.",
          tag: "One-time",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-couple-receiving-keys-their-new-home-from-realtor_23-2148895470.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-office-cleaning-process_23-2149343073.jpg?_wi=2",
          imageAlt: "happy client home interior",
        },
        {
          id: "t3",
          name: "Elena Rodriguez",
          date: "Aug 2023",
          title: "Parent",
          quote: "They are so careful with the kids' rooms. Totally trust them.",
          tag: "Family",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-blonde-stylish-european-woman-blanket-tropical-balcony-meets-sunrise-morning_343596-3007.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-man-apron-standing-blue-wall_140725-143513.jpg?_wi=2",
          imageAlt: "happy client home interior",
        },
        {
          id: "t4",
          name: "Mark Stevens",
          date: "Jul 2023",
          title: "Luxury flat owner",
          quote: "I demand the highest standards, and they meet them every single time.",
          tag: "Premium",
          avatarSrc: "http://img.b2bpic.net/free-photo/cheerful-man-using-laptop-talking-mobile-phone_329181-12135.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-care-cleaning-dirty-house_23-2149248483.jpg?_wi=2",
          imageAlt: "happy client home interior",
        },
        {
          id: "t5",
          name: "Linda Wu",
          date: "Jun 2023",
          title: "Business executive",
          quote: "Consistent, professional, and very thorough.",
          tag: "Elite",
          avatarSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-man-woman-home_23-2148899724.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/man-cleaning-chair-with-rag_23-2148456987.jpg?_wi=2",
          imageAlt: "happy client home interior",
        },
      ]}
      title="Client Experiences"
      description="We're honored to transform lives through cleaner spaces."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do I need to be home?",
          content: "Not at all. Many of our clients provide secure key access so we can work while they are away.",
        },
        {
          id: "q2",
          title: "Are your staff insured?",
          content: "Absolutely. Every member of our team is fully insured, bonded, and vetted.",
        },
        {
          id: "q3",
          title: "Can I request specific products?",
          content: "We prioritize our green solutions, but we are happy to accommodate specific requests if they are safe for our staff.",
        },
      ]}
      sideTitle="Common Inquiries"
      sideDescription="Find answers to our most commonly asked questions."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact Us"
      title="Ready for a Cleaner Life?"
      description="Book your first elite cleaning experience today. Let us transform your home."
      buttons={[
        {
          text: "Call Now",
          href: "tel:5550123456",
        },
        {
          text: "Email Booking",
          href: "mailto:hello@elitewash.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="ELITE WASH"
      columns={[
        {
          title: "Navigate",
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 ELITE WASH & HOME CARE. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
