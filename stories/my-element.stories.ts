import { html } from "lit-element";
import "../src/my-element";

type Props = {
  title: String,
  text: String,
  counter?: number
}

export default {
  title: "Example/My Element",
  argTypes: {
    title: { control: "string" },
    counter: { control: "number" },
    text: { control: "string" },
  },
};

const Template = ({ title, text, counter = 0 }: Props) => {
  return html`
    <my-element .title=${title} .counter=${counter}>${text}</my-element>
  `;
};

export const MyElement = (args: Props) => Template(args);
MyElement.args = {
  title: "My title",
};

export const NegativeCounter = (args: Props) => Template(args);
NegativeCounter.args = {
  title: "Foo",
  counter: -5,
};

export const SlottedText = (args: Props) => Template(args);
SlottedText.args = {
  title: "My title",
  text: "Some slotted text",
};
