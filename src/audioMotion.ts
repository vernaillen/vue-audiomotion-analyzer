import AudioMotionAnalyzer, { GradientOptions, Options } from 'audiomotion-analyzer'

export default class AudioMotion {
  private audioMotionObj: AudioMotionAnalyzer | undefined
  constructor(el: HTMLElement, options: Options) {
    this.audioMotionObj = new AudioMotionAnalyzer(el, options)

    const gradientOptions: GradientOptions = {
      bgColor: '#000000',
      colorStops: [
        { pos: 0, color: '#9C8E1B' },
        { pos: 1, color: '#9C8E1B' },
      ],
    }
    this.audioMotionObj.registerGradient('my-gradient', gradientOptions)
    this.audioMotionObj.setOptions({ gradient: 'my-gradient' })
  }
  connectAudioNode(audioNode: AudioNode) {
    if (this.audioMotionObj) this.audioMotionObj.connectInput(audioNode)
  }
  toggleFullscreen() {
    if (this.audioMotionObj) this.audioMotionObj.toggleFullscreen()
  }
  toggleAnalyzer() {
    if (this.audioMotionObj) this.audioMotionObj.toggleAnalyzer()
  }
}
