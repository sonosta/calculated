<template>
        <slot name="btn" :open="open"></slot>
        <teleport to="body">
            <div class="v-modal open" v-show="is_open">
                <transition name="bounce">
                    <div class="v-modal-window" v-show="is_open">
                        <div class="v-modal-title">
                            <slot name="title" :close="close">
                                {{title}}
                            </slot>
                        </div>
                        <div class="v-modal-content">
                            <slot name="content" :close="close">
                                {{content}}
                            </slot>
                        </div> 
                        <div class="v-modal-actions">
                            <slot name="action" :close="close">
                                {{ action }}
                            </slot>
                        </div>
                    </div>
                </transition>
            </div>
        </teleport>
</template>

<script>
export default {
    name: 'my-modal',
    props:{
        title: {
            type: String,
        },
        content: {
            type: String,
        },
        action: {
            type: String,
        },
    },
    data(){
        return {
            is_open: false,
        }
    },
    methods:{
        open(){
            this.is_open = true;
        },
        close(){
            this.is_open = false;
        },
    },
}
</script>

<style lang="scss">
.v-modal{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    pointer-events: none;
    background-color: #fff;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1a1a1a;

    &.open{
        background-color: rgba(0,0,0,0.5);
        opacity: 1;
        z-index: 1000;
        pointer-events: all;
        transition: opacity 0.2s linear;
    }

    &-window{
        background-color: #fff;
        box-shadow: 0 5px 15px rgb(0,0,0,0.5);
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        
        max-height: 820px;
        overflow: none;
    }

    &-title{
        font-size: 30px;
        font-weight: normal;
        position: relative;
        padding: 30px 30px 15px;
        position: sticky;
        top: 0;
        background: white;
        box-shadow: 0px 0px 3px 0px rgba(#000000, 0.2);
        z-index: 1;
    }

    &-content{
        display: inline-block;
        font-size: 16px;
        text-align: left;
        font-weight: normal;
        line-height: 25px;
        width: 100%;
        padding: 0 30px;
    }

    &-fields{
        margin-top: 25px;
    }

    &-actions{
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 0.3s linear;
        padding: 15px 30px;
    }
    
}

.modal-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .modal-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .modal-enter-from,
  .modal-leave-to {
    transform: translateY(-100px);
    opacity: 0;
  }
</style>