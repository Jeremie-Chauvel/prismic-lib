import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.BioSlice} BioSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BioSlice>} BioProps
 * @param {BioProps}
 */
const Bio = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BioLayout
        description={slice.primary.description}
        picture={slice.primary.picture}
        twitter={slice.primary.twitter}
        github={slice.primary.github}
        linkedin={slice.primary.linkedin}
        name={slice.primary.name}
        title={slice.primary.title}
      />
    </section>
  );
};

export default Bio;

/**
 * @typedef {import("@prismicio/client").RichTextField} RichTextField
 * @typedef {import("@prismicio/client").ImageField} ImageField
 * @typedef {import("@prismicio/client").LinkField} LinkField
 * @param {Object} props
 * @param {RichTextField} props.description
 * @param {ImageField} props.picture
 * @param {LinkField} props.twitter
 * @param {LinkField} props.github
 * @param {LinkField} props.linkedin
 * @param {string} props.name
 * @param {string} props.title
 * @returns
 */
function BioLayout({
  description,
  picture,
  twitter,
  github,
  linkedin,
  name,
  title,
}) {
  return (
    <div class="bg-gray-100">
      <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <PrismicNextImage
          class="w-32 h-32 rounded-full mx-auto"
          field={picture}
          width={128}
          height={128}
        />
        <h2 class="text-center text-2xl font-semibold mt-3">{name}</h2>
        <p class="text-center text-gray-600 mt-1">{title}</p>
        <div class="flex justify-center mt-5">
          <a
            href={twitter.url}
            target={twitter.target}
            class="text-blue-500 hover:text-blue-700 mx-3"
          >
            Twitter
          </a>
          <a
            href={linkedin.url}
            target={linkedin.target}
            class="text-blue-500 hover:text-blue-700 mx-3"
          >
            LinkedIn
          </a>
          <a
            href={github.url}
            target={github.target}
            class="text-blue-500 hover:text-blue-700 mx-3"
          >
            GitHub
          </a>
        </div>
        <div class="mt-5">
          <h3 class="text-xl font-semibold">Bio</h3>
          <PrismicRichText field={description} class="text-gray-600 mt-2" />
        </div>
      </div>
    </div>
  );
}
