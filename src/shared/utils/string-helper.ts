class StringHelper {
  static getTextWidth(
    text: string,
    {
      fontSize = 15,
      font = 'Inter',
    }: {
      fontSize?: number;
      font?: string;
    } = {},
  ): number {
    if (typeof document === 'undefined') return 0;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    context.font = `${fontSize}px ${font}, Arial`;

    return Math.ceil(context.measureText(text).width);
  }

  static capitalizeFirstLetter(val: string): string {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
}

export default StringHelper;
