import { Controller } from 'stimulus'


export default class extends Controller {

    connect() {
        this.isDarkMode = document.documentElement.classList.contains("dark")
    }

    toggle() {
        const oldMode = this.isDarkMode ? "dark": "light"
        const newMode = this.isDarkMode ? "light": "dark"

        document.documentElement.classList.add(newMode)
        document.documentElement.classList.remove(oldMode)
        this.isDarkMode = !this.isDarkMode

        window.localStorage.setItem('color-mode', newMode)
    }
}
