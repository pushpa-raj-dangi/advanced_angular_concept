import { FileSizePipe } from './file-size.pipe';
describe('FileSizePipe', () => {
  const pipe = new FileSizePipe();

  it('should convert bytes to mb', () => {
    expect(pipe.transform(123456789)).toBe('117.74MB');
    expect(pipe.transform(987654321)).toBe('941.90MB');
  });
  it('should use default extension when not supplied', () => {});
  it('should override the extension when supplied', () => {});
});
