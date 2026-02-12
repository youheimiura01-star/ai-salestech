import { STATS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ResultsSection() {
  return (
    <section id="results" className="py-20 md:py-28 gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="圧倒的な導入実績"
            subtitle="数字で証明する、AIセールステックの成果"
            variant="light"
          />
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.id} delay={i * 0.15}>
              <StatCard stat={stat} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
