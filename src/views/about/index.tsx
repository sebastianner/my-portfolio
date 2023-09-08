import { Card } from "@/components";
import { GLOBAL_STYLES } from "@/global-styles";
import { HIGHLIGHTED_TECH } from "@/constants";
type Props = {};

function About({}: Props) {
  return (
    <div className="max-w-7xl w-auto h-screen bg-slytherin-green flex flex-col gap-12 px-6 sm:px-20 sm:py-16">
      <div className="max-w-[80%]">
        <h3 className={GLOBAL_STYLES.subtitle}>Introduction</h3>
        <h1 className={GLOBAL_STYLES.title}>Overview.</h1>
        <p className={GLOBAL_STYLES.paragraph}>
          I'm a proficient Front-end developer with a focus on crafting
          interactive digital experiences using React. Proficient across the
          JavaScript spectrum – including React, Next.js, TypeScript, Node.js,
          and Redux – I excel at transforming ideas into seamless, efficient,
          and user-friendly solutions. Let's collaborate to turn your vision
          into reality!
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-8">
        {HIGHLIGHTED_TECH.info.map((data, index) => (
          <Card
            key={index}
            technology={data.technology}
            icon={data.icon}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
