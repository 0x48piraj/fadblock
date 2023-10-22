export class ExtensionApiProvider {
  protected static provider?: ExtensionApiProvider;

  static provide(api: typeof chrome | typeof browser) {
    this.provider = new ExtensionApiProvider(api);
  }

  static get() {
    return this.provider?.get();
  }

  constructor(protected api: typeof chrome | typeof browser) {}

  get() {
    return this.api;
  }
}
