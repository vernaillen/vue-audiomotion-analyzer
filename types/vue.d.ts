import Vue from "vue";
import { AudioMotion } from "./index";

declare module "vue/types/vue" {
    interface Vue {
        $audioMotion: AudioMotion;
    }
}
