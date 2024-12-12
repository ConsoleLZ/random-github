import {defineComponent} from 'vue'
import {convertISOToCustomFormat} from '@/utils/utils'

export default defineComponent({
    props: {
        data: {
            type: Object,
            default: ()=>{}
        }
    },
    setup(){
        const methods = {
            onJumpProject(url: string){
                window.open(url)
            }
        }

        return {
            convertISOToCustomFormat,
            ...methods
        }
    }
})