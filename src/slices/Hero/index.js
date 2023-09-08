import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { PrismicRichText } from "@/components/PrismicRichText";

const Hero = ({ slice }) => {
  return (
    <HeroLayout
      text={slice.primary.text}
      callToAction={slice.primary.callToAction}
      callToActionLink={slice.primary.callToActionLink}
      firstImage={slice.primary.firstImage}
      secondImage={slice.primary.secondImage}
    />
  );
};

/**
 * @typedef {import("@prismicio/client").RichTextField} RichTextField
 * @typedef {import("@prismicio/client").ImageField} ImageField
 * @typedef {import("@prismicio/client").LinkField} LinkField
 *
 * @param {Object} props
 * @param {RichTextField} props.text
 * @param {string} props.callToAction
 * @param {LinkField} props.callToActionLink
 * @param {ImageField} props.firstImage
 * @param {ImageField} props.secondImage
 */
function HeroLayout({
  text,
  callToAction,
  callToActionLink,
  firstImage,
  secondImage,
}) {
  return (
    <section class="text-black body-font">
      <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div class="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <PrismicRichText
            class="mb-8 leading-relaxed opacity-50"
            field={text}
          />
          {prismic.isFilled.link(callToActionLink) && (
            <div class="flex justify-center">
              <a
                class="inline-flex text-white bg-blue-500 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm"
                href={callToActionLink.url}
                target={callToActionLink.target}
              >
                {callToAction}
              </a>
            </div>
          )}
        </div>
        {(prismic.isFilled.image(firstImage) ||
          prismic.isFilled.image(secondImage)) && (
          <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {prismic.isFilled.image(firstImage) && (
              <PrismicNextImage
                field={firstImage}
                sizes="100vw"
                className="w-full rounded-xl shadow"
              />
            )}
            {prismic.isFilled.image(firstImage) && (
              <PrismicNextImage
                field={secondImage}
                sizes="100vw"
                className="w-full rounded-xl shadow"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
