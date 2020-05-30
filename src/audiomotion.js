import AudioMotionAnalyzer from "audiomotion-analyzer";

export default function () {
    return class AudioMotion {
        constructor() {
            this.audioMotionObj = undefined
            this.options = {
                barSpace: 0.1,
                bgAlpha: 0.7,
                fftSize: 8192,
                fillAlpha: 1,
                gradient: 'classic',
                height: undefined,
                lineWidth: 0,
                loRes: false,
                lumiBars: false,
                maxDecibels: -25,
                maxFreq: 22000,
                minDecibels: -85,
                minFreq: 20,
                mode: 0,
                onCanvasDraw: undefined,
                onCanvasResize: undefined,
                overlay: false,
                reflexAlpha: 0.15,
                reflexFit: true,
                reflexRatio: 0,
                showBgColor: true,
                showFPS: false,
                showLeds: false,
                showPeaks: true,
                showScale: true,
                smoothing: 0.5,
                source: undefined,
                start: true,
                width: undefined
            }
        }
        init (el, audioCtx) {
            this.audioMotionObj = new AudioMotionAnalyzer(
                el, {audioCtx: audioCtx}
            );
        }
        getAnalyzer() {
            return this.audioMotionObj._analyzer
        }
        setOptions(options) {
            this.options = options
            this.audioMotionObj.setOptions(options)
        }
        getOptions() {
            return this.options
        }
    }
}
