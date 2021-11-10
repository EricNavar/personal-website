export type LinkProps = {
  label: string,
  ariaLabel: string,
  hyperlink: string,
  icon: () => JSX.Element
}

export type Project = {
    _id: number,
    tools: string,
    headerText: string,
    subText: Array<Array<string>>,
    image: string,
    altLabel: string,
    ariaLabel: string,
    links: Array<LinkProps>
}
