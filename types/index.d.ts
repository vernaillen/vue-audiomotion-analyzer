import "./vue";

export interface AudioMotion {
    getAnalyzer(): AnalyserNode
    getOptions(): any
    toggleFullscreen(): void
    toggleAnalyzer(): void
}
