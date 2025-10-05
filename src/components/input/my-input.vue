<template>
    <div class="custom-input">
        <label >{{ label }}</label>
        <input 
          :type="type" 
          :value="modelValue" 
          @input="updateValue"
          :placeholder="placeholder"
          :disabled="disabled"
        />
    </div>
</template>


<script>
export default {
    name:'my-input',
    data(){
        return {

        }
    },
    props:{
        label:{
            type: String,
            default: ''
        },
        placeholder:{
            type: String,
            default: ''
        },
        type:{
          type: String,
          default: 'Text'
        },
        disabled:{
            type: Boolean,
            default: false
        },
    },
    methods:{
        updateValue(event){
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>