import {computed, DOCUMENT, effect, inject, Injectable, signal} from '@angular/core';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private htmlElement = this.document.documentElement;

  private STORAGE_KEY = 'theme-preference';

  private userTheme = signal<Theme>(this.#getInitialTheme());

  currentTheme = computed(() => {
    const choice = this.userTheme();

    if (choice === 'system') return this.#getSystemPreference();
    return choice;
  });

  isDark = computed(() => this.currentTheme() === 'dark');

  constructor() {
    effect(() => {
      this.#applyTheme(this.currentTheme());
    });

    const media = window.matchMedia('(perfers-color-scheme: dark)');
    media.addEventListener('change', this.#onSystemChange.bind(this));
  }

  toggle(): void {
    const current = this.currentTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    this.userTheme.set(next);
    localStorage.setItem(this.STORAGE_KEY, next);
  }

  setTheme(theme: Theme): void {
    this.userTheme.set(theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
  }

  #getInitialTheme(): Theme {
    const saved = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
    if (saved && (saved === 'light' || saved === 'dark' || saved === 'system')) {
      return saved;
    }
    return 'system';
  }

  #getSystemPreference(): 'light' | 'dark' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  #onSystemChange(event: MediaQueryListEvent): void {
    if (this.userTheme() === 'system') {
      this.#applyTheme(event.matches ? 'dark' : 'light');
    }
  }

  #applyTheme(theme: 'light' | 'dark'): void {
    if (theme === 'dark') {
      this.htmlElement.classList.add('dark');
      this.htmlElement.classList.remove('light');
    } else {
      this.htmlElement.classList.add('light');
      this.htmlElement.classList.remove('dark');
    }
  }

}
