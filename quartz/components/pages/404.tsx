import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint" style={{ textAlign: "center" }}>
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
      <div>
        <img
          src="/images/404.gif"
          alt="404 Not Found"
          style={{ maxWidth: "300px", margin: "1.5rem auto", display: "block" }}
        />
      </div>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
