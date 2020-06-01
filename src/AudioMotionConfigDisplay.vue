<template>
    <div id="audiomotion-config">
        <div class="analyzer-configuration" v-if="options">
            <div class="box center">
                <label class="label">Visualization Mode
                    <select id="mode" v-model="options.mode" @change="updateOptions">
                        <option value="0">Discrete frequencies</option>
                        <option value="10">Line / Area graph</option>
                        <option value="1">1/24th octave bands</option>
                        <option value="2">1/12th octave bands</option>
                        <option value="3">1/8th octave bands</option>
                        <option value="4">1/6th octave bands</option>
                        <option value="5">1/4th octave bands</option>
                        <option value="6">1/3rd octave bands</option>
                        <option value="7">Half octave bands</option>
                        <option value="8">Full octave bands</option>
                    </select>
                </label>

                <fieldset id="area_options">
                    <label class="label">lineWidth
                        <input type="range" id="line_width" min="0" max="9" step="1" v-model="options.lineWidth" @change="updateOptions"/>
                        <div class="value"></div>
                    </label>

                    <label class="label">fillAlpha
                        <input type="range" id="fill_alpha" min="0" max="1" step=".1" v-model="options.fillAlpha" @change="updateOptions"/>
                        <div class="value"></div>
                    </label>
                </fieldset>

                <fieldset id="bar_options">
                    <label class="label">Bar spacing
                        <select id="bar_space" v-model="options.barSpace" @change="updateOptions">
                            <option value="0">None</option>
                            <option value="1">1px (legacy)</option>
                            <option value="2">2px</option>
                            <option value="0.1">10% (default)</option>
                            <option value="0.2">20%</option>
                            <option value="0.25">25%</option>
                            <option value="0.4">40%</option>
                            <option value="0.5">50%</option>
                            <option value="0.75">75%</option>
                            <option value="0.9">90%</option>
                        </select>
                    </label>
                </fieldset>

                <label class="label">Gradient
                    <select id="gradient" v-model="options.gradient" @change="updateOptions">
                        <option value="classic">Classic</option>
                        <option value="prism">Prism</option>
                        <option value="rainbow">Rainbow</option>
                    </select>
                </label>

                <label class="label">reflexRatio
                    <input type="range" id="reflex_ratio" min="0" max=".9" step=".1" v-model="options.reflexRatio" @change="updateOptions"/>
                    <div class="value"></div>
                </label>

                <label class="label">reflexAlpha
                    <input type="range" id="reflex_alpha" min="0" max="1" step=".05" v-model="options.reflexAlpha" @change="updateOptions"/>
                    <div class="value"></div>
                </label>

                <label class="label">FFT size
                    <select id="fft" v-model="options.fftSize" @change="updateOptions">
                        <option value="1024">1024</option>
                        <option value="2048">2048</option>
                        <option value="4096">4096</option>
                        <option value="8192">8192</option>
                        <option value="16384">16384</option>
                        <option value="32768">32768</option>
                    </select>
                </label>

                <label class="label">Frequency range
                    <select id="range">
                        <option v-for="freqRange in freqRanges" :value="freqRange.id" @click="updateFreqRange(freqRange)">{{freqRange.display}}</option>
                    </select>
                </label>

                <label class="label">sensitivity
                    <input type="range" id="sensitivity" min="0" max="4"/>
                    <div class="value"></div>
                </label>

                <label class="label">smoothing
                    <input type="range" id="smoothing" min="0" max=".9" step=".1" v-model="options.smoothing" @change="updateOptions"/>
                    <div class="value"></div>
                </label>
            </div>

            <div class="box center" id="checkboxes">
                <input type="checkbox" id="btn_bgcolor" v-model="options.showBgColor" @change="updateOptions"><span @click="updateCheckbox('showBgColor')">showBgColor</span></input>
                <input type="checkbox" id="btn_peaks" v-model="options.showPeaks" @change="updateOptions"><span @click="updateCheckbox('showPeaks')">showPeaks</span></input>
                <input type="checkbox" id="btn_leds" v-model="options.showLeds" @change="updateOptions"><span @click="updateCheckbox('showLeds')">showLeds</span></input>
                <input type="checkbox" id="btn_lumi" v-model="options.lumiBars" @change="updateOptions"><span @click="updateCheckbox('lumiBars')">lumiBars</span></input>
                <input type="checkbox" id="btn_reflex" v-model="options.reflexFit" @change="updateOptions"><span @click="updateCheckbox('reflexFit')">reflexFit</span></input>
                <input type="checkbox" id="btn_scale" v-model="options.showScale" @change="updateOptions"><span @click="updateCheckbox('showScale')">showScale</span></input>
                <input type="checkbox" id="btn_lores" v-model="options.loRes" @change="updateOptions"><span @click="updateCheckbox('loRes')">loRes</span></input>
                <input type="checkbox" id="btn_fps" v-model="options.showFPS" @change="updateOptions"><span @click="updateCheckbox('showFPS')">showFPS</span></input>
                <input type="checkbox" id="btn_logo" v-model="options.showLogo" @change="updateOptions"><span @click="updateCheckbox('showLogo')">Logo</span></input>
                <input type="checkbox" id="btn_freeze" v-model="options.frozen"  @change="toggleAnalyzer"><span @click="toggleAnalyzer">Freeze</span></input>
                <button id="btn_fullscr" @click="toggleFullscreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>fullscreen</title>
                        <path fill-rule="evenodd" d="M1 1v6h2V3h4V1H1zm2 12H1v6h6v-2H3v-4zm14 4h-4v2h6v-6h-2v4zm0-16h-4v2h4v4h2V1h-2z"/>
                    </svg>
                </button>
            </div>
        </div>

        <div class="credits">
            <strong>audioMotion-analyzer v<span id="version"></span></strong> Copyright &copy; 2018-2020 Henrique Avila Vianna.	Source code available on <a href="https://github.com/hvianna/audioMotion-analyzer">GitHub</a>.
        </div>
    </div>
