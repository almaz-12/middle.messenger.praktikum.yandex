type Handler = (...args: unknown[]) => void;
type Listeners = { [key:string]: unknown[] };

export default class EventBus {
  private listeners: Listeners = {};

  on(event: string, callback: Handler): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: Handler): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: string, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach((listener: Handler) => {
      listener(...args);
    });
  }
}
