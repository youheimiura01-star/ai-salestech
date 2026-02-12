import { PRICING_PLANS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/ui/PricingCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="料金プラン"
            subtitle="ビジネスの規模に合わせた最適なプランをお選びいただけます"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, i) => (
            <AnimatedSection key={plan.id} delay={i * 0.15}>
              <PricingCard plan={plan} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