</template>

<script>
    export default {
        name: "AudioMotionConfigDisplay",
        props: {
            audioMotion: {
                required: true
            }
        },
        data() {
            return {
                options: undefined,
                freqRanges: [
                    { id: 0, min: 20, max: 22000, display: '20Hz - 22KHz' },
                    { id: 1, min: 30, max: 16000, display: '30Hz - 16KHz' },
                    { id: 2, min: 100, max: 10000, display: '100Hz - 10KHz' }
                ]
            }
        },
        methods: {
            updateOptions: function() {
                this.audioMotion.setOptions(this.options)
            },
            updateFreqRange: function (freqRange) {
                this.options.minFreq = freqRange.min
                this.options.maxFreq = freqRange.max
                this.updateOptions()
            },
            toggleAnalyzer: function () {
                this.audioMotion.toggleAnalyzer()
                this.options.frozen = !this.options.frozen
            },
            toggleFullscreen: function () {
                this.audioMotion.toggleFullscreen()
            },
            updateCheckbox(name) {
                this.options[name] = !this.options[name]
                this.updateOptions()
            }
        },
        mounted() {
            this.options = this.audioMotion.getOptions()
        }
    }
</script>

<style scoped>
    #audiomotion-config {
        background: #222;
        color: #ccc;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        font-size: 13px;
        margin: 0 auto;
        max-width: 100%;
        width: 100%;
    }

    a {
        color: #b5c6d0;
    }
    a:not([class]):hover {
        color: #fff;
        filter: drop-shadow(.07em .07em .14em #f0fc) drop-shadow( -.07em -.07em .14em #f0fc);
    }

    button {
        margin: 0 6px;
        padding: 4px 4px 1px 4px;
        vertical-align: bottom;
        background: white;
    }
    button.active {
        background: #444;
        border: none;
        box-shadow: inset 1px 1px 0 #000;
        color: #0f0;
        padding: 8px;
        text-shadow: 2px 2px 10px #0f08, -2px -2px 10px #0f08;
    }
    #checkboxes span:hover {
        cursor: pointer;
    }

    canvas {
        display: block;
        width: 100%;
    }

    fieldset {
        border: none;
        display: inline-block;
        margin: 0;
        padding: 0;
        vertical-align: top;
    }
    fieldset:disabled {
        display: none;
    }

    header {
        position: relative;
    }
    h1 {
        color: #dfe6eb;
        filter: drop-shadow(2px 2px 0 #000);
    }
    h2 {
        margin: 1.5em 0 1em;
    }

    hr {
        border-color: #8888;
        border-width: 0 0 1px;
    }

    img {
        max-width: 100%;
    }

    input[type="range"] {
        width: 60px;
    }

    input[type="text"],
    select {
        margin: 6px 0;
        padding: 6px;
    }

    ul {
        line-height: 1.6;
    }

    .big {
        font-size: 120%;
    }

    .box {
        margin-top: 10px;
    }
    .box .title {
        font-weight: bold;
        line-height: 2;
        margin-right: 1em;
    }

    .label {
        display: inline-block;
        font-size: 12px;
        margin: 0 6px;
        vertical-align: top;
    }
    .label input,
    .label select {
        display: block;
    }

    .logo {
        background: linear-gradient(to bottom, #f2f6f8 0%, #d8e1e7 50%, #b5c6d0 51%, #e0eff9 100%);
        background-clip: text;
        font-family: Orbitron, sans-serif;
        padding-right: .5em;
        position: relative;
        text-decoration: none;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .logo:hover::after {
        animation: shine .5s ease-in-out;
        color: #fff;
        content: 'audioMotion-analyzer';
        left: 0;
        mask-image: linear-gradient(-75deg, transparent 45%, #000 50%, transparent 55%);
        mask-size: 200%;
        position: absolute;
        top: 0;
        -webkit-mask-position: -50%;
        -webkit-text-fill-color: #fff;
    }

    @keyframes shine {
        0% { -webkit-mask-position: 110%; }
        100% { -webkit-mask-position: -10%; }
    }

    #audio,
    #video {
        display: block;
        width: 100%;
    }

    .analyzer-configuration {
        background: #fff1;
        border: 1px solid #ccc8;
        margin-bottom: 20px;
        padding: 10px 0;
    }

    .credits {
        font-size: 12px;
        padding: 0 0 20px 0;
        text-align: center;
    }

    .header-nav {
        position: absolute;
        right: 0;
        top: 0;
    }
    .header-nav li {
        display: inline;
        margin-right: .5em;
    }
    .header-nav li:not(:last-child)::after {
        content: ' |';
        margin-left: .5em;
    }

    /* fluid full-width analyzer (single instance demo) */
    #container {
        height: 45vh;
        margin: 0 calc( 50% - 50vw );
    }

    #container1 {
        margin-bottom: 15px;
    }

    .center {
        text-align: center;
    }

    .main {
        display: inline-block;
        margin-right: 20px;
        width: 640px;
    }

    .aside {
        display: inline-block;
        vertical-align: top;
        width: 320px;
    }

    .selector {
        margin-bottom: 20px;
    }

    .selected {
        outline: 3px solid #c00;
    }

    /* overlay */
    #container.overlay {
        height: 563px;
        margin: 0 auto;
        position: relative;
        width: 100%;
    }

    .overlay canvas {
        bottom: 0;
        pointer-events: none; /* let mouse clicks pass to the underlying video element */
        position: absolute;
        touch-action: none; /* ditto for touch events */
    }

    .overlay:not(:fullscreen):hover canvas {
        opacity: .5;
    }

</style>
