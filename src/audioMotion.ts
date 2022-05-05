import AudioMotionAnalyzer, { GradientOptions, Options } from 'audiomotion-analyzer'

class AudioMotion {
  private audioMotionObj: AudioMotionAnalyzer | undefined
  init(el: HTMLElement, options: Options) {
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
  toggleFullscreen() {
    if (this.audioMotionObj) this.audioMotionObj.toggleFullscreen()
  }
  toggleAnalyzer() {
    if (this.audioMotionObj) this.audioMotionObj.toggleAnalyzer()
  }
}

export default new AudioMotion()
