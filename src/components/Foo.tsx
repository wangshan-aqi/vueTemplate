import { defineComponent, ref } from '@vue/runtime-core'
interface Props {
    leves: number
}
export default defineComponent({
  props: {
    leves: {
      type: Number,
      required: true,
      default: 1
    }
  },
  setup () {
    const count = ref(0)
    return (props: Props) => (
        <div>
            <p>{props.leves}</p>
            <p>{count.value}</p>
        </div>
    )
  }
})

// export default () => {
//   return (
//     <div>
//         <h1>函数式组建</h1>
//     </div>
//   )
// }
