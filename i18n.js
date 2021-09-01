import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const resources = {
  pt: {
    translation: {
      firebase: {
        errors: {
          auth: {
            "invalid-email": "E-mail não está em um formato válido.",
            "wrong-password": "Usuário ou senha não está correto. Verifique as informações digitadas e tente novamente.",
            "user-not-found": "Usuário ou senha não está correto. Verifique as informações digitadas e tente novamente.",
            "weak-password": "Por favor, informe uma senha com pelos menos seis caracteres.",
            "email-already-in-use": "E-mail informado já está cadastrado."
          }
        }
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',

    interpolation: {
      escapeValue: false
    }
  });


export default i18n;