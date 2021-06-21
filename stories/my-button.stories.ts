import { html } from "lit-element";
import "../src/my-button";

type Props = {
  title: String,
  text: String,
  counter?: number
}

export default {
  title: "Example/My Button",
  argTypes: {
  },
};

const Template = () => {
  return html`
    <my-button></my-button>
  `;
};

export const FollowJane = (args: any) => Template();
FollowJane.args = {};
