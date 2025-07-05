declare module 'markdown-it' {
  class MarkdownIt {
    constructor(options?: Record<string, unknown>);
    render(text: string): string;
  }
  export = MarkdownIt;
} 