import { PrismicRichText } from "@/components/PrismicRichText";

/**
 * @typedef {import("@prismicio/client").Content.AccordionSlice} AccordionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AccordionSlice>} AccordionProps
 * @param {AccordionProps}
 */
const Accordion = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AccordionLayout
        title={slice.primary.title}
        subtitle={slice.primary.subtitle}
        items={slice.items}
      />
    </section>
  );
};

export default Accordion;

/**
 * @typedef {import("@prismicio/client").RichTextField} RichTextField
 * @typedef {import("@prismicio/client").Content.AccordionSliceDefaultItem} AccordionSliceDefaultItem
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {AccordionSliceDefaultItem[]} props.items
 * @param {RichTextField} props.description
 *
 */
function AccordionLayout({ title, subtitle, items }) {
  return (
    <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-5xl mt-5 tracking-tight">{title}</h2>
        <p class="text-neutral-500 text-xl mt-3">{subtitle}</p>
      </div>
      <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        {items.map((item) => (
          <div key={item.title} class="py-5">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>{item.title}</span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <PrismicRichText
                class="text-neutral-600 mt-3 group-open:animate-fadeIn"
                field={item.content}
              />
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
