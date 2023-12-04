import { Tooltip as ReactTooltip } from "react-tooltip";

function Tooltips({ url1, url2 }) {
  return (
    <>
      <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content={url1}
        variant="success"
      />
      <ReactTooltip
        id="my-tooltip-2"
        place="bottom"
        content={url2}
        variant="success"
      />
      <ReactTooltip
        id="react-icon"
        place="bottom"
        content="React"
        variant="success"
      />
      <ReactTooltip
        id="redux-icon"
        place="bottom"
        content="Redux"
        variant="success"
      />
      <ReactTooltip
        id="supabase-icon"
        place="bottom"
        content="Supabase"
        variant="success"
      />
      <ReactTooltip
        id="javascript-icon"
        place="bottom"
        content="JavaScript"
        variant="success"
      />
      <ReactTooltip
        id="styled-components-icon"
        place="bottom"
        content="styled-components"
        variant="success"
      />
      <ReactTooltip
        id="vite-icon"
        place="bottom"
        content="Vite"
        variant="success"
      />
      <ReactTooltip
        id="tailwind-icon"
        place="bottom"
        content="Tailwind CSS"
        variant="success"
      />
      <ReactTooltip
        id="leaflet-icon"
        place="bottom"
        content="Leaflet"
        variant="success"
      />
      <ReactTooltip
        id="html-icon"
        place="bottom"
        content="HTML5"
        variant="success"
      />
      <ReactTooltip
        id="sass-icon"
        place="bottom"
        content="Sass"
        variant="success"
      />
    </>
  );
}

export default Tooltips;