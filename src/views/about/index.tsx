import { Card } from "@/components";
import { GLOBAL_STYLES } from "@/global-styles";
import SphereCanvas, { SphereMesh } from "@/components/canvas/sphere";

type Props = {};

function About({}: Props) {
  return (
    <div className="max-w-7xl w-auto h-screen bg-slytherin-green flex flex-col gap-5 px-6 sm:px-20 sm:py-16">
      <div className="max-w-[80%]">
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
      <div className="w-full flex flex-wrap gap-8">
        {/* <Card n={1} />
        <Card n={2} />
        <Card n={3} /> */}
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
