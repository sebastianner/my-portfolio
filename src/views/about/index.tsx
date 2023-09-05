import { Card } from "@/components";
import { SphereCanvas } from "@/components/canvas";
import { GLOBAL_STYLES } from "@/global-styles";

type Props = {};

function About({}: Props) {
  return (
    <div className="w-auto h-screen bg-slytherin-green flex flex-col">
      <div>
        <h2 className={GLOBAL_STYLES.subtitle}>Introduction</h2>
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
      <div>
        <SphereCanvas />
      </div>
      {/* <article className="mt-36 text-center">
        <h2 className="text-2xl font-extralight opacity-80 tracking-wide">
          My stack
        </h2>
        <h1 className="text-title font-bold">Technologies</h1>
      </article> */}
    </div>
  );
}

export default About;
