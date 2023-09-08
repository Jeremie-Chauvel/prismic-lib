/**
 * @typedef {import("@prismicio/client").Content.TerminalSlice} TerminalSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TerminalSlice>} TerminalProps
 * @param {TerminalProps}
 */
const Terminal = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TerminalLayout text={slice.primary.text} title={slice.primary.title} />
    </section>
  );
};

export default Terminal;

/**
 * @param {Object} props
 * @param {string} props.text
 * @param {string=} [props.title="Terminal"]
 * @returns
 */
function TerminalLayout({ text, title = "Terminal" }) {
  return (
    <div class="w-1/2 mx-auto">
      <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
        <div
          class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
          id="headerTerminal"
        >
          <div
            class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
            id="closebtn"
          ></div>
          <div
            class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
            id="minbtn"
          ></div>
          <div
            class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
            id="maxbtn"
          ></div>
          <div class="mx-auto pr-16">
            <p class="text-center text-sm">{title}</p>
          </div>
        </div>
        <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black">
          <p class="pb-1">Last login: Wed Sep 2 09:11:04 on ttys002</p>
          <p class="pb-1">{text}</p>
        </div>
      </div>
    </div>
  );
}
