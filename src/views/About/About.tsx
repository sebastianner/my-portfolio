import Card from "@/components/Cards/Cards";
import { GLOBAL_STYLES } from "@/global-styles";
import { HIGHLIGHTED_TECH, OVERVIEW } from "./constants";

function About() {
  return (
    <div className="max-w-7xl w-auto h-fit bg-slytherin-green flex flex-col gap-12 px-6 sm:px-20 sm:py-16">
      <div className="max-w-[80%]">
        <h3 className={GLOBAL_STYLES.subtitle}>Introduction</h3>
        <h1 className={GLOBAL_STYLES.title}>Overview.</h1>
        <p className={GLOBAL_STYLES.paragraph}>{OVERVIEW}</p>
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
