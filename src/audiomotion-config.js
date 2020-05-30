import Vue from 'vue/dist/vue'

const template = `
    <div id="audiomotion-config">
        <div class="analyzer-configuration">
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

            <div class="box center">
                <input type="checkbox" id="btn_bgcolor" v-model="options.showBgColor" @change="updateOptions">showBgColor</input>
                <input type="checkbox" id="btn_peaks" v-model="options.showPeaks" @change="updateOptions">showPeaks</input>
                <input type="checkbox" id="btn_leds" v-model="options.showLeds" @change="updateOptions">showLeds</input>
                <input type="checkbox" id="btn_lumi" v-model="options.lumiBars" @change="updateOptions">lumiBars</input>
                <input type="checkbox" id="btn_reflex" v-model="options.reflexFit" @change="updateOptions">reflexFit</input>
                <input type="checkbox" id="btn_scale" v-model="options.showScale" @change="updateOptions">showScale</input>
                <input type="checkbox" id="btn_lores" v-model="options.loRes" @change="updateOptions">loRes</input>
                <input type="checkbox" id="btn_fps" v-model="options.showFPS" @change="updateOptions">showFPS</input>
                <input type="checkbox" id="btn_logo" v-model="options.showLogo" @change="updateOptions">Logo</input>
                <input type="checkbox" id="btn_freeze" v-model="options.isOn" data-func="toggleAnalyzer" @change="updateOptions">Freeze</input>
                <input type="checkbox" id="btn_fullscr" v-model="options.isFullscreen" data-func="toggleFullscreen" @change="updateOptions">Fullscreen</input>
            </div>
        </div>

        <div class="credits">
            <strong>audioMotion-analyzer v<span id="version"></span></strong> Copyright &copy; 2018-2020 Henrique Avila Vianna.\tSource code available on <a href="https://github.com/hvianna/audioMotion-analyzer">GitHub</a>.
        </div>
    </div>`;

export default (audioMotion) => {
    return {
        render(createElement) {
            const compiledTemplate = Vue.compile(template);
            let base = {
                data () {
                    return {
                        audioMotion : audioMotion,
                        options: audioMotion.getOptions(),
                        freqRanges: [
                            { id: 0, min: 20, max: 22000, display: '20Hz - 22KHz' },
                            { id: 1, min: 30, max: 16000, display: '30Hz - 16KHz' },
                            { id: 2, min: 100, max: 10000, display: '100Hz - 10KHz' }
                        ]
                    }
                },
                methods: {
                    updateOptions: function() {
                        audioMotion.setOptions(this.options)
                    },
                    updateFreqRange: function (freqRange) {
                        this.options.minFreq = freqRange.min
                        this.options.maxFreq = freqRange.max
                        this.updateOptions()
                    }
                }
            }
            let component = Object.assign({}, compiledTemplate, base)
            return createElement(component);
        },

    }
}
