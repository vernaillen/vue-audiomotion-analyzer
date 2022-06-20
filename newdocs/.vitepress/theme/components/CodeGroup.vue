<template>
    <div class="codegroup">
        <div class="code-group__nav">
            <ul class="code-group__ul">
                <li v-if="slots['tab1-title']" class="code-group__li">
                    <button class="code-group__nav-tab" :class="{ 'code-group__nav-tab-active': isActive('tab1') }"
                        @click="activate('tab1')">
                        <slot name="tab1-title"></slot>
                    </button>
                </li>
                <li v-if="slots['tab2-title']" class="code-group__li">
                    <button class="code-group__nav-tab" :class="{ 'code-group__nav-tab-active': isActive('tab2') }"
                        @click="activate('tab2')">
                        <slot name="tab2-title"></slot>
                    </button>
                </li>
                <li v-if="slots['tab3-title']" class="code-group__li">
                    <button class="code-group__nav-tab" :class="{ 'code-group__nav-tab-active': isActive('tab3') }"
                        @click="activate('tab3')">
                        <slot name="tab3-title"></slot>
                    </button>
                </li>
            </ul>
        </div>
        <div class="tabs">
            <div v-if="isActive('tab1')" class="code-group-item">
                <slot name="tab1-content"></slot>
            </div>
            <div v-if="isActive('tab2')" class="code-group-item">
                <slot name="tab2-content"></slot>
            </div>
            <div v-if="isActive('tab3')" class="code-group-item">
                <slot name="tab3-content"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, useSlots } from "vue";
const slots = useSlots();
const data = reactive({
    activeTab: 'tab1'
})
const activate = (tab) => {
    data.activeTab = tab
}
const isActive = (tab) => {
    return data.activeTab == tab
}
</script>

<style>
.vp-doc .code-group__nav {
    margin-top: .85rem;
    margin-bottom: calc(-1.7rem - 6px);
    padding-bottom: calc(1.7rem - 6px);
    padding-left: 10px;
    padding-top: 10px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: var(--code-bg-color);
}
.vp-doc ul.code-group__ul {
    margin: auto 0;
    padding-left: 0;
    display: inline-flex;
    list-style: none;
}
.vp-doc .code-group__nav-tab {
    border: 0;
    padding: 5px;
    cursor: pointer;
    background-color: transparent;
    font-size: .85em;
    line-height: 1.4;
    color: #ffffffe6;
    font-weight: 600;
    border-bottom: transparent 1px solid;
}
.vp-doc .code-group__nav-tab.code-group__nav-tab-active {
    border-bottom: green 1px solid;
}
.vp-doc li.code-group__li {
    z-index: 100;
    margin-top: 0;
}
.vp-doc .code-group-item div[class*='language-'] {
    margin-top: -60px;
}
.vp-doc .code-group-item div[class*='language-'] pre {
    padding-top: 50px;
}

</style>
