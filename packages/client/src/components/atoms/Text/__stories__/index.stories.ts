import Text from '../index.vue'

export default {
  title: 'Atoms/Text',
  component: Text,
}

export const Primary = () => ({
  components: { Text },
  template: '<text>Nome is all-in-one workspace.</text>',
})
