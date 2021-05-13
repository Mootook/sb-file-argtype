import MyButton from './Button.vue';
import { watch, toRef } from 'vue'

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
    file: {
      defaultValue: [],
      control: {
        type: 'file',
        accept: ['.txt', '.jpeg', '.rtf']
      }
    }
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    watch(() => args.file, (newFile) => {
      // Omitted potentially unsafe URL args
      console.log('New File: ', newFile)
    })

    watch(toRef(args, 'file'), (newFile) => {
      console.log('New File', newFile)
    })

    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <span>{{ args.file }}</span>
    <br />
    <my-button v-bind="args" />
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
