import { zxcvbnOptions } from '@zxcvbn-ts/core'

export const loadLanguagePackage = async (language: string) => {
  // no package available for
  // - Dutch (Nederlands)
  // - Galician
  // - Norwegian bokmal
  // fallback to english
  switch (language) {
    case 'fr':
      return await import('@zxcvbn-ts/language-fr')
    case 'de':
      return await import('@zxcvbn-ts/language-de')
    case 'it':
      return await import('@zxcvbn-ts/language-it')
    case 'es':
      return await import('@zxcvbn-ts/language-es-es')
    case 'pl':
      return await import('@zxcvbn-ts/language-pl')
    default:
      return await import('@zxcvbn-ts/language-en')
  }
}

export const setZxcvbnOptions = async (language: string) => {
  const zxcvbnCommonPackage = await import('@zxcvbn-ts/language-common')
  const zxcvbnLanguagePackage = await loadLanguagePackage(language)
  const options = {
    graphs: zxcvbnCommonPackage.adjacencyGraphs,
    dictionary: {
      ...zxcvbnCommonPackage.dictionary,
      ...zxcvbnLanguagePackage.dictionary,
    },
  }
  zxcvbnOptions.setOptions(options)
}

export const getPasswordStrength = (strength: number): string => {
  switch (strength) {
    case 2:
      return 'AVERAGE'
    case 3:
      return 'GOOD'
    case 4:
      return 'STRONG'
    default:
      return 'WEAK'
  }
}
