/**
 *
 * Radio Group - Here is its [documentation](https://github.com/microsoft/vscode-custom-data/blob/master/samples/webcomponents/src/components/my-component/docs.md).
 *
 * Use it like this:
 * ```html
 * <RadioGroup value="2" size={3}>
 *   <span slot="label">My Label</span>
 *   <Radio value="1">Option 1</Radio>
 *   <Radio value="2">Option 2</Radio>
 *   <Radio value="3">Option 3</Radio>
 * </RadioGroup>
 * ```
 *
 * @tag radio-group
 * @tagname radio-group
 *
 * @attr {boolean} disabled - Disables the element
 * @attribute {string} value - The value of the selected radio
 * @attribute {1|2|3|4} size - This will control the size of radio buttons
 *
 * @csspart bar - Styles the color of bar
 *
 * @slot - add radio buttons to the `default` slot to create options to your radio group
 * @slot label - placeholder for the radio group label
 *
 * @cssprop --text-color - Controls the color of foo
 * @cssproperty [--background-color=red] - Controls the color of bar
 *
 * @prop {boolean} prop1 - this toggles some unseen feature
 * @property {number} prop2 - this will adjust thr width of the unit
 *
 * @fires custom-event - some description for custom-event
 * @fires {Event} typed-event - some description for typed-event
 * @event {CustomEvent} typed-custom-event - some description for typed-custom-event
 *
 */
class RadioGroup extends HTMLElement {}

customElements.define("radio-group", RadioGroup);
