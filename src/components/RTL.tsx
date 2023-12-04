import createCache from "@emotion/cache";
import { PropsWithChildren } from "react";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl"; // noinspection SpellCheckingInspection

const container = document.querySelector("#root")!;
const shadowContainer = container.attachShadow({ mode: "open" });
const emotionRoot = document.createElement("style");
export const shadowRootElement = document.createElement("div");
shadowContainer.appendChild(emotionRoot);
shadowContainer.appendChild(shadowRootElement);

// noinspection SpellCheckingInspection
const cacheRtl = createCache({
  key: "angle",
  prepend: true,
  container: emotionRoot,
  stylisPlugins: [rtlPlugin],
});

/**
 * A cache provider for rtl situation of the web application.
 * @param props
 * @constructor
 */
export default function RTL(props: PropsWithChildren) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
