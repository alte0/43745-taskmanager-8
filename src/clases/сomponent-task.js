import Component from "./сomponent";
import {createElement} from "../modules/util";

export default class ComponentTask extends Component {
  constructor() {
    super();

    if (new.target === ComponentTask) {
      throw new Error(
          `Can't instantiate BaseComponentTask, only concrete one.`
      );
    }

    this._state = {};
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element.remove();
    this._element = null;
  }

  createListeners() {}
  removeListeners() {}
}
