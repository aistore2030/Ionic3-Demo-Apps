
export class SettingsService {
  private chnageBackground: boolean = false;

  setBackground(isChange: boolean) {
    this.chnageBackground = isChange;
  }
  isChnageBackground(): boolean {
    return this.chnageBackground;
  }
}
