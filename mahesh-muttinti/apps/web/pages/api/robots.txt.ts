const robots = `
User-agent: *
Disallow:
`

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: { setHeader: (arg0: string, arg1: string) => void; write: (arg0: string) => void; end: () => void }) => {
  res.setHeader('Content-Type', 'text/plain')
  res.write(robots)
  res.end()
}
