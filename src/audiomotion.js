import AudioMotionAnalyzer from "audiomotion-analyzer";

export default function () {
    return class AudioMotion {
        constructor() {
            this.audioMotionObj = undefined
        }
        init (el, audioCtx) {
            this.audioMotionObj = new AudioMotionAnalyzer(
                el, {audioCtx: audioCtx}
            );
        }
        getAnalyzer() {
            return this.audioMotionObj._analyzer
        }
    }
}
