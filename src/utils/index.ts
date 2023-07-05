import parse from 'html-react-parser';
export function stringToHTML(value: string) {
  return parse(value);
}