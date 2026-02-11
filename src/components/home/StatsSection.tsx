import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 2,
    suffix: "+",
    label: "Years Experience",
    description: "Delivering excellence since day one",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Partner Brands",
    description: "Trusted global manufacturers",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Happy Customers",
    description: "Across Saudi Arabia",
  },
  {
    icon: TrendingUp,
    value: 100,
    suffix: "%",
    label: "Quality Assured",
    description: "Genuine parts guarantee",
  },
];

const CountUp = ({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/20 mb-3 sm:mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-foreground mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-secondary-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-xs text-secondary-foreground/60">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
