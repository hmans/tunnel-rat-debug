import { Count } from "./Count";
import { t } from "./tunnels";

export function Game() {
  return (
    <>
      <t.In>
        <Count />
      </t.In>

      <t.In>
        <Count />
      </t.In>
    </>
  );
}
