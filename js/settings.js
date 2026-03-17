document.addEventListener('DOMContentLoaded', () => {
    // --- Storage Key ---
    const SETTINGS_KEY = 'schoolSettings';

    // --- DOM Elements ---
    const schoolNameInput = document.getElementById('school-name');
    const schoolAddressInput = document.getElementById('school-address');
    const schoolPhoneInput = document.getElementById('school-phone');
    const schoolEmailInput = document.getElementById('school-email');
    const currencySymbolInput = document.getElementById('currency-symbol');
    const saveSettingsBtn = document.getElementById('save-settings-btn');

    // --- Load existing settings ---
    function loadSettings() {
        const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY));
        if (settings) {
            schoolNameInput.value = settings.schoolName || '';
            schoolAddressInput.value = settings.schoolAddress || '';
            schoolPhoneInput.value = settings.schoolPhone || '';
            schoolEmailInput.value = settings.schoolEmail || '';
            currencySymbolInput.value = settings.currencySymbol || '';
        }
    }

    // --- Save settings ---
    saveSettingsBtn.addEventListener('click', () => {
        const settings = {
            schoolName: schoolNameInput.value.trim(),
            schoolAddress: schoolAddressInput.value.trim(),
            schoolPhone: schoolPhoneInput.value.trim(),
            schoolEmail: schoolEmailInput.value.trim(),
            currencySymbol: currencySymbolInput.value.trim(),
        };

        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));

        alert('ترتیبات کامیابی سے محفوظ ہوگئیں۔');
    });

    // --- Initial Load ---
    loadSettings();
});
